import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DateFilter from './DateFilter'
import DiaryFoodsList from './DiaryFoodsList'
import DiaryExercisesList from './DiaryExercisesList'
import { setMealFilter } from '../actions/filters'

export const DiaryPage = ({ setMealFilter }) => {
  useEffect(()=>{
    localStorage.removeItem('refreshed')
  },[])

  return(
    <div className="content-container__main">
    <div className="page-header__date-filter">
      <div className="content-container">
      <DateFilter />
      </div> 
    </div>
    <DiaryFoodsList key={"breakfast"} meal="breakfast"/>
    <div className="content-container">
  <Link className="button button--link" to={`/add`} onClick={()=>{setMealFilter('breakfast')}}>+ Add Food</Link>
    </div>
    <DiaryFoodsList key={"lunch"} meal="lunch"/>
    <div className="content-container">
    <Link className="button button--link" to={`/add`} onClick={()=>{setMealFilter('lunch')}}>+ Add Food</Link>
    </div>
    <DiaryFoodsList key={"dinner"} meal="dinner"/>
    <div className="content-container">
    <Link className="button button--link" to={`/add`} onClick={()=>{setMealFilter('dinner')}}>+ Add Food</Link>
    </div>
    <DiaryFoodsList key={"snacks"} meal="snacks"/>
    <div className="content-container">
    <Link className="button button--link" to={`/add`} onClick={()=>{setMealFilter('snacks')}}>+ Add Food</Link>
    </div>
    <DiaryExercisesList />
    <div className="content-container">
    <Link className="button button--link" to={`/add-exercise`}>+ Add Exercise</Link>
    </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
  setMealFilter: (meal) => dispatch(setMealFilter(meal))
})

export default connect(undefined, mapDispatchToProps)(DiaryPage);
