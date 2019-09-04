import React, { useEffect, useState } from 'react'
import selectDailyTotal, { selectExerciseDailyTotal } from '../selectors/summary'
import { setDateFilter } from '../actions/filters'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import numeral from 'numeral'
import moment from 'moment'
import MultiColorProgressBarContainer from './MultiColorProgressBarContainer'
import useFade from '../hooks/useFade'

export const DailySummaryItemDiary = (props) => {
  const [target, setTarget] = useState(0)
  const [displayDate, setDisplayDate] = useState(props.date.format('Do MMMM'))
  const dailyTotal = props.dailyTotal
  const exerciseDailyTotal = props.exerciseDailyTotal

  const onClick = () => {
    props.setDateFilter(props.date)
  }

  useEffect(()=>{
    setTarget(numeral(props.targets.dailyEnergyTarget).value())
    if(props.date.format('Do MMMM') === moment().startOf('day').format('Do MMMM')){
        setDisplayDate('TODAY')
      }else if(props.date.format('Do MMMM') === moment().startOf('day').subtract(1,'days').format('Do MMMM')){
        setDisplayDate('YESTERDAY')
      }else if(props.date.format('Do MMMM') === moment().startOf('day').add(1,'days').format('Do MMMM')){
        setDisplayDate('TOMORROW')
      }else{
        setDisplayDate(props.date.format('Do MMM'))
      }
  },[props.targets,props.date])
  
  const dailyTotalRounded = Math.round(dailyTotal)
  const exerciseDailyTotalRounded = Math.round(exerciseDailyTotal)
  const combinedTotal = Math.round(dailyTotal-exerciseDailyTotal)
  const difference =  Math.round(target-dailyTotal+exerciseDailyTotal)

  return(
    <div onClick={onClick} className="header__content2">
    <Link className="summary__date-filter" to={'/diary'} >
    <div className={useFade()}>
    <div id="display-date-mobile" className="summary-text__diary-mobile-title show-for-mobile ">{displayDate}</div>
    <div id="display-date-tablet" className="summary-text__date show-for-small-tablet ">{displayDate}</div>
    <span className="summary-item--span">
    <div id="display-date-desktop" className="summary-text__date show-for-large-tablet-and-desktop">{displayDate}</div> 
      <div><span className="summary-item--span">
        <div><span className="summary-item--span"><div className="summary-text__container"><div id="target" className="summary-text">{`${target}`}</div><div className="summary-text__small blue">target</div></div><div className="left-space">-</div></span></div>
        <div><span className="summary-item--span"><div className="summary-text__container red left-space"><div id="daily-total" className="summary-text">{`${dailyTotalRounded}`}</div><div className="summary-text__small blue">food</div></div><div className="left-space">+</div></span></div>
        <div><span className="summary-item--span"><div className="summary-text__container green left-space"><div id="exercise-daily-total" className="summary-text">{`${exerciseDailyTotalRounded}`}</div><div className="summary-text__small blue">exercise</div></div><div className="left-space">=</div></span></div>
        <div className={difference<0 ? "summary-text__container red left-space" : "summary-text__container green left-space"}><div id="difference" className="summary-text">{`${difference}`}</div><div className="summary-text__small blue">total</div></div>
      </span></div>
    </span> 
    <MultiColorProgressBarContainer data={{target,combinedTotal}}/>
    </div>  
    </Link>  
    </div>
  )
}


const mapStateToProps = (state,props) => {
return {
  dailyTotal: selectDailyTotal(state.foodsDiary, { date: props.date } ),
  targets: state.targets,
  exerciseDailyTotal: selectExerciseDailyTotal(state.exercisesDiary, { date: props.date } )
}
}

const mapDispatchToProps = (dispatch) =>({
setDateFilter: (date) => dispatch(setDateFilter(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(DailySummaryItemDiary)