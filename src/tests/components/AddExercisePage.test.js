import React from 'react'
import { shallow } from 'enzyme'
import { AddExercisePage  } from '../../components/AddExercisePage'


test('should render add exercise page correctly without props',()=>{
    const wrapper = shallow(<AddExercisePage />)
    expect(wrapper).toMatchSnapshot()
})

test('should render add exercise page correctly with props',()=>{
    const setTextFilter = jest.fn()
    const sortByDate =jest.fn()
    const setReferenceDatabaseToPrivate = jest.fn()

    const wrapper = shallow(<AddExercisePage 
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        setReferenceDatabaseToPrivate={setReferenceDatabaseToPrivate}
    />)
    
    expect(wrapper).toMatchSnapshot()
})