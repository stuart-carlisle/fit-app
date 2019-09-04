import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DailySummary from './DailySummary'

export const DashboardPage = ({ logins, targetsCompleted, history }) => {
  //useEffect(()=> {
    if(logins===1 && !targetsCompleted){
      history.push('/update-targets')
    }
  //},[logins, targetsCompleted])
  
  return(
      <div className="content-container__main">
        <DailySummary />
      </div>
  )
}

const mapStateToProps = (state) => ({
  logins: state.auth.logins,
  targetsCompleted: state.auth.targetsCompleted
});

export default connect (mapStateToProps)(DashboardPage)
