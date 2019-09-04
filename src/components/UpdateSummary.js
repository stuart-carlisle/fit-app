import React from 'react'
import MultiColorProgressBar from './MultiColorProgressBar'

export const UpdateSummary =({data}) => {
    const calorieTarget = data.targets.calorieTarget
    const carbsTarget = data.targets.carbsTarget
    const fatTarget = data.targets.fatTarget

    const calories = data.calories
    const fat = data.fat
    const carbs = data.carbs

    const percentageCalories = Math.round((calories/ calorieTarget)*100)
    const percentageCaloriesLeft = percentageCalories ? 100-percentageCalories : 100
    
    const readingsCalories = percentageCaloriesLeft <= 0 ? 
    [
        {
            value: 100,
            color: '#ff0808'
        }
    ] :
    
    [
        {
            value: percentageCalories,
            color: '#4472C7'
        },
        {
            value: percentageCaloriesLeft >= 100 ? 100 : percentageCaloriesLeft,
            color: '#48e880'
        }
    ]
  
    const percentageCarbs = Math.round((carbs/ carbsTarget)*100)
    const percentageCarbsLeft = percentageCarbs ? 100-percentageCarbs : 100
    
    const readingsCarbs = percentageCarbsLeft <= 0 ? 
    [
        {
            value: 100,
            color: '#ff0808'
        }
    ] :
    
    [
        {
            value: percentageCarbs,
            color: '#4472C7'
        },
        {
            value: percentageCarbsLeft >= 100 ? 100 : percentageCarbsLeft,
            color: '#48e880'
        }
    ]

    const percentageFat = Math.round((fat/ fatTarget)*100)
    const percentageFatLeft = percentageFat ? 100-percentageFat : 100
    
    const readingsFat = percentageFatLeft <= 0 ? 
    [
        {
            value: 100,
            color: '#ff0808'
        }
    ] :
    
    [
        {
            value: percentageFat,
            color: '#4472C7'
        },
        {
            value: percentageFatLeft >= 100 ? 100 : percentageFatLeft,
            color: '#48e880'
        }
    ]
   
      return (
        <div>
        <span className="text-input__span-container2">
            <div className="update-summary_item">
                <h3 className="form__heading__update-summary">{`${calories} Cal`}</h3>
                <MultiColorProgressBar key={1} readings={readingsCalories}/>
            </div>
            <div className="update-summary_item">
                <h3 className="form__heading__update-summary">{`${carbs}g Carbs`}</h3>
                <MultiColorProgressBar key={2} readings={readingsCarbs}/>
            </div>
            <div className="update-summary_item">
                <h3 className="form__heading__update-summary">{`${fat}g Fats`}</h3>
                <MultiColorProgressBar key={3} readings={readingsFat}/>
            </div> 
            </span>
        </div>
      );
}
  
  
export default UpdateSummary