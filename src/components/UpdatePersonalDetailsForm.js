import React, { useState } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export const UpdatePersonalDetailsForm = ({ onSubmit }) => {
    const [weight, setWeight] = useState('')
    const [date, setDate] = useState(moment().startOf('day'))
    const [error, setError] = useState('')
    const [calendarFocused, setCalendarFocused] = useState(null)

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (weight.length===0) {
          setError('Enter a valid weight value')
        } else {
          setError('')
          onSubmit(
            weight,
            date
          )
        }
      }

    const onWeightChange = (e)=>{
        const weight = e.target.value
        if (!weight || weight.match(/^\d{1,}(\.\d{0,1})?$/)) {
            setWeight(weight)
        }
    }

    const onDateChange = (date) => {
      setDate(date)
    };

    const onFocusChange = ({focused}) => {
      setCalendarFocused(focused)
    }

    return (
        <div>
        <div className="content-container__background">
        <div className="content-container__form">
            <form className= "form" onSubmit={onFormSubmit}>
                {error && <p id="error-message" className="form__error">{error}</p>}
                <span className="text-input__span-container">
                        <input  //Weight
                            className="text-input"
                            type="text"
                            value={weight}
                            onChange={onWeightChange}
                            placeholder='Enter Weight in kg'
                        />
                        <div className="input-group__item input-group__item--date">
                          <SingleDatePicker
                            date={date}
                            onDateChange={onDateChange}
                            focused={calendarFocused}
                            onFocusChange={onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            id="date_picker_weight"
                            withPortal={true}
                          />
                      </div>
                  </span>
                <button className="button button--form">Update Weight</button>
            </form>
        </div>
      </div> 
      </div>  
    )
}

export default UpdatePersonalDetailsForm
