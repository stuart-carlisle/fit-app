import targetsReducer from '../../reducers/targets'
import targets from '../fixtures/targets'

test('Should add energy targets', ()=>{
    const dailyEnergyTarget = targets.dailyEnergyTarget
    const state = targetsReducer(targets,{
        type:'ADD_DAILY_ENERGY_TARGET',
        dailyEnergyTarget
    })
    expect(state).toEqual({...targets,dailyEnergyTarget})
})

test('Should set default state',()=>{
    const state = targetsReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        dailyEnergyTarget: '2400',
        dailyCarbsTarget: '400',
        dailyFatTarget: '70'
      })
})

test('Should update the target state when correct data is given',()=>{
    const state = targetsReducer(targets,{
        type:'UPDATE_TARGETS',
        updates:{dailyEnergyTarget: '3200'}
    })
    expect(state).toEqual({...targets, dailyEnergyTarget: '3200'})
})

test('Should set targets',()=>{
    const action = {
        type:'SET_TARGETS',
        targets: targets
    }
    const state = targetsReducer({},action)
    expect(state).toEqual(targets)
})