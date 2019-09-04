import { shallow } from 'enzyme'
import React from 'react'
import { DiaryFoodsList } from '../../components/DiaryFoodsList'
import foods from '../fixtures/foods'

test('Should render diary exercise list with exercises',()=>{
    const diaryFoods = foods.map((food)=>{
        const newFood = {
            ...food,
            totalEnergy: 786,
            totalServingSize: 400
        }
        return newFood
    })
    const wrapper = shallow(<DiaryFoodsList foods={diaryFoods} meal='breakfast' />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render diary exercise list with empty message',()=>{
    const wrapper = shallow(<DiaryFoodsList foods={[]} meal='lunch' />)
    expect(wrapper).toMatchSnapshot()
})
