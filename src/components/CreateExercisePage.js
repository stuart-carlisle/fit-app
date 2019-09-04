import React from 'react'
import { connect } from 'react-redux';
import ExerciseForm from './ExerciseForm';
import { startAddExercisePrivate, startAddExerciseDiary } from '../actions/exercises';
import { Link } from 'react-router-dom'
import { databasePublic } from '../firebase/firebase'

export const CreateExercisePage = (props) => {
    
    const onSubmit = (exercise) => {
      const privateExercise = { 
        ...exercise,
        description: exercise.description.toUpperCase()
      }
      const publicExercise = { 
        description: exercise.description.toUpperCase(), 
        type: exercise.type, 
        energy: exercise.energy,
        time: exercise.time 
      }
        databasePublic.ref('exercises').push(publicExercise)
        props.startAddExercisePrivate(privateExercise)
        props.startAddExerciseDiary(privateExercise)
        props.history.push('/diary');
    }
     
    return(
        <div>
        <Link className="button__back-button" to={'/add-exercise'}><img className="image__header" src="/images/back-arrow.svg"/></Link>
        <div className="page-header__filter page-header__filter--with-back">
            <div className="content-container">
              <h1 className="page-header__title">CREATE EXERCISE</h1>
            </div>
          </div>
          <div className="show-for-mobile page-header__margin"></div>
          <div className="content-container">
            <ExerciseForm
              id="exercise-form"
              onSubmit={onSubmit}
            />
          </div>
        </div>
    )
}
  
const mapDispatchToProps = (dispatch) =>({
    startAddExercisePrivate: (exercise) => dispatch(startAddExercisePrivate(exercise)),
    startAddExerciseDiary: (exercise) => dispatch(startAddExerciseDiary(exercise))
})
  
export default connect(undefined, mapDispatchToProps)(CreateExercisePage);
