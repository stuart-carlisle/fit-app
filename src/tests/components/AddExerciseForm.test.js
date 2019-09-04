import React from 'react'
import { shallow } from 'enzyme'
import { AddExerciseForm  } from '../../components/AddExerciseForm'
import moment from 'moment'
import numeral from 'numeral'
import exercises from '../fixtures/exercises'

const filters = {
    date:moment(0).startOf('day'),
        text: '',
        sortBy: 'date',
        referenceDatabase: 'private',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
}

test('Should render add exercise form correctly',()=>{
    const wrapper = shallow(<AddExerciseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render add exercise form with filter data',()=>{ 
    const wrapper = shallow(<AddExerciseForm filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render add exercise form with exercise data',()=>{
    const wrapper = shallow(<AddExerciseForm exercise={exercises[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission when time is less than zero',()=>{
    const exercise = {
        id:'2',
        description:'JUMPING',
        type:'Strength',
        energy:'29',
        time:'-90',
        diaryDate:moment(0).valueOf(),
        lastUsed:moment(0).valueOf()
    }
    const wrapper = shallow(<AddExerciseForm exercise={exercise} filters={filters} />)
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(true);
})

test('Should keep time set at default given an invalid time input',()=>{
    const wrapper = shallow(<AddExerciseForm filters={filters} exercise={exercises[0]} />)
    const value = '12.342'
    const defaultEnergy = numeral(exercises[0].energy).value()
    const defaultTime = numeral(exercises[0].time).value()
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(0).prop('value')).toBe(defaultTime)
    expect(wrapper.find('input').at(1).prop('value')).toBe(defaultEnergy)
})

test('Should set time and energy given a valid time',()=>{
    const wrapper = shallow(<AddExerciseForm filters={filters} exercise={exercises[0]} />)
    const value = '12'
    const newValue = numeral(value).value()
    const defaultEnergy = numeral(exercises[0].energy).value()
    const defaultTime = numeral(exercises[0].time).value()
    const newEnergy = Math.round(defaultEnergy * (newValue/(defaultTime)))
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(0).prop('value')).toBe(value)
    expect(wrapper.find('input').at(1).prop('value')).toBe(newEnergy)
})

test('Should simulate form completion and call onSubmit prop for valid form submission with no changes',()=>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<AddExerciseForm filters={filters} exercise={exercises[0]} onSubmit={onSubmitSpy}/>)
    
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
            filters.referenceDatabase,
            filters.date.valueOf(),
            moment().valueOf(),
            { 
                description: exercises[0].description,
                type: exercises[0].type
            },
            exercises[0].time.toString(),
            exercises[0].energy.toString()   
    )
})

test('Should simulate form completion and call onSubmit prop for valid form submission with changes',()=>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<AddExerciseForm filters={filters} exercise={exercises[0]} onSubmit={onSubmitSpy}/>)
    const value = '12'
    const newValue = numeral(value).value()
    const defaultEnergy = numeral(exercises[0].energy).value()
    const defaultTime = numeral(exercises[0].time).value()
    const newEnergy = Math.round(defaultEnergy * (newValue/(defaultTime)))
    
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })

    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
            filters.referenceDatabase,
            filters.date.valueOf(),
            moment().valueOf(),
            { 
                description: exercises[0].description,
                type: exercises[0].type
            },
            value,
            newEnergy.toString()   
    )
})