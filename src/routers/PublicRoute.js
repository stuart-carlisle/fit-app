import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import useFade from '../hooks/useFade'
import Backdrop from '../components/Backdrop'

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const [backgroundOn, setBackgroundOn]=useState(false)
  
  let backdrop

  if(backgroundOn){
    backdrop = (
        <Backdrop backgroundColor={"rgba(0,0,0,0.6)"}/>
    )
  }

  const onLoginClick = () => {
    setBackgroundOn(true)
  }
  
  return(
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
        {backdrop}
        <div className={useFade()}>
          <Component {...props} onLoginClick={onLoginClick} />
        </div>
        </div>
        )
    )} />
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute)
