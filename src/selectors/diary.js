// Get visible foods
import numeral from 'numeral'

export default (diaryFoods, { date }, meal) => {
  
  return diaryFoods.filter((food) => {
      const dateMatch = food.diaryDate === date.valueOf()
      const mealMatch = food.meal === meal
      return dateMatch && mealMatch
    })
    .map((food) => {
      const num = numeral(food.numberOfServings).value()
      const calories = numeral(food.nutrition.energy.amount).value()
      const totalEnergy = calories*num
      const servingSize = numeral(food.serving.servingSize.size).value()
      const totalServingSize = servingSize*num

      const newFood = {
        ...food,
        totalServingSize,
        totalEnergy
      } 
      
      return newFood
    })
} 
