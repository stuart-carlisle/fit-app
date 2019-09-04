import { shallow } from 'enzyme'
import React from 'react'
import { AddExercisesList } from '../../components/AddExercisesList'
import exercises from '../fixtures/exercises'

test('Should render add exercise list with exercises',()=>{
    const wrapper = shallow(<AddExercisesList exercises={exercises}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render add exercise list with empty message',()=>{
    const wrapper = shallow(<AddExercisesList exercises={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render add exercise list with more than 10 items to only show 10',()=>{
    const wrapper = shallow(<AddExercisesList exercises={[...exercises,...exercises,...exercises,...exercises]}/>)
    expect(wrapper).toMatchSnapshot()
})