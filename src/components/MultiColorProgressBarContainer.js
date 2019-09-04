import React from 'react'
import MultiColorProgressBar from './MultiColorProgressBar'

export const MultiColorProgressBarContainer =({ data })=> {
    const target = data.target
    const usedEnergy = data.combinedTotal 
 
    const percentageEnergyUsed = Math.round((usedEnergy/target)*100)
    const percentageEnergyLeft = percentageEnergyUsed ? 100-percentageEnergyUsed : 100
    
    const readings = percentageEnergyLeft <= 0 ? 
    [
        {
            value: 100,
            color: '#ff0808'
        }
    ] :
    
    [
        {
            value: percentageEnergyUsed,
            color: '#4472C7'
        },
        {
            value: percentageEnergyLeft >= 100 ? 100 : percentageEnergyLeft,
            color: '#48e880'
        }
    ]
  
   
      return (
        <div>
            <MultiColorProgressBar readings={readings}/>
        </div>
      );
}
  
  
export default MultiColorProgressBarContainer;