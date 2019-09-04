import React from 'react'
import { connect } from 'react-redux'
import AddFoodForm from './AddFoodForm'
import { Link } from 'react-router-dom'
import { startAddFoodDiary, startAddFoodPrivate, startUpdateFoodPrivate } from '../actions/foods'

export const AddFoodConfirmationPage = (props) => {
  
  const onSubmit = (referenceDatabase, diaryDate, lastUsed, numberOfServings, food, meal) => {
    if (referenceDatabase==='public'){
      props.startAddFoodPrivate({...food,lastUsed})
    } else if (referenceDatabase==='private'){
      props.startUpdateFoodPrivate(props.food.id,{...food,lastUsed})
    }
    props.startAddFoodDiary({...food, diaryDate, numberOfServings, meal})
    props.history.push('/diary');
  }
  

  return (
     <div>
     <Link className="button__back-button" to={`/add`}><img className="image__header" src="/images/back-arrow.svg"/></Link>
        <div className="page-header__filter page-header__filter--with-back">
          <div className="content-container">
            <h1 className="page-header__title">ADD FOOD</h1>
          </div>
        </div>
        <div className="show-for-mobile page-header__margin"></div>
        <div className="content-container">
        <AddFoodForm id="add-food-form" targets={props.targets} food={props.food} onSubmit={onSubmit} />
        </div>
     </div>
 )
}

const mapStateToProps = (state,props) => {
  if(state.filters.referenceDatabase==='public'){
    return {
      food: state.foodsPublic.find((food) => food.id === props.match.params.id),
      targets: state.targets
    }
  }else if(state.filters.referenceDatabase==='private'){
    return {
      food: state.foodsPrivate.find((food) => food.id === props.match.params.id),
      targets: state.targets
    }
  }
}

const mapDispatchToProps = (dispatch) =>({
    startAddFoodDiary: (food) => dispatch(startAddFoodDiary(food)),
    startUpdateFoodPrivate: (id, food) => dispatch(startUpdateFoodPrivate(id, food)),
    startAddFoodPrivate: (food) => dispatch(startAddFoodPrivate(food))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFoodConfirmationPage);




