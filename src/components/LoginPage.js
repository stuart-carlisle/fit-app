import React from 'react'
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginTwitter } from '../actions/auth';
import useFade from '../hooks/useFade'

export const LoginPage = ({ startLoginGoogle, startLoginTwitter , onLoginClick }) => {
  
  const onClickGoogle = () => {
    onLoginClick()
    startLoginGoogle()
  }

  const onClickTwitter = () => {
    onLoginClick()
    startLoginTwitter()
  }
  
  return(     
  <div className={useFade()}>
      <div className="box-layout">
          <div className="box-layout__box">
            <img src="/images/running-man-with-title.png" className="image"/>
            <div className="box-layout__title">
            <div>
              <input type="image" src="/images/google-button-pressed.png"  onClick={onClickGoogle} className="button__image"/>
              <input type="image" src="/images/twitter-button-pressed.png" onClick={onClickTwitter} className="button__image"/> 
            </div>
          </div>
        </div>
      </div> 
    </div> 
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch(startLoginGoogle()),
  startLoginTwitter: () => dispatch(startLoginTwitter())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);


