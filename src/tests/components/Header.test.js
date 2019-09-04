import { shallow } from 'enzyme'
import React from 'react'
import { Header } from '../../components/Header'
 
test('Should render the header correctly',()=>{
    const  drawerToggleClickHandler = jest.fn()
    const wrapper = shallow(<Header drawerToggleClickHandler={drawerToggleClickHandler} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should call drawerToggleClickHandler on header button click',()=>{
    const  drawerToggleClickHandler = jest.fn()
    const wrapper = shallow(<Header drawerToggleClickHandler={drawerToggleClickHandler} />)
    wrapper.find('button').at(0).simulate('click')
    expect(drawerToggleClickHandler).toHaveBeenCalled()
})
