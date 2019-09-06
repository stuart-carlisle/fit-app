import React, { useState} from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

export const ExerciseForm = ({filters={}, onSubmit}) => {
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [energy, setEnergy] = useState('')
    const [time, setTime] = useState('')
    
    const [error, setError] = useState('')

    const diaryDate = filters.date ? filters.date.valueOf() : moment().startOf('day').valueOf()
    
    const lastUsed = moment().valueOf()

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!description || !energy) {
          setError('Please provide description and energy.')
          window.scrollTo(0,0)
        } else {
          setError('')
          onSubmit({
            description, type, energy, time, diaryDate, lastUsed
          });
        }
      };
    
    const onEnergyChange = (e)=>{
        const energy = e.target.value
        if (!energy || energy.match(/^\d{1,}?$/)) {
            setEnergy(energy)
        }
    }

    const onTimeChange = (e)=>{
        const time = e.target.value
        if (!time || time.match(/^\d{1,}?$/)) {
            setTime(time)
        }
    }

    return (
        <div>
        <div className="content-container__background">
        <div className="content-container__form">
            <form className= "form" onSubmit={onFormSubmit}>
            {error && <p id="error-message" className="form__error">{error}</p>}
                <input  //Exercise description
                    id="energy-used"
                    className="text-input"
                    type="text"
                    placeholder="Description (Required)"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                />

                <select  //Exercise type
                    className="text-input select"
                    value={type}
                    onChange={(e)=>{setType(e.currentTarget.value)}}
                >
                    <option value="" hidden>Type</option>
                    <option value="cardiovascular">Cardiovascular</option>
                    <option value="strength">Strength</option>
                </select>
                
                <input //Energy Used
                        className="text-input"
                        type="text"
                        placeholder="Calories Burned (Required)"
                        value={energy}
                        onChange={onEnergyChange}
                />
                
                <input //Duration of exercise
                    className="text-input"
                    type="text"
                    placeholder="Duration of Exercise in Minutes"
                    value={time}
                    onChange={onTimeChange}
                />
                
                <button className="button button--form">Add Exercise</button>
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

export default connect(mapStateToProps)(ExerciseForm)