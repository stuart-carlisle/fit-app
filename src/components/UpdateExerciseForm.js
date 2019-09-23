import React, { useState, useEffect } from 'react'
import numeral from 'numeral'

export const UpdateExerciseForm = ({
  onSubmit,
  onRemove,
  exercise = {
    id:'',
    description:'',
    diaryDate:'',
    energy:'',
    time:'',
    type:''
  }
}) => {
 
    const defaultEnergy = numeral(exercise.energy).value()
    const defaultTime = numeral(exercise.time).value()
    const [time, setTime] = useState(defaultTime)
    const [error, setError] = useState('')
    const [energy, setEnergy] = useState(defaultEnergy)

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
        const exerciseData = {
          description: exercise.description,
          type: exercise.type
        }
        if (numeral(time).value()<=0) {
          setError('Please provide a time greater than 0')
          window.scrollTo(0,0)
        } else {
          
          setError('')
          onSubmit({
            ...exerciseData,
            time:time.toString(),
            energy:energy.toString()
          })
          localStorage.removeItem('refreshed')
        }
      }
    
    const onTimeChange = (e)=>{
        const time = e.target.value
          if (!time || time.match(/^\d{1,}(\.\d{0,1})?$/)) {
          setTime(time)
          const timeValue = numeral(time).value()
          setEnergy(Math.round(defaultEnergy * (timeValue/defaultTime)))
        }
    }

    const remove = (e) => {
      e.preventDefault()
      onRemove()
    }

    const onEnergyChange = ()=>{
      
    }

    return (
      <div>
      <div className="content-container__background">
      <div className="content-container__form__update">
          <form className= "form__update" onSubmit={onFormSubmit}>
              {error && <p id="error-message" className="form__error">{error}</p>}
                  <h1 className="page-header__title-update"> {exercise.description} </h1>
                  <span className="span-container__update">
                      <div className="content-container__update-titles">
                      <h3 className="form__heading__update">Exercise Time (mins):</h3>
                      <h3 className="form__heading__update">Energy (calories): </h3>
                      </div>
                      <div className="content-container__update">
                      <input  //Exercise Duration
                        className="text-input__update-form"
                        type="text"
                        value={time?time:""}
                        onChange={onTimeChange}
                        placeholder="Enter a Duration"
                      />
                      <input  //energy
                        className="text-input__update-form"
                        type="text"
                        value={energy?energy:""}
                        onChange={onEnergyChange}
                        placeholder="Energy Used"
                          />
                      </div>
                  </span>
              <span className="text-input__span-container3"><button className="button button--form-update">Update Exercise</button><button className="button button--form-remove-update" onClick={remove}>Remove Exercise</button></span>
          </form>
          </div>
    </div> 
    </div>  
  )
}

export default UpdateExerciseForm
