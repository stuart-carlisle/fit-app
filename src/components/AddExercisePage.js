import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AddExerciseListFilters from './AddExerciseListFilters'
import AddExercisesList from './AddExercisesList'
import { setTextFilter, sortByDate, setReferenceDatabaseToPrivate } from '../actions/filters'

export const AddExercisePage = ({ setTextFilter, sortByDate, setReferenceDatabaseToPrivate}) => {
  useEffect(()=>{
    localStorage.removeItem('refreshed')
      setTextFilter('')
      sortByDate()
      setReferenceDatabaseToPrivate()
  },[])
    return(
      <div>
      <Link className="button__back-button" to={`/diary`}><img className="image__header" src="/images/back-arrow.svg"/></Link>
    <div className="page-header__filter page-header__filter--with-back">
      <div className="content-container">
        <AddExerciseListFilters />
      </div>  
    </div>
    <AddExercisesList />
    <div className="content-container">
    <Link className="button button--link" to={`/create-exercise`}>+ CREATE CUSTOM EXERCISE</Link>
    </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  setReferenceDatabaseToPrivate: () => dispatch(setReferenceDatabaseToPrivate())
})

export default connect (undefined, mapDispatchToProps)(AddExercisePage)