import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header';
import SideDrawer from '../components/SideDrawer'
import Backdrop from '../components/Backdrop'
import { setTargetsToCompleted, setDiaryToCompleted } from '../actions/auth'
import FirstLoginModal from '../components/FirstLoginModal'

export const PrivateRoute = ({
  isAuthenticated,
  logins,
  targetsCompleted,
  diaryCompleted,
  targetsSubmitted,
  setTargetsToCompleted,
  component: Component,
  ...rest
}) => {
  const [sideDrawerOpen, setSideDrawerOpen]=useState(false)
  const [modalOpen, setModalOpen]=useState(false)
  const [diaryModalOpen, setDiaryModalOpen] =useState(false)

  const drawerToggleClickHandler = () =>{
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const onBackdropClick = () => {
    setSideDrawerOpen(false)
  }

  const modalClickHandler = () => {
    setTargetsToCompleted()
    setModalOpen(false)
  }

  const diaryModalClickHandler = () => {
    setDiaryToCompleted()
    setDiaryModalOpen(false)
  }
  const targetsMessage =
  (
    <div>
      <div className="modal__image-container">
        <img src="/images/running-man-with-title.png" className="modal__image"/>
      </div>
      <h1 className="modal__title">{"Welcome to FIT-APP"}</h1>
      <h3 className="modal__body">{"This application will help you to keep track of your daily nutrient intake and exercise amount as well as weight changes. To start, enter your daily calorie target and nutrient targets"}</h3>
    </div>
  )
  
  const diaryMessage =
  (
    <div>
      <div className="modal__image-container">
        <img src="/images/running-man-with-title.png" className="modal__image"/>
      </div>
      <h1 className="modal__title">{"Add Foods and Exercise"}</h1>
      <h3 className="modal__body">{"Next, click on the +AddFood or +AddExercise icons to add to your daily diary. It's as simple as that but check out the menu to add your weights and track your progress in the progress tracker"}</h3>
    </div>
  )
  
  let modal
  let sideDrawer
  
  useEffect(()=>{
    sideDrawer=<div></div>
    modal=<div></div>
 
    if(logins===1&&!targetsCompleted&&!diaryCompleted){
      setModalOpen(true)
    }else if(logins===1&&targetsCompleted&&targetsSubmitted&&!diaryCompleted){
      setDiaryModalOpen(true)
    }
  },[logins,targetsCompleted,targetsSubmitted,diaryCompleted])

  let backdrop

  if(modalOpen){
    backdrop = (
      <Backdrop backgroundColor={"rgba(0,0,0,0.6)"}/>
    )
    modal= (
      <FirstLoginModal modalClickHandler={modalClickHandler} show={modalOpen} message={targetsMessage}/>
    )
  }

  if(diaryModalOpen){
    backdrop = (
      <Backdrop backgroundColor={"rgba(0,0,0,0.6)"}/>
    )
    modal= (
      <FirstLoginModal modalClickHandler={diaryModalClickHandler} show={diaryModalOpen} message={diaryMessage}/>
    )
  }

  if(sideDrawerOpen){
    backdrop = (
        <Backdrop click={onBackdropClick} backgroundColor={"rgba(0,0,0,0.6)"}/>
    )
    sideDrawer = (
      <SideDrawer drawerToggleClickHandler={drawerToggleClickHandler} show={sideDrawerOpen} />
    )
  }
  
  return(
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div style={{height: '100%'}}>
          {sideDrawer}
          {modal}
          {backdrop}
          <Header drawerToggleClickHandler={drawerToggleClickHandler} />
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  )
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  logins: state.auth.logins,
  targetsCompleted: state.auth.targetsCompleted,
  diaryCompleted: state.auth.diaryCompleted,
  targetsSubmitted: state.auth.targetsSubmitted
});

const mapDispatchToProps = (dispatch) =>({
  setTargetsToCompleted: () => dispatch(setTargetsToCompleted()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);