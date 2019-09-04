// Get visible foods
import numeral from 'numeral'

export default (diaryFoods, { date }) => {
  
  return diaryFoods.filter((food) => {
      const dateMatch = food.diaryDate === date.valueOf()
      return dateMatch
    })
    .map((food) => {
      const num = numeral(food.numberOfServings).value()
      const calories = numeral(food.nutrition.energy.amount).value()
      const totalEnergy = calories*num
      return totalEnergy
    })
    .reduce((a,b)=>a+b,0)
} 

export const selectExerciseDailyTotal = (diaryExercises, {date}) => {
  return diaryExercises.filter((exercise) => {
    const dateMatch = exercise.diaryDate === date.valueOf()
    return dateMatch
  }).map((exercise) => {
    return numeral(exercise.energy).value()
  })
  .reduce((a,b)=>a+b,0) 
}