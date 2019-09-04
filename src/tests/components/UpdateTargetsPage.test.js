import React from 'react'
import { shallow } from 'enzyme'
import { UpdateTargetsPage   } from '../../components/UpdateTargetsPage'

let wrapper, startUpdateTargets, setTargetsToSubmitted, targets, logins, targetsCompleted, diaryCompleted, history

beforeEach(()=>{
    startUpdateTargets = jest.fn()
    setTargetsToSubmitted = jest.fn()
    targets={
        dailyEnergyTarget: '3200',
        dailyCarbsTarget: '300',
        dailyFatTarget: '45'
    }
    logins=2
    history = { push: jest.fn() }
    wrapper = shallow(
        <UpdateTargetsPage 
            startUpdateTargets={startUpdateTargets}
            setTargetsToSubmitted={setTargetsToSubmitted}
            targets={targets}
            logins={logins}
            history={history}
        />
    )
})

test('Should render UpdateTargetsPage with props correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should update Targets on submission',()=>{
    const newTargets={
        dailyEnergyTarget: '2400',
        dailyCarbsTarget: '200',
        dailyFatTarget: '40'
    }
    wrapper.find('UpdateTargetsForm').prop('onSubmit')(newTargets)
    expect(startUpdateTargets).toHaveBeenLastCalledWith(newTargets)
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
})

test('Should update Targets on submission when first logged in',()=>{
    const newTargets={
        dailyEnergyTarget: '2400',
        dailyCarbsTarget: '200',
        dailyFatTarget: '40'
    }
    wrapper.setProps({ logins: 1, targetsCompleted: true, diaryCompleted: false });
    wrapper.find('UpdateTargetsForm').prop('onSubmit')(newTargets)
    expect(startUpdateTargets).toHaveBeenLastCalledWith(newTargets)
    expect(setTargetsToSubmitted).toHaveBeenCalled()
    expect(history.push).toHaveBeenLastCalledWith('/diary')
})