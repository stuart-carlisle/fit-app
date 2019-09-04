import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAlphabetical, setReferenceDatabaseToPublic } from '../actions/filters'
import { setFoodsPublic } from '../actions/foods'
import algoliasearch from 'algoliasearch/lite'

export const AddFoodListFilters = ({
    filters,
    setTextFilter, 
    setReferenceDatabasePublic, 
    sortByDate, 
    sortByAlphabetical,
    setFoodsPublic
  }) => {
  
  const searchClient = algoliasearch (
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
  )

  const index = searchClient.initIndex('foods');
  
  const [text,setText]=useState('')

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
          const newFoods = array.map((food)=>{
            return{
              description:food.description,
              nutrition:food.nutrition,
              serving:food.serving,
              id:food.objectID
            }
          })
          setFoodsPublic(newFoods)
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
              placeholder="SEARCH FOODS"
              value={filters.text}
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
            <button className="button filters-button--form-page-header">SEARCH ONLINE</button>
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
  setFoodsPublic: (foods) => dispatch(setFoodsPublic(foods))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddFoodListFilters);
