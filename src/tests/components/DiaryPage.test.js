import { shallow } from 'enzyme'
import React from 'react'
import { DiaryPage } from '../../components/DiaryPage'

test('Should render diary page correctly',()=>{
    const setMealFilter = jest.fn()
    const wrapper = shallow(<DiaryPage setMealFilter={setMealFilter} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should call setMealFilter with correct value when diary foods list is clicked',()=>{
    const setMealFilter = jest.fn()
    const wrapper = shallow(<DiaryPage setMealFilter={setMealFilter} />)
    wrapper.find('Link').at(0).simulate('click')
    expect(setMealFilter).toHaveBeenCalledWith('breakfast')
    wrapper.find('Link').at(1).simulate('click')
    expect(setMealFilter).toHaveBeenCalledWith('lunch')
    wrapper.find('Link').at(2).simulate('click')
    expect(setMealFilter).toHaveBeenCalledWith('dinner')
    wrapper.find('Link').at(3).simulate('click')
    expect(setMealFilter).toHaveBeenCalledWith('snacks')
})