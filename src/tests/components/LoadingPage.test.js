import { shallow } from 'enzyme'
import React from 'react'
import LoadingPage from '../../components/LoadingPage'

test('Should render Loading page correctly',()=>{
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})