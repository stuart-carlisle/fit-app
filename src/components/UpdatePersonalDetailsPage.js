import React from 'react'
import { connect } from 'react-redux';
import UpdatePersonalDetailsForm from './UpdatePersonalDetailsForm';
import { startUpdateWeight } from '../actions/foods';

export const UpdatePersonalDetailsPage = (props) => {
    
    const onSubmit = (weight,date) => {
      const newDate = date.startOf('day').format('x')
      props.startUpdateWeight(weight,newDate)
      props.history.push('/');
    }

    const onBackClick = (e) => {
      e.preventDefault()
      window.history.back()
            window.scrollTo(0,0)
    }
    
      return(
        <div>
        <button className="button__back-button" onClick={onBackClick}><img className="image__header" src="/images/back-arrow.svg"/></button>
        <div className="page-header__filter page-header__filter--with-back">
            <div className="content-container">
              <h1 className="page-header__title">RECORD WEIGHT</h1>
            </div>
          </div>
          <div className="show-for-mobile page-header__margin"></div>
          <div className="content-container">
            <UpdatePersonalDetailsForm
              onSubmit={onSubmit}
            />
          </div>
          
        </div>
      )
}

const mapDispatchToProps = (dispatch) =>({
  startUpdateWeight: (weight, date) => dispatch(startUpdateWeight(weight, date))
})

export default connect(undefined, mapDispatchToProps)(UpdatePersonalDetailsPage);