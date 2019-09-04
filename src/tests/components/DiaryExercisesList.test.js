import { shallow } from 'enzyme'
import React from 'react'
import { DiaryExercisesList } from '../../components/DiaryExercisesList'
import exercises from '../fixtures/exercises'

test('Should render diary exercise list with exercises',()=>{
    const wrapper = shallow(<DiaryExercisesList exercises={exercises}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render diary exercise list with empty message',()=>{
    const wrapper = shallow(<DiaryExercisesList exercises={[]}/>)
    expect(wrapper).toMatchSnapshot()
})
