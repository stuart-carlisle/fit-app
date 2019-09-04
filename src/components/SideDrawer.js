import React from 'react'
import SideDrawerItem from './SideDrawerItem'
import SideDrawerBackButton from './SideDrawerBackButton'
import { history } from '../routers/AppRouter'
import SideDrawerLogoutButton from './SideDrawerLogoutButton';

export const SideDrawer = ({ drawerToggleClickHandler, show }) => {
    const link = history.location.pathname
    
    let sideDrawerClasses
    

    if (show){
        sideDrawerClasses= "side-drawer open"
    }
    
    const sideDrawerBackData = {
        image: "/images/back-arrow-white.svg",
        name: "BACK",
        link: link,
    }
    const sideDrawerArray = [
    {
        image: "/images/home-icon.svg",
        name: "DASHBOARD",
        link: "/dashboard"
    },{
        image: "/images/weight-icon.svg",
        name: "SUBMIT WEIGHT",
        link:"/personal-details"
    },{
        image: "/images/target-icon.svg",
        name:"TARGETS",
        link:"/update-targets"
    },{
        image: "/images/progress-icon.svg",
        name:"PROGRESS TRACKER",
        link:"/progress"
    },{
        image: "/images/diary-icon.svg",
        name:"DIARY",
        link:"/diary"
    }]
    const sideDrawerLogOutData = {
        name: "LOGOUT",
        link:"/"
    }

    return (
    <div className={sideDrawerClasses}>
        <SideDrawerBackButton data={sideDrawerBackData} drawerToggleClickHandler={drawerToggleClickHandler} />
        {(  
            sideDrawerArray.map((sideDrawerItemData) => {
               return <SideDrawerItem key={sideDrawerItemData.name} data={sideDrawerItemData} drawerToggleClickHandler={drawerToggleClickHandler} />
            })
        )}
        <SideDrawerLogoutButton data={sideDrawerLogOutData} drawerToggleClickHandler={drawerToggleClickHandler} />
    </div>
   ) 

} 

export default SideDrawer