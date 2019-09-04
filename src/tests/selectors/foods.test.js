import moment from 'moment'
import selectFoods from '../../selectors/foods'
import foods from '../fixtures/foods'

test('Should filter by text value',()=>{
    const filters = {
        date:moment(0).startOf('day'),
        text: 'n',
        sortBy: 'date',
        referenceDatabase: 'private',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
    }
    const result = selectFoods(foods,filters)
    expect(result).toEqual([foods[1],foods[0]])
})

test('Should sort by last used date',()=>{
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
    const result = selectFoods(foods,filters)
    expect(result).toEqual([foods[2],foods[1],foods[0]])
})

test('Should sort by alphabetical',()=>{
    const filters = {
        date:moment(0).startOf('day'),
        text: '',
        sortBy: 'alphabetical',
        referenceDatabase: 'private',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
    }
    const result = selectFoods(foods,filters)
    expect(result).toEqual([foods[0],foods[1],foods[2]])
})