
import React from 'react'

export const FirstLoginModal = ({ modalClickHandler , show , message }) => {

    let modalClasses
    
    if (show){
        modalClasses= "modal open"
    }
    

    return (
    <div className={modalClasses}>
        {message}
        <button className="button modal__button" onClick={modalClickHandler}>OK</button>
    </div>
   ) 

} 

export default FirstLoginModal