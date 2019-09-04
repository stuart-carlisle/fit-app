import React from 'react'
import { shallow } from 'enzyme'
import { DateFilter  } from '../../components/DateFilter'
import { altFilters } from '../fixtures/filters'

test('Should render date filter component correctly',()=>{
    const setDateFilter = jest.fn()
    const wrapper = shallow(
        <DateFilter
            setDateFilter={setDateFilter}
            filters={altFilters}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

test('Should render filter date correctly',()=>{
    const setDateFilter = jest.fn()
    const wrapper = shallow(
        <DateFilter
            setDateFilter={setDateFilter}
            filters={altFilters}
        />
    )
    expect(wrapper.find('#daily-summary').prop('date')).toBe(altFilters.date)
})

test('Should render filter date correctly on next button press',()=>{
    const setDateFilter = jest.fn()
    const newMoment = (altFilters.date).add(1,'days')
    const wrapper = shallow(
        <DateFilter
            setDateFilter={setDateFilter}
            filters={altFilters}
        />
    )
    wrapper.find('#right-date-filter').simulate('click',{
        preventDefault:() => { }
    })
    expect(wrapper.find('#daily-summary').prop('date')).toBe(newMoment)
    expect(setDateFilter).toHaveBeenCalled()
    
})

test('Should render filter date correctly on next button press',()=>{
    const setDateFilter = jest.fn()
    const newMoment = (altFilters.date).subtract(1,'days')
    const wrapper = shallow(
        <DateFilter
            setDateFilter={setDateFilter}
            filters={altFilters}
        />
    )
    wrapper.find('#left-date-filter').simulate('click',{
        preventDefault:() => { }
    })
    expect(wrapper.find('#daily-summary').prop('date')).toBe(newMoment)
    expect(setDateFilter).toHaveBeenCalled()
})