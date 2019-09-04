import React from 'react'
import { shallow } from 'enzyme'
import  DailySummary   from '../../components/DailySummary'

test('Should render the daily summary component correctly',()=>{  
    const wrapper = shallow(<DailySummary />)
    expect(wrapper).toMatchSnapshot()
    
})