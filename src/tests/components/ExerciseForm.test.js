import React from 'react'
import { shallow } from 'enzyme'
import { ExerciseForm  } from '../../components/ExerciseForm'
import moment from 'moment'
import exercises from '../fixtures/exercises'

test('Should render exercise form correctly',()=>{
    const wrapper = shallow(<ExerciseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render exercise form with filter data',()=>{
    const filters={
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
    const wrapper = shallow(<ExerciseForm filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExerciseForm />)
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(true);
    //expect(wrapper.find('p').text().length).toBeGreaterThan(0)
})

test('Should render correct value when description is changed',()=>{
    const wrapper = shallow(<ExerciseForm />)
    const value = 'running'
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(0).prop('value')).toBe(value)
})

test('Should render correct value when type is changed',()=>{
    const wrapper = shallow(<ExerciseForm />)
    const value = 'strength'
    wrapper.find('select').at(0).simulate('change',{
        currentTarget: { value }
    })
    expect(wrapper.find('select').at(0).prop('value')).toBe(value)
})

test('Should set energy given an invalid energy',()=>{
    const wrapper = shallow(<ExerciseForm />)
    const value = '1.342'
    wrapper.find('input').at(1).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(1).prop('value')).toBe('')
})

test('Should set time given an valid time',()=>{
    const wrapper = shallow(<ExerciseForm />)
    const value = '590'
    wrapper.find('input').at(1).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(1).prop('value')).toBe(value)
})

test('Should set time given an invalid time',()=>{
    const wrapper = shallow(<ExerciseForm />)
    const value = '12.342'
    wrapper.find('input').at(2).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(2).prop('value')).toBe('')
})

test('Should set time given a valid time',()=>{
    const wrapper = shallow(<ExerciseForm />)
    const value = '12'
    wrapper.find('input').at(2).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(2).prop('value')).toBe(value)
})

test('Should simulate form completion and call onSubmit prop for valid form submission',()=>{
    const filters={
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
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExerciseForm filters={filters} onSubmit={onSubmitSpy}/>)
    
    wrapper.find('input').at(0).simulate('change',{//description
        target: { value: exercises[0].description }
    })
    wrapper.find('select').at(0).simulate('change',{//type
        currentTarget: { value: exercises[0].type }
    })
    wrapper.find('input').at(1).simulate('change',{//energy
        target: { value:exercises[0].energy }
    })
    wrapper.find('input').at(2).simulate('change',{//time
        target: { value: exercises[0].time }
    })
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:exercises[0].description,
        type:exercises[0].type,
        energy:exercises[0].energy,
        time:exercises[0].time,
        diaryDate:filters.date.valueOf(),
        lastUsed:moment().valueOf()
    })
})