import React from 'react'
import { connect } from 'react-redux'
import AddExercisesListItem from './AddExercisesListItem'
import selectExercises from '../selectors/exercises'

export const AddExercisesList = ({exercises}) => {
  let exercisesTopResults
  
  if(exercises.length>10){
    exercisesTopResults = exercises.slice(0,10)
  }else{
    exercisesTopResults = exercises
  }

  return(<div className="content-container">
   <div className="list-header">
    <div className="">Exercise</div>
    <div className="show-for-tablet">Calories Burned</div>
    <div className="show-for-mobile">Cals Burned</div>
   </div>
    <div className="list-body">
      {
        exercisesTopResults.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Exercises In History</span>
          </div>
        ) : (
         exercisesTopResults.map((exercise) => {
            return <AddExercisesListItem key={exercise.id} {...exercise} />
          })
        )
      }
    </div>
  </div>  
  )
}

const mapStateToProps = (state) => {
  return {
    exercises: state.filters.referenceDatabase === 'public' ? state.exercisesPublic : selectExercises(state.exercisesPrivate,  state.filters)
  }
}

export default connect(mapStateToProps)(AddExercisesList);
