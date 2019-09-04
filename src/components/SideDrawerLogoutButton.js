import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const SideDrawerLogoutButton = ({ data, drawerToggleClickHandler, startLogout }) => {
  const name = data.name
  const link = data.link

   const onClick = () => {
      drawerToggleClickHandler()
      startLogout()
   }

   return(
     <Link className={"side-draw__list-item"} to={link} onClick={onClick}>
      <span className="side-draw__span-container"> 
         <div>
            <p className="side-draw-item__logout-title">{name}</p>
         </div>
      </span> 
     </Link>
   )

} 

const mapDispatchToProps = (dispatch) => ({
   startLogout: () => dispatch(startLogout())
 });

 export default connect(undefined, mapDispatchToProps)(SideDrawerLogoutButton);