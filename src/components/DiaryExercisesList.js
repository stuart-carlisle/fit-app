import React from 'react'
import { connect } from 'react-redux'
import DiaryExercisesListItem from './DiaryExercisesListItem'
import selectExercises from '../selectors/diaryExercises'

export const DiaryExercisesList = ({exercises}) => {
  return(<div className="content-container__diary">
   <div className="list-header">
    <div className="">Exercise</div>
    <div className="show-for-tablet">Calories Burned</div>
    <div className="show-for-mobile">Cals</div>
   </div>
    <div className="list-body">
      {
        exercises.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Exercises For This Day</span>
          </div>
        ) : (
         exercises.map((exercise) => {
            return <DiaryExercisesListItem key={exercise.id} {...exercise} />
          })
        )
      }
    </div>
  </div>  
  )
}

const mapStateToProps = (state) => {
  return {
    exercises: selectExercises(state.exercisesDiary, state.filters)
  }
}

export default connect(mapStateToProps)(DiaryExercisesList);
