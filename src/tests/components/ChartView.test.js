import React from 'react'
import { shallow } from 'enzyme'
import { ChartView } from '../../components/ChartView'

test('Should render the chart view component',()=>{  
    const wrapper = shallow(<ChartView />)
    expect(wrapper).toMatchSnapshot()
})