import { shallow } from 'enzyme'
import React from 'react'
import SideDrawerBackButton from '../../components/SideDrawerBackButton'
 
test('Should render the sidedrawer back button correctly',()=>{
    const drawerToggleClickHandler = jest.fn()
    const data = {
        link:'/',
        name:'back',
        image:'test.png'
    }
    const wrapper = shallow(<SideDrawerBackButton data={data} drawerToggleClickHandler={drawerToggleClickHandler} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should call drawer toggle click handler on click',()=>{
    const drawerToggleClickHandler = jest.fn()
    const data = {
        link:'/',
        name:'back',
        image:'test.png'
    }
    const wrapper = shallow(<SideDrawerBackButton data={data} drawerToggleClickHandler={drawerToggleClickHandler} />)
    wrapper.find('Link').simulate('click')
    expect(drawerToggleClickHandler).toHaveBeenCalled()
})