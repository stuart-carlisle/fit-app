import { shallow } from 'enzyme'
import React from 'react'
import { AddFoodsList } from '../../components/AddFoodsList'
import foods from '../fixtures/foods'

test('Should render add food list with foods',()=>{
    const wrapper = shallow(<AddFoodsList foods={foods}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render add food list with empty message',()=>{
    const wrapper = shallow(<AddFoodsList foods={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render add food list with more than 10 items to only show 10',()=>{
    const wrapper = shallow(<AddFoodsList foods={[...foods,...foods,...foods,...foods]}/>)
    expect(wrapper).toMatchSnapshot()
})