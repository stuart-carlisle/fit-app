import React from 'react'
import { shallow } from 'enzyme'
import UpdateSummary from '../../components/UpdateSummary'

test('Should render the update summary component correctly',()=>{
    const data={
        targets:{
            calorieTarget:2000,
            carbsTarget:49,
            fatTarget:3
        },
        calories:1400,
        fat:2,
        carbs:37
    }
    const wrapper = shallow(<UpdateSummary data={data} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render the update summary component correctly with data greater than targets',()=>{
    const data={
        targets:{
            calorieTarget:2000,
            carbsTarget:49,
            fatTarget:3
        },
        calories:2400,
        fat:4,
        carbs:56
    }
    const wrapper = shallow(<UpdateSummary data={data} />)
    expect(wrapper).toMatchSnapshot()
})

