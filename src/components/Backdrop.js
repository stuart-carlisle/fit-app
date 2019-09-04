import React from 'react'

export const Backdrop = ({ click, backgroundColor }) => (

    <div className="backdrop" onClick={click} style={{background:backgroundColor}}/>

) 


export default Backdrop