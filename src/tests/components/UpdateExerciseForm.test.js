import React from 'react'
import { shallow } from 'enzyme'
import { UpdateExerciseForm  } from '../../components/UpdateExerciseForm'
import numeral from 'numeral'
import exercises from '../fixtures/exercises'


test('Should render update exercise form correctly',()=>{
    const wrapper = shallow(<UpdateExerciseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render update exercise form with exercise data',()=>{
    const {lastUsed, ...exercise} = exercises[0]
    const wrapper = shallow(<UpdateExerciseForm exercise={exercise}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission when time is less than zero',()=>{
    let {lastUsed, ...exercise} = exercises[0]
    exercise.time = -90
    const wrapper = shallow(<UpdateExerciseForm exercise={exercise} />)
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(true);
})

test('Should keep time set at default given an invalid time input',()=>{
    const {lastUsed, ...exercise} = exercises[0]
    const wrapper = shallow(<UpdateExerciseForm exercise={exercise} />)
    const value = '12.342'
    const defaultEnergy = numeral(exercise.energy).value()
    const defaultTime = numeral(exercise.time).value()
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(0).prop('value')).toBe(defaultTime)
    expect(wrapper.find('input').at(1).prop('value')).toBe(defaultEnergy)
})

test('Should set time and energy given a valid time',()=>{
    const {lastUsed, ...exercise} = exercises[0]
    const wrapper = shallow(<UpdateExerciseForm exercise={exercise} />)
    const value = '12'
    const newValue = numeral(value).value()
    const defaultEnergy = numeral(exercise.energy).value()
    const defaultTime = numeral(exercise.time).value()
    const newEnergy = Math.round(defaultEnergy * (newValue/(defaultTime)))
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(0).prop('value')).toBe(value)
    expect(wrapper.find('input').at(1).prop('value')).toBe(newEnergy)
})

test('Should simulate form completion and call onSubmit prop for valid form submission with no changes',()=>{
    const onSubmitSpy = jest.fn()
    const {lastUsed, ...exercise} = exercises[0]
    const wrapper = shallow(<UpdateExerciseForm exercise={exercise} onSubmit={onSubmitSpy}/>)
    
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
            { 
                description: exercise.description,
                type: exercise.type,
                time:exercise.time,
                energy:exercise.energy
            }
    )
})

test('Should simulate form completion and call onSubmit prop for valid form submission with changes',()=>{
    const onSubmitSpy = jest.fn()
    const {lastUsed, ...exercise} = exercises[0]
    const wrapper = shallow(<UpdateExerciseForm exercise={exercise} onSubmit={onSubmitSpy}/>)
    const value = '12'
    const newValue = numeral(value).value()
    const defaultEnergy = numeral(exercise.energy).value()
    const defaultTime = numeral(exercise.time).value()
    const newEnergy = Math.round(defaultEnergy * (newValue/(defaultTime)))
    
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })

    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
            { 
                description: exercise.description,
                type: exercise.type,
                time:value,
                energy:newEnergy.toString() 
            }
    )
})

test('should call onRemove when remove button is clicked',()=>{
    const {lastUsed, ...exercise} = exercises[0]
    const onRemove = jest.fn()
    const wrapper = shallow(<UpdateExerciseForm exercise={exercise} onRemove={onRemove}/>)
    wrapper.find('button').at(1).simulate('click',{
        preventDefault:() => { }
    })
    expect(onRemove).toHaveBeenCalled()
})