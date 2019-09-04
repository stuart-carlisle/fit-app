import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setChartType } from '../actions/filters';

export const ProgressFilters = ({
    setChartType
  }) => {

  const [chartTypeInput, setChartTypeInput] = useState('calorie-tracker')
  const [option, setOption] = useState('week')
  
  const [option1, setOption1] = useState('Last Week')
  const [option2, setOption2] = useState('Last 2 Weeks')
  const [option3, setOption3] = useState('2 Months')

  const [option1Value, setOption1Value] = useState('week')
  const [option2Value, setOption2Value] = useState('fortnight')
  const [option3Value, setOption3Value] = useState('2months')

  const onSubmit = (e) => {
    e.preventDefault()
    setChartType({
      chart: chartTypeInput,
      option: option
    })
  }

  useEffect(()=>{
    setChartType({
      chart: chartTypeInput,
      option: option
    })
  },[])

  const onChartTypeChange = (e) => {
    if(e.target.value==='calorie-tracker'){
      setOption1('Last Week')
      setOption2('Last 2 Weeks')
      setOption3('2 Months')
      setOption1Value('week')
      setOption2Value('fortnight')
      setOption3Value('2months')
      setOption('week')
    }else if(e.target.value==='weight-tracker'){
      setOption1('Last 3 Months')
      setOption2('Last 6 Months')
      setOption3('Last Year')
      setOption1Value('3months')
      setOption2Value('6months')
      setOption3Value('year')
      setOption('3months')
    }
    setChartTypeInput(e.target.value) 
  }

  const onOptionChange = (e) => {
    setOption(e.target.value)
  }

  const onBackClick = (e) => {
    e.preventDefault()
    window.history.back()
          window.scrollTo(0,0)
  }

    return (
      <div>
      <button className="button__back-button" onClick={onBackClick}><img className="image__header" src="/images/back-arrow.svg"/></button>
      <div className="page-header__filter page-header__filter--with-back">
      <div className="content-container">
      <div className="header__content--filters"> 
        <form className="filters-text-input__span-container" onSubmit={onSubmit}>
          <div className="input-group__item-page-header">
            <select
              className="minimal minimal--chart-filter"
              value={chartTypeInput}
              onChange={onChartTypeChange}
            >
              <option value="calorie-tracker">CALORIE TRACKER</option>
              <option value="weight-tracker">WEIGHT TRACKER</option>
            </select>
            </div>
          <div className="input-group__item-page-header">
          <select
            className="minimal minimal--chart-filter"
            value={option}
            onChange={onOptionChange}
          > 
            <option value={option1Value}>{option1}</option>
            <option value={option2Value}>{option2}</option>
            <option value={option3Value}>{option3}</option>
          </select>
          </div>
          <button className="button filters-button--form-page-header">Submit</button>
        </form>
        </div>
      </div>
      </div>
      </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  setChartType: (chartType) => dispatch(setChartType(chartType))
})

export default connect(undefined,mapDispatchToProps)(ProgressFilters);

// <OutsideClickHandler
//             onOutsideClick={()=>{setCalendarFocused(null)}}>
//               <DateRangePicker 
//                 startDate={filters.startDate}
//                 endDate={filters.endDate}
//                 onDatesChange={onDatesChange}
//                 focusedInput={calendarFocused}
//                 onFocusChange={onFocusChange}
//                 showClearDates={true}
//                 numberOfMonths={1}
//                 isOutsideRange={() => false}
//               />
//             </OutsideClickHandler>

//const [calendarFocused, setCalendarFocused] = useState(null)

// const onDatesChange = ({ startDate, endDate }) => {
//   setStartDate(startDate);
//   setEndDate(endDate);
// };

// const onFocusChange = ( focused ) => {
//   setCalendarFocused(focused);
//}

//import { DateRangePicker } from 'react-dates';

//import OutsideClickHandler from 'react-outside-click-handler'