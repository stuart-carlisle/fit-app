import { shallow } from 'enzyme'
import React from 'react'
import { SideDrawerLogoutButton } from '../../components/SideDrawerLogoutButton'
 
test('Should render the sidedrawer back button correctly',()=>{
    const drawerToggleClickHandler = jest.fn()
    const startLogout = jest.fn()
    const data = {
        link:'/',
        name:'logout'
    }
    const wrapper = shallow(<SideDrawerLogoutButton data={data} drawerToggleClickHandler={drawerToggleClickHandler} startLogout={startLogout} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should call drawer toggle click handler and startLogout on click',()=>{
    const drawerToggleClickHandler = jest.fn()
    const startLogout = jest.fn()
    const data = {
        link:'/',
        name:'logout'
    }
    const wrapper = shallow(<SideDrawerLogoutButton data={data} drawerToggleClickHandler={drawerToggleClickHandler} startLogout={startLogout} />)
    wrapper.find('Link').simulate('click')
    expect(drawerToggleClickHandler).toHaveBeenCalled()
    expect(startLogout).toHaveBeenCalled()
})