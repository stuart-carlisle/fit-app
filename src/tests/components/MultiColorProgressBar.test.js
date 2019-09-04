import { shallow } from 'enzyme'
import React from 'react'
import MultiColorProgressBar from '../../components/MultiColorProgressBar'
 
test('Should render the multicolor progress bar correctly',()=>{
    const wrapper = shallow(<MultiColorProgressBar />)
    expect(wrapper).toMatchSnapshot()
})