import React from 'react'
import { Link } from 'react-router-dom'

export const SideDrawerItem = ({ data, drawerToggleClickHandler }) => {
  const link = data.link
  const name = data.name
  const image = data.image
  
  const onClick = () => {
      drawerToggleClickHandler()
   }

   return(
     <Link className={"side-draw__list-item"} to={link} onClick={onClick}>
      <span className="side-draw__span-container"> 
         <img className="side-draw-image__icon" src={image} />
         <div>
            <p className="side-draw-item__title">{name}</p>
         </div>
      </span> 
     </Link>
   )

} 

export default SideDrawerItem