import React from 'react'
import { connect } from 'react-redux';
import CreateFoodForm from './CreateFoodForm';
import { startAddFoodPrivate, startAddFoodDiary } from '../actions/foods';
import { Link } from 'react-router-dom'
import { databasePublic } from '../firebase/firebase'

export const CreateFoodPage = (props) => {
    
    const onSubmit = (food) => {
      const privateFood = {
        ...food,
        description: food.description.toUpperCase()
      }
      
      const publicFood = { 
        description: food.description.toUpperCase(), 
        serving: food.serving, 
        nutrition: food.nutrition 
      }
      databasePublic.ref('foods').push(publicFood)
      props.startAddFoodPrivate(privateFood)
      props.startAddFoodDiary(privateFood)
      props.history.push('/diary')
    }
    
      return(
        <div>
        <Link className="button__back-button" to={'/add'}><img className="image__header" src="/images/back-arrow.svg"/></Link>
          <div className="page-header__filter page-header__filter--with-back">
            <div className="content-container">
              <h1 className="page-header__title">CREATE FOOD</h1>
            </div>
          </div>
          <div className="show-for-mobile page-header__margin"></div>
          <div className="content-container">
            <CreateFoodForm
              id="food-form"
              onSubmit={onSubmit}
            />
          </div>
        </div>
      )
}
  
  
const mapDispatchToProps = (dispatch) =>({
    startAddFoodPrivate: (food) => dispatch(startAddFoodPrivate(food)),
    startAddFoodDiary: (food) => dispatch(startAddFoodDiary(food))
})

export default connect(undefined, mapDispatchToProps)(CreateFoodPage);
