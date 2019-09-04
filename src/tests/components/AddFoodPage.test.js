import React from 'react'
import { shallow } from 'enzyme'
import { AddFoodPage  } from '../../components/AddFoodPage'


test('should render add food page correctly without props',()=>{
    const wrapper = shallow(<AddFoodPage />)
    expect(wrapper).toMatchSnapshot()
})

test('should render add food page correctly with props',()=>{
    const setTextFilter = jest.fn()
    const sortByDate =jest.fn()
    const setReferenceDatabaseToPrivate = jest.fn()

    const wrapper = shallow(<AddFoodPage 
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        setReferenceDatabaseToPrivate={setReferenceDatabaseToPrivate}
    />)
    
    expect(wrapper).toMatchSnapshot()
})