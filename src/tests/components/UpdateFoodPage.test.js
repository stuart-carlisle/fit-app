import React from 'react'
import { shallow } from 'enzyme'
import { UpdateFoodPage  } from '../../components/UpdateFoodPage'
import foods from '../fixtures/foods'

let startUpdateFoodDiary, startRemoveFoodDiary, history, wrapper

beforeEach(()=>{
    startUpdateFoodDiary = jest.fn()
    startRemoveFoodDiary = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <UpdateFoodPage 
            startUpdateFoodDiary={startUpdateFoodDiary} 
            startRemoveFoodDiary={startRemoveFoodDiary}
            history={history}
            food={foods[1]}
        />
    )
})

test('Should render UpdateFoodPage correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should handle update Food',()=>{
    const numberOfServings = '2.5'
    wrapper.find('#update-food-form').prop('onSubmit')(numberOfServings,foods[1])
    expect(history.push).toHaveBeenLastCalledWith('/diary')
    expect(startUpdateFoodDiary).toHaveBeenLastCalledWith(foods[1].id,{...foods[1],numberOfServings})
})