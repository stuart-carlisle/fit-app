import moment from 'moment'
import selectFoods from '../../selectors/diary'
import foods from '../fixtures/foodsDiary'

test('Should return diary food items for breakfast on a fixed date',()=>{
    const date = {
        date: moment(0).subtract(4,'days')
    }
    const meal = 'breakfast'
    const result = selectFoods(foods,date,meal)
    expect(result).toEqual([{
        ...foods[0],
        totalServingSize:300,
        totalEnergy:670
    },{
        ...foods[2],
        totalServingSize:80,
        totalEnergy:468
    }])
})

test('Should return diary food items for lunch on a fixed date',()=>{
    const date = {
        date: moment(0)
    }
    const meal = 'lunch'
    const result = selectFoods(foods,date,meal)
    expect(result).toEqual([{
        ...foods[1],
        totalServingSize:200,
        totalEnergy:340
    }])
})

test('Should return no foods on a non matching date',()=>{
    const date = {
        date: moment(0).add(4,'days')
    }
    const meal = 'breakfast'
    const result = selectFoods(foods,date,meal)
    expect(result).toEqual([])
})
