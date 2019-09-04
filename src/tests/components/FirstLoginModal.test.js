import { shallow } from 'enzyme'
import React from 'react'
import { FirstLoginModal } from '../../components/FirstLoginModal'

test('Should render first login modal correctly',()=>{
    const modalClickHandler = jest.fn()
    const wrapper = shallow(<FirstLoginModal modalClickHandler={modalClickHandler} show={true} message={'this is a message'} />)
    expect(wrapper).toMatchSnapshot()
})
