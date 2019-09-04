import React from 'react'
import { shallow } from 'enzyme'
import { AddFoodForm  } from '../../components/AddFoodForm'
import moment from 'moment'
import foods from '../fixtures/foods'
import targets from '../fixtures/targets'

const filters = {
    date:moment(0).startOf('day'),
        text: '',
        sortBy: 'date',
        referenceDatabase: 'private',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
}

test('Should render add food form correctly',()=>{
    const wrapper = shallow(<AddFoodForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render add food form with filter data',()=>{ 
    const wrapper = shallow(<AddFoodForm filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render add food form with food data',()=>{
    const wrapper = shallow(<AddFoodForm food={foods[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render coreectly for invalid numberOfServings entered',()=>{
    const food = {
        description:'CHEESE ON TOAST',
        nutrition:{
            energy: {amount:'340'},
            totalCarbs: {amount:'34', unit:'g'},
            sugars: {amount:'3', unit:'g'},
            protein: {amount:'2', unit:'g'},
            totalFat: {amount:'1.2', unit:'g'},
            satFat: {amount:'0.5', unit:'g'}
        },
        serving:{
            servingSize: {size:'200',unit:'g'},
            servingsPerContainer: '1'
        },
        lastUsed:moment(0).valueOf()
    }
    const onSubmit = jest.fn()
    const value = '-3'
    const wrapper = shallow(<AddFoodForm food={food} filters={filters} target={targets} onSubmit={onSubmit} />)
    wrapper.find('input').at(0).simulate('change',{
                target: { value }
            })
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.find('input').at(0).prop('value')).toBe('1')
})


test('Should simulate form completion and call onSubmit for valid form submission with changes',()=>{
    const food = {
        description:'CHEESE ON TOAST',
        nutrition:{
            energy: {amount:'340'},
            totalCarbs: {amount:'34', unit:'g'},
            sugars: {amount:'3', unit:'g'},
            protein: {amount:'2', unit:'g'},
            totalFat: {amount:'1.2', unit:'g'},
            satFat: {amount:'0.5', unit:'g'}
        },
        serving:{
            servingSize: {size:'200',unit:'g'},
            servingsPerContainer: '1'
        },
        lastUsed:moment(0).valueOf()
    }
    const onSubmit = jest.fn()
    const wrapper = shallow(<AddFoodForm food={food} filters={filters} target={targets} onSubmit={onSubmit}/>)
    const value = '12'
    
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })

    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmit).toHaveBeenLastCalledWith(
            filters.referenceDatabase,
            filters.date.valueOf(),
            moment().valueOf(),
            value,
            { 
                description: foods[1].description,
                nutrition: foods[1].nutrition,
                serving:foods[1].serving,
            },
            filters.meal
    )
})