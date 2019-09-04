import React from 'react'
import DailySummaryItem from './DailySummaryItem'
import moment from 'moment'

export const DailySummary = () => {
    const today = moment().startOf('day')
    const yesterday = moment().startOf('day').subtract(1, 'days')
    const twoDaysAgo = moment().startOf('day').subtract(2, 'days')
    const threeDaysAgo = moment().startOf('day').subtract(3, 'days')
    
    return(
        <div>
            <DailySummaryItem key={today.valueOf()} date={today}/>
            <DailySummaryItem key={yesterday.valueOf()} date={yesterday}/>
            <DailySummaryItem key={twoDaysAgo.valueOf()} date={twoDaysAgo}/>
            <DailySummaryItem key={threeDaysAgo.valueOf()} date={threeDaysAgo}/>
        </div>
    )
}

export default DailySummary
