import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UpdateFoodForm from './UpdateFoodForm'
import { startUpdateFoodDiary, startRemoveFoodDiary } from '../actions/foods'

export const UpdateFoodPage = (props) => {

  const onSubmit = (numberOfServings, food) => {
    props.startUpdateFoodDiary(props.food.id,{...food, numberOfServings})
    props.history.push('/diary');
  }

  const onRemove = () => {
    props.startRemoveFoodDiary({id: props.food.id})
    props.history.push('/diary');
  }

    return(
      <div>
      <Link className="button__back-button" to={`/diary`}><img className="image__header" src="/images/back-arrow.svg"/></Link>
        <div className="page-header__filter page-header__filter--with-back">
          <div className="content-container">
            <h1 className="page-header__title">UPDATE FOOD</h1>
          </div>
        </div>
        <div className="show-for-mobile page-header__margin"></div>
        <div className="content-container">
          <UpdateFoodForm id="update-food-form" targets={props.targets} food={props.food} onSubmit={onSubmit} onRemove={onRemove}/>
        </div>
      </div>
    )
}

const mapStateToProps = (state,props) => {
  return {
    food: state.foodsDiary.find((food) => food.id === props.match.params.id),
    targets: state.targets
  }
}

const mapDispatchToProps = (dispatch) =>({
  startUpdateFoodDiary: (id, food) => dispatch(startUpdateFoodDiary(id, food)),
  startRemoveFoodDiary: (id) => dispatch(startRemoveFoodDiary(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFoodPage)


