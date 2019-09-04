import React from 'react'
import { shallow } from 'enzyme'
import { CreateFoodForm  } from '../../components/CreateFoodForm'
import moment from 'moment'
import foods, {altFoods} from '../fixtures/foods'


test('Should render food form correctly',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render food form with filter data',()=>{
    const filters={
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
    const wrapper = shallow(<CreateFoodForm filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(true);
})

test('Should render correct value when description is changed',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const value = 'bread'
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(0).prop('value')).toBe(value)
})

test('Should render correct value when serving size is changed',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const servingSize = '14.5'
    const unit = 'oz'
    wrapper.find('input').at(1).simulate('change',{
        target: { value: servingSize }
    })
    wrapper.find('select').at(0).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(1).prop('value')).toBe(servingSize)
    expect(wrapper.find('select').at(0).prop('value')).toBe(unit)
})

test('Should set serving size given invalid data',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const servingSize = '14.5999'
    const unit = 'g'
    wrapper.find('input').at(1).simulate('change',{
        target: { value: servingSize }
    })
    wrapper.find('select').at(0).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(1).prop('value')).toBe('')
    expect(wrapper.find('select').at(0).prop('value')).toBe(unit)
})

test('Should render correct value when servingsPerContainer is changed',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const value = '2'
    wrapper.find('input').at(2).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(2).prop('value')).toBe(value)
})

test('Should set servings per container given invalid data',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const value = '2.459'
    wrapper.find('input').at(2).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(2).prop('value')).toBe('')
})

test('Should render correct value when energy is changed',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const value = '289'
    wrapper.find('input').at(3).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(3).prop('value')).toBe(value)
})

test('Should set energy given invalid data',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const value = '276.8878'
    wrapper.find('input').at(3).simulate('change',{
        target: { value }
    })
    expect(wrapper.find('input').at(3).prop('value')).toBe('')
})

test('Should render correct value when total carbs is changed',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const totalCarbs = '14.5'
    const unit = 'g'
    wrapper.find('input').at(4).simulate('change',{
        target: { value: totalCarbs }
    })
    wrapper.find('select').at(1).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(4).prop('value')).toBe(totalCarbs)
    expect(wrapper.find('select').at(1).prop('value')).toBe(unit)
})

test('Should set total carbs given invalid data',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const totalCarbs = '14.5999'
    const unit = 'g'
    wrapper.find('input').at(4).simulate('change',{
        target: { value: totalCarbs }
    })
    wrapper.find('select').at(1).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(4).prop('value')).toBe('')
    expect(wrapper.find('select').at(1).prop('value')).toBe(unit)
})

test('Should render correct value when sugars is changed',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const sugars = '14.5'
    const unit = 'g'
    wrapper.find('input').at(5).simulate('change',{
        target: { value: sugars }
    })
    wrapper.find('select').at(2).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(5).prop('value')).toBe(sugars)
    expect(wrapper.find('select').at(2).prop('value')).toBe(unit)
})

test('Should set sugars given invalid data',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const sugars = '14.5999'
    const unit = 'g'
    wrapper.find('input').at(5).simulate('change',{
        target: { value: sugars }
    })
    wrapper.find('select').at(2).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(5).prop('value')).toBe('')
    expect(wrapper.find('select').at(2).prop('value')).toBe(unit)
})

test('Should render correct value when protein is changed',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const protein = '14.5'
    const unit = 'g'
    wrapper.find('input').at(6).simulate('change',{
        target: { value: protein }
    })
    wrapper.find('select').at(3).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(6).prop('value')).toBe(protein)
    expect(wrapper.find('select').at(3).prop('value')).toBe(unit)
})

test('Should set sugars given invalid data',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const protein = '14.5999'
    const unit = 'g'
    wrapper.find('input').at(6).simulate('change',{
        target: { value: protein }
    })
    wrapper.find('select').at(3).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(6).prop('value')).toBe('')
    expect(wrapper.find('select').at(3).prop('value')).toBe(unit)
})

test('Should render correct value when total fat is changed',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const totalFat = '14.5'
    const unit = 'g'
    wrapper.find('input').at(7).simulate('change',{
        target: { value: totalFat }
    })
    wrapper.find('select').at(4).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(7).prop('value')).toBe(totalFat)
    expect(wrapper.find('select').at(4).prop('value')).toBe(unit)
})

test('Should set totalFat given invalid data',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const totalFat = '14.5999'
    const unit = 'g'
    wrapper.find('input').at(7).simulate('change',{
        target: { value: totalFat }
    })
    wrapper.find('select').at(4).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(7).prop('value')).toBe('')
    expect(wrapper.find('select').at(4).prop('value')).toBe(unit)
})

