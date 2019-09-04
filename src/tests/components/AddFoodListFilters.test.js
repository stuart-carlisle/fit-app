import React from 'react'
import { shallow } from 'enzyme'
import { AddFoodListFilters } from '../../components/AddFoodListFilters'
import filters, { altFilters } from '../fixtures/filters'

let setTextFilter, setReferenceDatabasePublic, sortByDate, sortByAlphabetical, setFoodsPublic, wrapper

beforeEach(()=>{
    setTextFilter=jest.fn()
    setReferenceDatabasePublic=jest.fn()
    sortByDate=jest.fn()
    sortByAlphabetical=jest.fn()
    setFoodsPublic=jest.fn() 
    wrapper = shallow(
        <AddFoodListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            setReferenceDatabasePublic={setReferenceDatabasePublic}
            sortByDate={sortByDate}
            sortByAlphabetical={sortByAlphabetical}
            setFoodsPublic={setFoodsPublic}
        />
    )
})

test('Should render add food list filters correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should render add food list alt filters correctly',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should handle text change', ()=>{
    const value = 'run'
    wrapper.find('input').simulate('change',{
        target:{
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should sort by date', ()=>{
    const value = 'date'
    wrapper.setProps({
        filter: altFilters
    })
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by alphabetical', ()=>{
    const value = 'alphabetical'
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    })
    expect(sortByAlphabetical).toHaveBeenCalled()
})

//need to make a dummy algolia search in the future to test the form submission