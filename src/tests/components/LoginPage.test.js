import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('Should render login page correctly',()=>{
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test('Should call startLoginGoogle on button click',()=>{
    const startLoginGoogle = jest.fn()
    const onLoginClick = jest.fn()
    const wrapper = shallow(<LoginPage startLoginGoogle={startLoginGoogle} onLoginClick={onLoginClick} />)
    wrapper.find('input').at(0).simulate('click')
    expect(startLoginGoogle).toHaveBeenCalled()
    expect(onLoginClick).toHaveBeenCalled()
})

test('Should call startLoginTwitter on button click',()=>{
    const startLoginTwitter = jest.fn()
    const onLoginClick = jest.fn()
    const wrapper = shallow(<LoginPage startLoginTwitter={startLoginTwitter} onLoginClick={onLoginClick} />)
    wrapper.find('input').at(1).simulate('click')
    expect(startLoginTwitter).toHaveBeenCalled()
    expect(onLoginClick).toHaveBeenCalled()
})