import React from 'react'
import { connect } from 'react-redux'
import AddFoodsListItem from './AddFoodsListItem'
import selectFoods from '../selectors/foods'

export const AddFoodsList = ({ foods }) => {
  let foodsTopResults
  
  if(foods.length>8){
    foodsTopResults = foods.slice(0,8)
  }else{
    foodsTopResults = foods
  }

  return(<div className="content-container__diary">
   <div className="list-header">
    <div className="">Food</div>
    <div className="show-for-tablet">Calories</div>
    <div className="show-for-mobile">Cals</div>
   </div>
    <div className="list-body">
      {
        foodsTopResults.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Foods In History</span>
          </div>
        ) : (
         foodsTopResults.map((food) => {
            return <AddFoodsListItem key={food.id} {...food} />
          })
        )
      }
    </div>
  </div>  
  )
}

const mapStateToProps = (state) => {
  return {
    foods: state.filters.referenceDatabase === 'public' ? state.foodsPublic : selectFoods(state.foodsPrivate,  state.filters)
  }
}

export default connect(mapStateToProps)(AddFoodsList);
