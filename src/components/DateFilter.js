import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setDateFilter } from '../actions/filters'
import moment from 'moment'
import DailySummaryItemDiary from './DailySummaryItemDiary'

export const DateFilter = ({ filters, setDateFilter }) => {
    
    const [date, setDate] = useState(moment().startOf('day'))

    useEffect(()=>{
        initialiseDate(filters.date)
    },[])

    const onPrevious = (e) => {
        e.preventDefault()
        const newDate = date.subtract(1,'days')
        setDateFilter(newDate)
        setDate(newDate)
    }

    const onNext = (e) => {
        e.preventDefault()
        const newDate = date.add(1,'days')
        setDateFilter(newDate)
        setDate(newDate)
    }

    const initialiseDate = (date) => {
        setDate(date)
    }

    return (
            <div className='header__content'>
                <button id="left-date-filter" className="button__header-button2" onClick={onPrevious}><img className="image__header__date-filter" src="/images/left-arrow.png"/></button>
                <DailySummaryItemDiary id="daily-summary" key={filters.date.valueOf()} date={filters.date} />
                <button id="right-date-filter" className="button__header-button2" onClick={onNext}><img className="image__header__date-filter" src="/images/right-arrow.png"/></button>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) =>({
    setDateFilter: (date) => dispatch(setDateFilter(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);
