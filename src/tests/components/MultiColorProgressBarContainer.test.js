import { shallow } from 'enzyme'
import React from 'react'
import MultiColorProgressBarContainer from '../../components/MultiColorProgressBarContainer'
 
test('Should render the multicolor progress bar container correctly',()=>{
    const data = {
        target: 2000,
        combinedTotal: 300
    }
    const wrapper = shallow(<MultiColorProgressBarContainer data={data} />)
    expect(wrapper).toMatchSnapshot()
})