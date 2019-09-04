import React from 'react'
import { shallow } from 'enzyme'
import { UpdateTargetsForm  } from '../../components/UpdateTargetsForm'

let wrapper, onSubmit, targets

beforeEach(()=>{
    onSubmit=jest.fn()
    targets={
        dailyEnergyTarget: '3200',
        dailyCarbsTarget: '300',
        dailyFatTarget: '45'
    }
    wrapper = shallow(<UpdateTargetsForm targets={targets} onSubmit={onSubmit}/>)
})

test('Should render update personal details form correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should set calorie target change',()=>{
    const value='1700'
    wrapper.find('input').at(0).simulate('change',{
                target: { value }
            })
    expect(wrapper.find('input').at(0).prop('value')).toBe(value)
})

test('Should set calorie target on invalid weight change',()=>{
    const value='94.478'
    wrapper.find('input').at(0).simulate('change',{
                target: { value }
            })
    expect(wrapper.find('input').at(0).prop('value')).toBe(targets.dailyEnergyTarget)
})

test('Should set carbs target change',()=>{
    const value='1700'
    wrapper.find('input').at(1).simulate('change',{
                target: { value }
            })
    expect(wrapper.find('input').at(1).prop('value')).toBe(value)
})

test('Should set carbs target on invalid weight change',()=>{
    const value='94.478'
    wrapper.find('input').at(1).simulate('change',{
                target: { value }
            })
    expect(wrapper.find('input').at(1).prop('value')).toBe(targets.dailyCarbsTarget)
})

test('Should set fat target change',()=>{
    const value='1700'
    wrapper.find('input').at(2).simulate('change',{
                target: { value }
            })
    expect(wrapper.find('input').at(2).prop('value')).toBe(value)
})

test('Should set fat target on invalid weight change',()=>{
    const value='94.478'
    wrapper.find('input').at(2).simulate('change',{
                target: { value }
            })
    expect(wrapper.find('input').at(2).prop('value')).toBe(targets.dailyFatTarget)
})

test('Should simulate form completion and call onSubmit prop for valid unchanged form submission',()=>{
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })

    expect(onSubmit).toHaveBeenLastCalledWith(targets)
})

test('Should simulate form completion and call onSubmit prop for valid form submission',()=>{
    const energy='94'
    wrapper.find('input').at(0).simulate('change',{
        target: { value: energy }
    })
    const carbs='34'
    wrapper.find('input').at(1).simulate('change',{
        target: { value: carbs }
    })
    const fat='21'
    wrapper.find('input').at(2).simulate('change',{
        target: { value: fat }
    })
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })

    expect(onSubmit).toHaveBeenLastCalledWith({
        dailyEnergyTarget:energy,
        dailyCarbsTarget:carbs,
        dailyFatTarget:fat
    })
})

