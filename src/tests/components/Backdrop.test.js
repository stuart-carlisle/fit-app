import { shallow } from 'enzyme'
import React from 'react'
import { Backdrop } from '../../components/Backdrop'

test('Should render backdrop correctly',()=>{
    const click = jest.fn()
    const wrapper = shallow(<Backdrop click={click} backgroundColor={'grey'} />)
    expect(wrapper).toMatchSnapshot()
})