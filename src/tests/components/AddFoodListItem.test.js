import { shallow } from 'enzyme'
import React from 'react'
import { AddFoodsListItem } from '../../components/AddFoodsListItem'
import foods from '../fixtures/foods'

test('Should render a food correctly',()=>{
    const wrapper = shallow(<AddFoodsListItem {...foods[1]}/>)
    expect(wrapper).toMatchSnapshot()
})