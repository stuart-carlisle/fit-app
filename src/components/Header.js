import React from 'react'
import { Link } from 'react-router-dom'
import useScrollPosition from '../hooks/useScrollPosition'

export const Header = ({ drawerToggleClickHandler }) => {

  const scrollPosition = useScrollPosition()
  
  let headerClassName
  let headerContentClassName
  let headerTitleClassName
  let headerDropClassName
  let headerImageClassName
  let headerTitleContainerClassName

  if (scrollPosition > 75){
    headerClassName="header__small"
    headerContentClassName="header__content-small"
    headerTitleClassName="header__title-small"
    headerDropClassName="header__button-small"
    headerImageClassName="header__image-small"
    headerTitleContainerClassName="content-container"
  }
  if (scrollPosition <= 75){
    headerClassName="header"
    headerContentClassName="header__content"
    headerTitleClassName="header__title"
    headerDropClassName = "header__button"
    headerImageClassName="header__image"
    headerTitleContainerClassName="content-container__header-title"
  }

  const onClick= () => {
    drawerToggleClickHandler()
  }

  let headings =  (<div className = {headerContentClassName}>
    <Link className={headerImageClassName} to="/dashboard"><img className="image__icon" src="/images/home-icon.svg" /></Link>
    <Link className={headerImageClassName} to="/diary"><img className="image__icon" src="/images/diary-icon.svg" /></Link>
    <Link className={headerImageClassName} to="/update-targets"><img className="image__icon" src="/images/target-icon.svg" /></Link>
    <Link className={headerImageClassName} to="/progress"><img className="image__icon" src="/images/progress-icon.svg" /></Link>
    <div className={headerTitleClassName}>
    <Link className="header__title-link"to="/dashboard">
      <h1 id="id1">FIT-APP</h1>
    </Link>
    </div>
    </div>)

  return(
    <header className = {headerClassName}>
    <span className="summary-item--span-header">
      <button className={headerDropClassName} onClick={onClick}><img className="image__header-burger" src="/images/list.png"/></button>
      <div className = {headerTitleContainerClassName}>  
      {headings}  
      </div>
     </span>
    </header>
  )
}


export default Header
