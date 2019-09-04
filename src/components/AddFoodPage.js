import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AddFoodListFilters from './AddFoodListFilters'
import AddFoodsList from './AddFoodsList'
import { setTextFilter, sortByDate, setReferenceDatabaseToPrivate } from '../actions/filters'

export const AddFoodPage = ({ setTextFilter, sortByDate, setReferenceDatabaseToPrivate}) => {
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
        <AddFoodListFilters />
      </div>  
    </div>
    <AddFoodsList />
    <div className="content-container">
    <Link className="button button--link" to={`/create-food`}>+ CUSTOM FOOD</Link>
    </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  setReferenceDatabaseToPrivate: () => dispatch(setReferenceDatabaseToPrivate())
})

export default connect (undefined, mapDispatchToProps)(AddFoodPage)