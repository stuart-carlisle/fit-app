import React from 'react'
import { shallow } from 'enzyme'
import { AddFoodConfirmationPage   } from '../../components/AddFoodConfirmationPage'
import foods from '../fixtures/foods'
import targets from '../fixtures/targets'
import moment from 'moment'

test('Should render AddFoodConfirmationPage with props correctly',()=>{
    const startAddFoodPrivate = jest.fn()
    const startUpdateFoodPrivate = jest.fn()
    const startAddFoodDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <AddFoodConfirmationPage 
            startAddFoodDiary={startAddFoodDiary}
            startAddFoodPrivate={startAddFoodPrivate} 
            startUpdateFoodPrivate={startUpdateFoodPrivate}
            history={history}
            food={foods[1]}
            targets={targets}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

test('Should handle add food from private foods',()=>{
    const filters =  {
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

    const startAddFoodPrivate = jest.fn()
    const startUpdateFoodPrivate = jest.fn()
    const startAddFoodDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <AddFoodConfirmationPage 
            startAddFoodDiary={startAddFoodDiary}
            startAddFoodPrivate={startAddFoodPrivate} 
            startUpdateFoodPrivate={startUpdateFoodPrivate}
            history={history}
            food={foods[1]}
            targets={targets}
        />
    )
    wrapper.find('#add-food-form').prop('onSubmit')(filters.referenceDatabase, filters.date.valueOf(), moment().valueOf(), 1, {description:foods[1].description,nutrition:foods[1].nutrition,serving:foods[1].serving}, filters.meal)
    expect(startUpdateFoodPrivate).toHaveBeenLastCalledWith(
            foods[1].id,
            { 
                description: foods[1].description,
                nutrition: foods[1].nutrition,
                serving: foods[1].serving,
                lastUsed:moment().valueOf()
            }
             
        )
    expect(startAddFoodDiary).toHaveBeenLastCalledWith(
            { 
                description: foods[1].description,
                nutrition: foods[1].nutrition,
                serving: foods[1].serving,
                numberOfServings: 1,
                meal: filters.meal,
                diaryDate:filters.date.valueOf()
            }
    )
    expect(startAddFoodPrivate).not.toHaveBeenCalled()
    expect(history.push).toHaveBeenLastCalledWith('/diary')
})

test('Should handle add food from public foods',()=>{
    const filters = {
        date:moment(0).add(4, 'days').startOf('day'),
        text: '',
        sortBy: 'date',
        referenceDatabase: 'public',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'lunch'
    }
    const startAddFoodPrivate = jest.fn()
    const startUpdateFoodPrivate = jest.fn()
    const startAddFoodDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <AddFoodConfirmationPage 
            startAddFoodDiary={startAddFoodDiary}
            startAddFoodPrivate={startAddFoodPrivate} 
            startUpdateFoodPrivate={startUpdateFoodPrivate}
            history={history}
            food={foods[1]}
            targets={targets}
        />
    )
    wrapper.find('#add-food-form').prop('onSubmit')(filters.referenceDatabase, filters.date.valueOf(), moment().valueOf(), 1, {description:foods[1].description,nutrition:foods[1].nutrition,serving:foods[1].serving}, filters.meal)
    expect(startAddFoodPrivate).toHaveBeenLastCalledWith(
            { 
                description: foods[1].description,
                nutrition: foods[1].nutrition,
                serving: foods[1].serving,
                lastUsed:moment().valueOf()
            }
             
        )
    expect(startAddFoodDiary).toHaveBeenLastCalledWith(
            { 
                description: foods[1].description,
                nutrition: foods[1].nutrition,
                serving: foods[1].serving,
                numberOfServings: 1,
                meal: filters.meal,
                diaryDate:filters.date.valueOf()
            }
    )
    expect(startUpdateFoodPrivate).not.toHaveBeenCalled()
    expect(history.push).toHaveBeenLastCalledWith('/diary')
})
