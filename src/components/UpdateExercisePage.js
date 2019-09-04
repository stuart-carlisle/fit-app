import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UpdateExerciseForm from './UpdateExerciseForm'
import { startUpdateExerciseDiary, startRemoveExerciseDiary } from '../actions/exercises'

export const UpdateExercisePage = (props) => {

  const onSubmit = (exercise) => {
    props.startUpdateExerciseDiary(props.exercise.id,exercise)
    props.history.push('/diary');
  }

  const onRemove = () => {
    props.startRemoveExerciseDiary({id: props.exercise.id})
    props.history.push('/diary');
  }

    return(
      <div>
      <Link className="button__back-button" to={`/diary`}><img className="image__header" src="/images/back-arrow.svg"/></Link>
        <div className="page-header__filter page-header__filter--with-back">
          <div className="content-container">
            <h1 className="page-header__title">UPDATE EXERCISE</h1>
          </div>
        </div>
        <div className="show-for-mobile page-header__margin"></div>
        <div className="content-container">
          <UpdateExerciseForm id="update-exercise-form" exercise={props.exercise} onSubmit={onSubmit} onRemove={onRemove}/>
        </div>
      </div>
    )
}

const mapStateToProps = (state,props) => {
  return {
    exercise: state.exercisesDiary.find((exercise) => exercise.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) =>({
  startUpdateExerciseDiary: (id, exercise) => dispatch(startUpdateExerciseDiary(id, exercise)),
  startRemoveExerciseDiary: (id) => dispatch(startRemoveExerciseDiary(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateExercisePage)


