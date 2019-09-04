import React, { useState , useEffect} from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import numeral from 'numeral'

export const AddExerciseForm = ({
  filters = {},
  onSubmit, 
  exercise = {
    description:'',
    type:'',
    energy:'',
    time:''
  }
}) => {
    const defaultEnergy = numeral(exercise.energy).value()
    const defaultTime = numeral(exercise.time).value()
    const date = filters.date
    const referenceDatabase = filters.referenceDatabase
    const [time, setTime] = useState(defaultTime)
    const [error, setError] = useState('')
    const [energy, setEnergy] = useState(defaultEnergy)
    const diaryDate = date ? date.valueOf() : moment().startOf('day').valueOf()
    const lastUsed = moment().valueOf()

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
          onSubmit(
            referenceDatabase,
            diaryDate,
            lastUsed,
            exerciseData,
            time.toString(),
            energy.toString()
          )
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

    const onEnergyChange = ()=>{
      
    }

    return (
        <div>
        <div className="content-container__background">
        <div className="content-container__form__update">
            <form className= "form" onSubmit={onFormSubmit}>
                {error && <p id="error-message" className="form__error">{error}</p>}
                  <h1 className="page-header__title-update"> {exercise.description} </h1>
                    <span className="text-input__span-container-form">
                      <div className="content-container__update-titles">
                        <h3 className="form__heading__update">Exercise Time (mins):</h3>
                        <h3 className="form__heading__update">Energy (calories): </h3>
                      </div>
                      <div className="content-container__update">
                        <input  //Exercise Duration
                          className="text-input__update-form"
                          type="text"
                          value={time}
                          onChange={onTimeChange}
                          placeholder="Enter a Duration"
                        />  
                        <input  //Energy Used
                          className="text-input__update-form"
                          type="text"
                          value={energy?energy:''}
                          onChange={onEnergyChange}
                          placeholder="Energy Used"
                        /> 
                      </div>
                    </span>
                <button className="button button--form">Add Exercise</button>
            </form>
          </div>
        </div>
      </div>  
    )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}


export default connect(mapStateToProps)(AddExerciseForm);