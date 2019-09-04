import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAlphabetical, setReferenceDatabaseToPublic } from '../actions/filters';
import { setExercisesPublic } from '../actions/exercises'
import algoliasearch from 'algoliasearch/lite'

export const AddExerciseListFilters = ({
    filters,
    setTextFilter, 
    setReferenceDatabasePublic,
    sortByDate, 
    sortByAlphabetical,
    setExercisesPublic 
  }) => {
 
  const searchClient = algoliasearch (
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
  )

  const index = searchClient.initIndex('exercises');

  const [text, setText] = useState('')
    
  const onTextChange = (e) => {
    setTextFilter(e.target.value)
    setText(e.target.value)
  }

  const onSortChange = (e) => {
    if (e.target.value === 'date') {
      sortByDate()
    } else if (e.target.value === 'alphabetical') {
      sortByAlphabetical()
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    index
      .search({
        query: text
      })
      .then((responses) => {
        const array = responses.hits
        const newExercises = array.map((exercise)=>{
          return{
            description:exercise.description,
            type:exercise.type,
            energy:exercise.energy,
            time:exercise.time,
            id:exercise.objectID
          }
        })
        setExercisesPublic(newExercises)
      }).then(()=>{
        setReferenceDatabasePublic()
      })
}

    return (
      
      <div className="header__content--filters"> 
      <form className="filters-text-input__span-container" onSubmit={onSubmit}>
          <div className="input-group__item-page-header">
            <input
              type="text"
              className="filters-text-input"
              placeholder="SEARCH EXERCISES"
              value={text}
              onChange={onTextChange}
            />
          </div>
          <div className="input-group__item-page-header">
            <select
              className="minimal"
              value={filters.sortBy}
              onChange={onSortChange}
            >
              <option value="date">DATE</option>
              <option value="alphabetical">ALPHABETICAL</option>
            </select>
          </div>
            <button className="button filters-button--form-page-header">Search Online</button>
            </form>   
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAlphabetical: () => dispatch(sortByAlphabetical()),
  setReferenceDatabasePublic: () => dispatch(setReferenceDatabaseToPublic()),
  setExercisesPublic: (exercises) => dispatch(setExercisesPublic(exercises))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddExerciseListFilters);

