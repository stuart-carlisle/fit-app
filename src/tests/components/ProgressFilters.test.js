import React from 'react'
import { shallow } from 'enzyme'
import { ProgressFilters } from '../../components/ProgressFilters'

let wrapper, setChartType

beforeEach(()=>{
    setChartType=jest.fn()
    wrapper = shallow(
        <ProgressFilters
            setChartType={setChartType}
        />
    )
})

test('should render the progress filters correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should handle chart type change', ()=>{
    const value = 'weight-tracker'
    wrapper.find('select').at(0).simulate('change',{
        target:{
            value
        }
    })
    expect(wrapper.find('select').at(0).prop('value')).toBe(value)
})

test('Should handle chart type option change', ()=>{
    const value = '3months'
    wrapper.find('select').at(1).simulate('change',{
        target:{
            value
        }
    })
    expect(wrapper.find('select').at(1).prop('value')).toBe(value)
})

test('Should render correct options list when chart type is changed to weight-tracker',()=>{
    const value = 'weight-tracker'
    wrapper.find('select').at(0).simulate('change',{
        target:{
            value
        }
    })
    expect(wrapper.find('option').at(2).prop('value')).toBe('3months')
    expect(wrapper.find('option').at(2).text()).toBe('Last 3 Months')
    expect(wrapper.find('option').at(3).prop('value')).toBe('6months')
    expect(wrapper.find('option').at(3).text()).toBe('Last 6 Months')
    expect(wrapper.find('option').at(4).prop('value')).toBe('year')
    expect(wrapper.find('option').at(4).text()).toBe('Last Year')
})

test('Should render correct options list when chart type is changed to weight-tracker',()=>{
    let value = 'weight-tracker'
    wrapper.find('select').at(0).simulate('change',{
        target:{
            value
        }
    })
    value = 'calorie-tracker'
    wrapper.find('select').at(0).simulate('change',{
        target:{
            value
        }
    })
    expect(wrapper.find('option').at(2).prop('value')).toBe('week')
    expect(wrapper.find('option').at(2).text()).toBe('Last Week')
    expect(wrapper.find('option').at(3).prop('value')).toBe('fortnight')
    expect(wrapper.find('option').at(3).text()).toBe('Last 2 Weeks')
    expect(wrapper.find('option').at(4).prop('value')).toBe('2months')
    expect(wrapper.find('option').at(4).text()).toBe('2 Months')
})

test('should call setChartType with default chart and option data',()=>{
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(setChartType).toHaveBeenCalledWith({chart:'calorie-tracker', option:'week'})
})

