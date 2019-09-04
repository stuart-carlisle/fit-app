import React from 'react'
import { shallow } from 'enzyme'
import { CreateFoodPage   } from '../../components/CreateFoodPage'
import foods from '../fixtures/foods'

test('Should render CreateFoodPage with props correctly',()=>{
    const startAddFoodPrivate = jest.fn()
    const startAddFoodDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <CreateFoodPage 
            startAddFoodDiary={startAddFoodDiary}
            startAddFoodPrivate={startAddFoodPrivate} 
            history={history}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

test('should call the startAddFoodPrivate and startAddFoodDiary actions when submitted',()=>{
    const {id, ...food} = foods[0]
    const privateFood = {
        ...food,
        description: food.description.toUpperCase()
    }
    const startAddFoodPrivate = jest.fn()
    const startAddFoodDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <CreateFoodPage 
            startAddFoodDiary={startAddFoodDiary}
            startAddFoodPrivate={startAddFoodPrivate} 
            history={history}
        />
    )
    wrapper.find('#food-form').prop('onSubmit')(privateFood)
    expect(startAddFoodPrivate).toHaveBeenLastCalledWith(privateFood)
    expect(startAddFoodDiary).toHaveBeenLastCalledWith(privateFood)
    expect(history.push).toHaveBeenCalledWith('/diary')
})


