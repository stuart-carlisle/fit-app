import { shallow } from 'enzyme'
import React from 'react'
import { DiaryExercisesListItem } from '../../components/DiaryExercisesListItem'
import exercises from '../fixtures/exercises'

test('Should render a diary exercise',()=>{
    const wrapper = shallow(<DiaryExercisesListItem {...exercises[1]}/>)
    expect(wrapper).toMatchSnapshot()
})