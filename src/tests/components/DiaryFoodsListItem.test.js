import { shallow } from 'enzyme'
import React from 'react'
import { DiaryFoodsListItem } from '../../components/DiaryFoodsListItem'
import foods from '../fixtures/foods'

test('Should render a diary exercise',()=>{
    const diaryFoods = foods.map((food)=>{
        const newFood = {
            ...food,
            totalEnergy: 786,
            totalServingSize: 400
        }
        return newFood
    })
    const wrapper = shallow(<DiaryFoodsListItem {...diaryFoods[1]}/>)
    expect(wrapper).toMatchSnapshot()
})