import React from 'react'
import { shallow } from 'enzyme'
import  Chart   from '../../components/Chart'
import chartData from '../fixtures/chart'

test('Should render the chart component with valid data',()=>{  
    const wrapper = shallow(<Chart chartData={chartData} chartDataMobile={chartData} chartDataTablet={chartData} />)
    expect(wrapper).toMatchSnapshot()
    
})