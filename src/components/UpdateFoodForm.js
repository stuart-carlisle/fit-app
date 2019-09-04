import React, { useState, useEffect } from 'react'
import UpdateSummary from './UpdateSummary'
import numeral from 'numeral'

export const UpdateFoodForm = ({
  onSubmit, 
  food = {
    description:'',
    nutrition:{
      energy: {amount:'0'},
      totalCarbs: {amount:'0', unit:'g'},
      sugars: {amount:'0', unit:'g'},
      protein: {amount:'0', unit:'g'},
      totalFat: {amount:'0', unit:'g'},
      satFat: {amount:'0', unit:'g'}
    },
    serving:{
      servingSize: {size:'0',unit:'g'},
      servingsPerContainer: '0'
    },
    numberOfServings:''
  },
  targets,
  onRemove
}) => {
  
    const [numberOfServings, setNumberOfServings] = useState(food.numberOfServings)
    const [error, setError] = useState('')

    const calories = numeral(food.nutrition.energy.amount).value()
    const carbs = !!food.nutrition.totalCarbs.amount ? numeral(food.nutrition.totalCarbs.amount).value() : 0
    const fat = !!food.nutrition.totalFat.amount ? numeral(food.nutrition.totalFat.amount).value() : 0
    const calorieTarget = numeral(targets.dailyEnergyTarget).value()
    const carbsTarget = numeral(targets.dailyCarbsTarget).value()
    const fatTarget = numeral(targets.dailyFatTarget).value()
    
    const data = {
      calories: Math.round(calories*numberOfServings),
      carbs: Math.round(carbs*numberOfServings),
      fat: Math.round(fat*numberOfServings),
      targets:{
        calorieTarget: calorieTarget,
        carbsTarget: carbsTarget,
        fatTarget: fatTarget
      }
    }

    useEffect(()=>{
        
      let refreshed = JSON.parse(localStorage.getItem('refreshed'))
      if(refreshed){
        window.history.back()
        window.scrollTo(0,0)
        localStorage.removeItem('refreshed')
      }else{
        localStorage.setItem('refreshed',JSON.stringify(true))
      }
    },[])

    const onFormSubmit = (e) => {
        e.preventDefault();
        const foodData = { 
          description: food.description,
          nutrition: food.nutrition,
          serving: food.serving
        }
        if (numberOfServings==='0') {
          setError('Please provide a number of serving biggar than 0')
          window.scrollTo(0,0)
        } else {
          setError('')
          onSubmit(
            numberOfServings,
            foodData
          )
          localStorage.removeItem('refreshed')
        }
      }
    
    const remove = (e) => {
      e.preventDefault()
      onRemove()
    }

    const onNumberOfServingsChange = (e)=>{
        const numberOfServings = e.target.value
        if (!numberOfServings || numberOfServings.match(/^\d{1,}(\.\d{0,1})?$/)) {
            setNumberOfServings(numberOfServings)
        }
    }

    const onServingSizeChange = ()=>{
      
  }

    return (
        <div>
        <div className="content-container__background">
        <div className="content-container__form__update">
            <form className= "form__update" onSubmit={onFormSubmit}>
                {error && <p id="error-message" className="form__error">{error}</p>}
                    <h1 className="page-header__title-update"> {food.description} </h1>
                    <span className="span-container__update">
                        <div className="content-container__update-titles">
                        <h3 className="form__heading__update">Number of Servings:</h3>
                        <h3 className="form__heading__update">Serving Size: </h3>
                        </div>
                        <div className="content-container__update">
                        <input  //Number of servings
                            className="text-input__update-form"
                            type="text"
                            value={numberOfServings}
                            onChange={onNumberOfServingsChange}
                            placeholder="Enter Number of Servings"
                        />
                        <input  //serving size
                            className="text-input__update-form"
                            type="text"
                            value={food.serving.servingSize.size + food.serving.servingSize.unit}
                            onChange={onServingSizeChange}
                            />
                        </div>
                    </span>
                    <UpdateSummary data={data} />
                <span className="text-input__span-container3"><button className="button button--form">Update Food</button><button className="button button--form-remove" onClick={remove}>Remove Food</button></span>
            </form>
            </div>
      </div> 
      </div>  
    )
}

export default UpdateFoodForm
