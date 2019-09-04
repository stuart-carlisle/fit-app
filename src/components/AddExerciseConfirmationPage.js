import React from 'react'
import { connect } from 'react-redux'
import AddExerciseForm from './AddExerciseForm'
import { Link } from 'react-router-dom'
import { startAddExerciseDiary, startAddExercisePrivate, startUpdateExercisePrivate } from '../actions/exercises'

export const AddExerciseConfirmationPage = (props) => {
  
  const onSubmit = (referenceDatabase, diaryDate, lastUsed, exerciseDescAndType, time, energy) => {
    if (referenceDatabase==='public'){
      props.startAddExercisePrivate({...exerciseDescAndType, time, energy, lastUsed})
    } else if (referenceDatabase==='private'){
      props.startUpdateExercisePrivate(props.exercise.id,{...exerciseDescAndType, time, energy, lastUsed})
    }
    props.startAddExerciseDiary({...exerciseDescAndType, time, diaryDate, energy})
    props.history.push('/diary');
  }
  

  return (
     <div>
     <Link className="button__back-button" to={`/add-exercise`}><img className="image__header" src="/images/back-arrow.svg"/></Link>
        <div className="page-header__filter page-header__filter--with-back">
          <div className="content-container">
            <h1 className="page-header__title">ADD EXERCISE</h1>
          </div>
        </div>
        <div className="show-for-mobile page-header__margin"></div>
        <div className="content-container">
        <AddExerciseForm id="add-exercise-form" exercise={props.exercise} onSubmit={onSubmit} />
        </div>
     </div>
 )
}

const mapStateToProps = (state,props) => {
  if(state.filters.referenceDatabase==='public'){
    return {
      exercise: state.exercisesPublic.find((exercise) => exercise.id === props.match.params.id)
    }
  }else if(state.filters.referenceDatabase==='private'){
    return {
      exercise: state.exercisesPrivate.find((exercise) => exercise.id === props.match.params.id)
    }
  }
}

const mapDispatchToProps = (dispatch) =>({
    startAddExerciseDiary: (exercise) => dispatch(startAddExerciseDiary(exercise)),
    startUpdateExercisePrivate: (id, exercise) => dispatch(startUpdateExercisePrivate(id, exercise)),
    startAddExercisePrivate: (exercise) => dispatch(startAddExercisePrivate(exercise))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddExerciseConfirmationPage);




