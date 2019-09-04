import { shallow } from 'enzyme'
import React from 'react'
import SideDrawer from '../../components/SideDrawer'
 
test('Should render the sidedrawer correctly',()=>{
    const drawerToggleClickHandler = jest.fn()
    const wrapper = shallow(<SideDrawer show={true} drawerToggleClickHandler={drawerToggleClickHandler} />)
    expect(wrapper).toMatchSnapshot()
})