test('Should render correct value when sat fat is changed',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const satFat = '14.5'
    const unit = 'g'
    wrapper.find('input').at(8).simulate('change',{
        target: { value: satFat }
    })
    wrapper.find('select').at(5).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(8).prop('value')).toBe(satFat)
    expect(wrapper.find('select').at(5).prop('value')).toBe(unit)
})

test('Should set satFat given invalid data',()=>{
    const wrapper = shallow(<CreateFoodForm />)
    const satFat = '14.5999'
    const unit = 'g'
    wrapper.find('input').at(8).simulate('change',{
        target: { value: satFat }
    })
    wrapper.find('select').at(5).simulate('change',{
        target: { value: unit }
    })
    expect(wrapper.find('input').at(8).prop('value')).toBe('')
    expect(wrapper.find('select').at(5).prop('value')).toBe(unit)
})

test('Should simulate form completion and call onSubmit prop for valid form submission',()=>{
    const filters={
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
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<CreateFoodForm filters={filters} onSubmit={onSubmitSpy}/>)
    
    wrapper.find('input').at(0).simulate('change',{//description
        target: { value: foods[0].description }
    })
    wrapper.find('input').at(1).simulate('change',{//serving size
        target: { value: foods[0].serving.servingSize.size }
    })
    wrapper.find('select').at(0).simulate('change',{//serving size unit
        target: { value: foods[0].serving.servingSize.unit }
    })
    wrapper.find('input').at(3).simulate('change',{//energy
        target: { value: foods[0].nutrition.energy.amount }
    })
    
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:foods[0].description,
        serving:foods[0].serving,
        nutrition:foods[0].nutrition,
        diaryDate:filters.date.valueOf(),
        lastUsed:moment().valueOf(),
        numberOfServings: '1',
        meal: filters.meal
    })
})

test('Should simulate form submission converting oz to g correctly',()=>{
    const filters={
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
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<CreateFoodForm filters={filters} onSubmit={onSubmitSpy}/>)
    
    wrapper.find('input').at(0).simulate('change',{//description
        target: { value: altFoods[0].description }
    })
    wrapper.find('input').at(1).simulate('change',{//serving size
        target: { value: altFoods[0].serving.servingSize.size }
    })
    wrapper.find('select').at(0).simulate('change',{//serving size unit
        target: { value: altFoods[0].serving.servingSize.unit }
    })
    wrapper.find('input').at(2).simulate('change',{//servingsPerContainer
        target: { value: altFoods[0].serving.servingsPerContainer }
    })
    wrapper.find('input').at(3).simulate('change',{//energy
        target: { value: altFoods[0].nutrition.energy.amount }
    })
    wrapper.find('input').at(4).simulate('change',{//totalCarbs
        target: { value: altFoods[0].nutrition.totalCarbs.amount }
    })
    wrapper.find('select').at(1).simulate('change',{//totalCarbs unit
        target: { value: altFoods[0].nutrition.totalCarbs.unit }
    })
    wrapper.find('input').at(5).simulate('change',{//sugars
        target: { value: altFoods[0].nutrition.sugars.amount }
    })
    wrapper.find('select').at(2).simulate('change',{//sugars unit
        target: { value: altFoods[0].nutrition.sugars.unit }
    })
    wrapper.find('input').at(6).simulate('change',{//protein
        target: { value: altFoods[0].nutrition.protein.amount }
    })
    wrapper.find('select').at(3).simulate('change',{//protein unit
        target: { value: altFoods[0].nutrition.protein.unit }
    })
    wrapper.find('input').at(7).simulate('change',{//totalFat
        target: { value: altFoods[0].nutrition.totalFat.amount }
    })
    wrapper.find('select').at(4).simulate('change',{//totalFat unit
        target: { value: altFoods[0].nutrition.totalFat.unit }
    })
    wrapper.find('input').at(8).simulate('change',{//satFat
        target: { value: altFoods[0].nutrition.satFat.amount }
    })
    wrapper.find('select').at(5).simulate('change',{//satFat unit
        target: { value: altFoods[0].nutrition.satFat.unit }
    })
    
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:altFoods[1].description,
        serving:altFoods[1].serving,
        nutrition:altFoods[1].nutrition,
        diaryDate:filters.date.valueOf(),
        lastUsed:moment().valueOf(),
        numberOfServings: '1',
        meal: filters.meal
    })
})