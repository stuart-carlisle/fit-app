import React, { useState} from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import numeral from 'numeral'

export const CreateFoodForm = ({onSubmit, filters={}}) => {
    const [description, setDescription] = useState('')
    const [serving, setServing] = useState({
        servingSize: {size:'',unit:''},
        servingsPerContainer:''
    })
    const [nutrition, setNutrition] = useState({
        energy: {amount:''},
        totalCarbs: {amount:'', unit:''},
        sugars: {amount:'', unit:''},
        protein: {amount:'', unit:''},
        totalFat: {amount:'', unit:''},
        satFat: {amount:'', unit:''}
    })
    const [error, setError] = useState('')

    const diaryDate = filters.date ? filters.date.valueOf() : moment().startOf('day').valueOf()

    const lastUsed = moment().valueOf()

    const numberOfServings = '1'

    const meal = filters.meal ? filters.meal : 'breakfast'

    const onFormSubmit = (e) => {
        e.preventDefault();
        const conversion = 28.3495
        let newServing
        if(serving.servingSize.unit==='oz'){
            const newServingSize = ((numeral(serving.servingSize.size).value())*conversion).toFixed(1)
            newServing = {
                ...serving,
                servingSize: {size:newServingSize,unit:'g'},         
            }
        }else{
            newServing = {...serving}
        }
        let newTotalCarbs
        if(nutrition.totalCarbs.unit==='oz'){
            const newTotalCarbsAmount = ((numeral(nutrition.totalCarbs.amount).value())*conversion).toFixed(1)
            newTotalCarbs = {amount:newTotalCarbsAmount,unit:'g'}
        }else{
            newTotalCarbs = {...nutrition.totalCarbs}
        }
        let newSugars
        if(nutrition.sugars.unit==='oz'){
            const newSugarsAmount = ((numeral(nutrition.sugars.amount).value())*conversion).toFixed(1)
            newSugars = {amount:newSugarsAmount,unit:'g'}
        }else{
            newSugars = {...nutrition.sugars}
        }
        let newProtein
        if(nutrition.protein.unit==='oz'){
            const newProteinAmount = ((numeral(nutrition.protein.amount).value())*conversion).toFixed(1)
            newProtein = {amount:newProteinAmount,unit:'g'}
        }else{
            newProtein = {...nutrition.protein}
        }
        let newTotalFat
        if(nutrition.totalFat.unit==='oz'){
            const newTotalFatAmount = ((numeral(nutrition.totalFat.amount).value())*conversion).toFixed(1)
            newTotalFat = {amount:newTotalFatAmount,unit:'g'}
        }else{
            newTotalFat = {...nutrition.totalFat}
        }
        let newSatFat
        if(nutrition.satFat.unit==='oz'){
            const newSatFatAmount = ((numeral(nutrition.satFat.amount).value())*conversion).toFixed(1)
            newSatFat = {amount:newSatFatAmount,unit:'g'}      
        }else{
            newSatFat = {...nutrition.satFat}
        }

        if (!description || !nutrition.energy.amount) {
          setError('Please provide description and energy.')
          window.scrollTo(0,0)
        } else {
          setError('')
          const newNutrition = {
            energy: nutrition.energy,
            totalCarbs: newTotalCarbs,
            sugars: newSugars,
            protein: newProtein,
            totalFat: newTotalFat,
            satFat: newSatFat
          }
          onSubmit({
            description, serving: newServing, nutrition: newNutrition, diaryDate, lastUsed, numberOfServings, meal
          })
        }
      }
    
    const onServingSizeChange = (e)=>{
        const size = e.target.value
        if (!size || size.match(/^\d{1,}(\.\d{0,1})?$/)) {
            setServing({
                ...serving,
                servingSize: { ...serving.servingSize, size: size }
            })
        }
    }
    
    const onServingsPerContainerChange = (e)=>{
        const servingsPerContainer = e.target.value
        if (!servingsPerContainer || servingsPerContainer.match(/^\d{1,}(\.\d{0,1})?$/)) {
            setServing({
                ...serving,
                servingsPerContainer: servingsPerContainer
            })
        }
    }

    const onEnergyAmountChange = (e)=>{
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}?$/)) {
            setNutrition({
                ...nutrition,
                energy: {...nutrition.energy, amount: amount } 
            })
        }
    }

    const onCarbsAmountChange = (e)=>{
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,1})?$/)) {
            setNutrition({
                ...nutrition,
                totalCarbs: {...nutrition.totalCarbs, amount: amount } 
            })
        }
    }

    const onSugarsAmountChange = (e)=>{
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,1})?$/)) {
            setNutrition({
                ...nutrition,
                sugars: {...nutrition.sugars, amount: amount } 
            })
        }
    }

    const onProteinAmountChange = (e)=>{
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,1})?$/)) {
            setNutrition({
                ...nutrition,
                protein: {...nutrition.protein, amount: amount } 
            })
        }
    }

    const onTotalFatAmountChange = (e)=>{
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,1})?$/)) {
            setNutrition({
                ...nutrition,
                totalFat: {...nutrition.totalFat, amount: amount } 
            })
        }
    }

    const onSatFatAmountChange = (e)=>{
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,1})?$/)) {
            setNutrition({
                ...nutrition,
                satFat: {...nutrition.satFat, amount: amount } 
            })
        }
    }

    return (
        <div>
        <div className="content-container__background">
        <div className="content-container__form">
            <form className= "form" onSubmit={onFormSubmit}>
            {error && <p id="error-message" className="form__error">{error}</p>}
                <input  //description
                    className="text-input"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
                <h3 className="form__heading">SERVING INFORMATION</h3>
                
                <span className="text-input__span-container-form">
                <input //Serving size
                    className="text-input"
                    type="text"
                    placeholder="Serving Size"
                    value={serving.servingSize.size}
                    onChange={onServingSizeChange}
                />
                <select  //Serving size unit
                    className="form-input-select"
                    required={serving.servingSize.size!==''}
                    value={serving.servingSize.unit}
                    onChange={(e)=>{setServing({
                        ...serving,
                        servingSize:{ ...serving.servingSize, unit: e.target.value }
                    })}}
                >
                    <option value="" hidden>Unit</option>
                    <option value="g">grams</option>
                    <option value="oz">ounces</option>
                </select>
                </span>
                
                <input //Servings per container
                    className="text-input"
                    type="text"
                    placeholder="Servings Per Container"
                    value={serving.servingsPerContainer}
                    onChange={onServingsPerContainerChange}
                />
                
                <h3 className="form__heading">NUTRIONAL INFORMATION</h3>

                    <input //energy amount
                        className="text-input"
                        type="text"
                        placeholder="Energy in Kilo Calories"
                        value={nutrition.energy.amount}
                        onChange={onEnergyAmountChange}
                    />
               
                <span className="text-input__span-container-form" //totalCarbs
                >
                    <input //totalCarbs amount
                        className="text-input"
                        type="text"
                        placeholder="Total Carbohydrates"
                        value={nutrition.totalCarbs.amount}
                        onChange={onCarbsAmountChange}
                    />
                    <select  //carbs unit
                        className="form-input-select"
                        required={nutrition.totalCarbs.amount!==''}
                        value={nutrition.totalCarbs.unit}
                        onChange={(e)=>{setNutrition({
                            ...nutrition,
                            totalCarbs: {...nutrition.totalCarbs, unit: e.target.value } 
                        })}}
                    >
                        <option value="" hidden>Unit</option>
                        <option value="g">grams</option>
                        <option value="oz">ounces</option>
                    </select>
                </span>

                <span className="text-input__span-container-form" //sugars
                >
                    <input //sugars amount
                        className="text-input"
                        type="text"
                        placeholder="Sugars"
                        value={nutrition.sugars.amount}
                        onChange={onSugarsAmountChange}
                    />
                    <select  //sugars unit
                        className="form-input-select"
                        required={nutrition.sugars.amount!==''}
                        value={nutrition.sugars.unit}
                        onChange={(e)=>{setNutrition({
                            ...nutrition,
                            sugars: {...nutrition.sugars, unit: e.target.value } 
                        })}}
                    >
                        <option value="" hidden>Unit</option>
                        <option value="g">grams</option>
                        <option value="oz">ounces</option>
                    </select>
                </span>

                <span className="text-input__span-container-form" //protein
                >
                    <input //protein amount
                        className="text-input"
                        type="text"
                        placeholder="Protein"
                        value={nutrition.protein.amount}
                        onChange={onProteinAmountChange}
                    />
                    <select  //protein unit
                        className="form-input-select"
                        required={nutrition.protein.amount!==''}
                        value={nutrition.protein.unit}
                        onChange={(e)=>{setNutrition({
                            ...nutrition,
                            protein: {...nutrition.protein, unit: e.target.value } 
                        })}}
                    >
                        <option value="" hidden>Unit</option>
                        <option value="g">grams</option>
                        <option value="oz">ounces</option>
                    </select>
                </span>

                <span className="text-input__span-container-form" //totalFat
                >
                    <input //totalFat amount
                        className="text-input"
                        type="text"
                        placeholder="Total Fat"
                        value={nutrition.totalFat.amount}
                        onChange={onTotalFatAmountChange}
                    />
                    <select  //totalFat unit
                        className="form-input-select"
                        required={nutrition.totalFat.amount!==''}
                        value={nutrition.totalFat.unit}
                        onChange={(e)=>{setNutrition({
                            ...nutrition,
                            totalFat: {...nutrition.totalFat, unit: e.target.value } 
                        })}}
                    >
                        <option value="" hidden>Unit</option>
                        <option value="g">grams</option>
                        <option value="oz">ounces</option>
                    </select>
                </span>

                <span className="text-input__span-container-form" //satFat
                >
                    <input //satFat amount
                        className="text-input"
                        type="text"
                        placeholder="Saturated Fat"
                        value={nutrition.satFat.amount}
                        onChange={onSatFatAmountChange}
                    />
                    <select  //satFat unit
                        className="form-input-select"
                        required={nutrition.satFat.amount!==''}
                        value={nutrition.satFat.unit}
                        onChange={(e)=>{setNutrition({
                            ...nutrition,
                            satFat: {...nutrition.satFat, unit: e.target.value } 
                        })}}
                    >
                        <option value="" hidden>Unit</option>
                        <option value="g">grams</option>
                        <option value="oz">ounces</option>
                    </select>
                </span>
                
                <button className="button button--form">Add Food</button>
            </form>
        </div>
      </div> 
      </div>  
    )
}

const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
    
}

export default connect(mapStateToProps)(CreateFoodForm)