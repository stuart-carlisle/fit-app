import React, { useState} from 'react'


export const UpdateTargetsForm = ({ onSubmit, targets = { 
  dailyEnergyTarget: '2400',
  dailyCarbsTarget: '400',
  dailyFatTarget: '70'
}}) => {
  
    const [energyTarget, setEnergyTarget]=useState(targets.dailyEnergyTarget)
    const [carbsTarget, setCarbsTarget]=useState(targets.dailyCarbsTarget)
    const [fatTarget, setFatTarget]=useState(targets.dailyFatTarget)
    
    const onFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({
        dailyEnergyTarget: energyTarget,
        dailyCarbsTarget: carbsTarget,
        dailyFatTarget:  fatTarget
      })
    }

    const onEnergyTargetChange = (e)=>{
        const target = e.target.value
        if (!target || target.match(/^\d{1,}?$/)) {
            setEnergyTarget(target)
      }
    }

    const onCarbsTargetChange = (e)=>{
      const target = e.target.value
      if (!target || target.match(/^\d{1,}?$/)) {
          setCarbsTarget(target)
    }
  }

  const onFatTargetChange = (e)=>{
    const target = e.target.value
    if (!target || target.match(/^\d{1,}?$/)) {
        setFatTarget(target)
  }
}

    return (
        <div>
        <div className="content-container__background">
        <div className="content-container__form__update">
            <form className= "form__update" onSubmit={onFormSubmit}>
                    <span className="span-container__update">
                      <div className="content-container__update-titles">
                        <h3 className="form__heading__update">Daily Energy Target:</h3>
                        <h3 className="form__heading__update">Daily Carbs Target:</h3>
                        <h3 className="form__heading__update">Daily Fat Target:</h3>
                      </div>
                      <div className="content-container__update">
                      <input  //Target
                          className="text-input__update-form"
                          type="text"
                          value={energyTarget}
                          onChange={onEnergyTargetChange}
                          placeholder="ENTER CALORIE TARGET"
                        />
                        <input  //Target
                        className="text-input__update-form"
                        type="text"
                        value={carbsTarget}
                        onChange={onCarbsTargetChange}
                        placeholder="ENTER CARBOHYDRATE TARGET"
                      />
                      <input  //Target
                          className="text-input__update-form"
                          type="text"
                          value={fatTarget}
                          onChange={onFatTargetChange}
                          placeholder="ENTER FAT TARGET"
                        />
                      </div> 
                    </span>
                  <button className="button button--form">Update Targets</button>
            </form>
            </div>
        </div>
      </div>  
    )
}

export default UpdateTargetsForm