import { shallow } from 'enzyme'
import React from 'react'
import ProgressPage from '../../components/ProgressPage'
 
test('Should render the progress page correctly',()=>{
    const wrapper = shallow(<ProgressPage />)
    expect(wrapper).toMatchSnapshot()
})