import React from 'react'
import { connect } from 'react-redux'
import DiaryFoodsListItem from './DiaryFoodsListItem'
import selectFoods from '../selectors/diary'

export const DiaryFoodsList = ({foods,meal}) => {
  const mealTitle= meal.charAt(0).toUpperCase() + meal.slice(1)
  
  return(<div className="content-container__diary">
   <div className="list-header">
    <div className="">{mealTitle}</div>
    <div className="show-for-tablet">Calories</div>
    <div className="show-for-mobile">Cals</div>
   </div>
    <div className="list-body">
      {
        foods.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Foods For This Day</span>
          </div>
        ) : (
         foods.map((food) => {
            return <DiaryFoodsListItem key={food.id} {...food} />
          })
        )
      }
    </div>
  </div>  
  )
}

const mapStateToProps = (state, props) => {
  return {
    foods: selectFoods(state.foodsDiary, state.filters, props.meal)
  }
}

export default connect(mapStateToProps)(DiaryFoodsList);
