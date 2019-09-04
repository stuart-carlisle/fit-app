import { shallow } from 'enzyme'
import React from 'react'
import { AddExercisesListItem } from '../../components/AddExercisesListItem'
import exercises from '../fixtures/exercises'

test('Should render an exercise',()=>{
    const wrapper = shallow(<AddExercisesListItem {...exercises[1]}/>)
    expect(wrapper).toMatchSnapshot()
})