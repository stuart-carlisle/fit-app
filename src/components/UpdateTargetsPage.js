import React from 'react'
import { connect } from 'react-redux'
import UpdateTargetsForm from './UpdateTargetsForm'
import { startUpdateTargets } from '../actions/foods'
import { setTargetsToSubmitted } from '../actions/auth'

export const UpdateTargetsPage = (props) => {

  const onSubmit = (targets) => {
    props.startUpdateTargets(targets)
    if(props.logins===1&&props.targetsCompleted&&!(props.diaryCompleted)){
      props.setTargetsToSubmitted()
      props.history.push('/diary')
    }else{
      props.history.push('/dashboard')
    }
  }

  const onBackClick = (e) => {
    if(props.logins===1&&props.targetsCompleted&&!(props.diaryCompleted)){
      e.preventDefault()
    }else{
      e.preventDefault()
      window.history.back()
      window.scrollTo(0,0)
    }
  }

    return(
      <div>
      <button className="button__back-button" onClick={onBackClick}><img className="image__header" src="/images/back-arrow.svg"/></button>
      <div className="page-header__filter page-header__filter--with-back">
          <div className="content-container">
            <h1 className="page-header__title">EDIT TARGETS</h1>
          </div>
        </div>
        <div className="show-for-mobile page-header__margin"></div>
        <div className="content-container">
          <UpdateTargetsForm targets={props.targets} onSubmit={onSubmit}/>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    targets: state.targets,
    logins: state.auth.logins,
    targetsCompleted: state.auth.targetsCompleted,
    diaryCompleted: state.auth.diaryCompleted
  }
}

const mapDispatchToProps = (dispatch) =>({
  startUpdateTargets: (updates) => dispatch(startUpdateTargets(updates)),
  setTargetsToSubmitted: () => dispatch(setTargetsToSubmitted())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTargetsPage)


