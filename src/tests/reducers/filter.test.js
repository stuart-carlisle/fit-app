import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Should setup default filter values',()=>{
    const state = filtersReducer(undefined,{ type:'@@INIT'})
    expect(state).toEqual({
        date:moment().startOf('day'),
        text: '',
        sortBy: 'date',
        referenceDatabase: 'private',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
    })
})

test('Should set date',()=>{
    const date = moment()
    const action = {
            type:'SET_DATE_FILTER',
            date
    }
    const state = filtersReducer(undefined,action)
    expect(state.date).toEqual(date)
})

test('Should set text filter',()=>{
    const text = 'hhh'
    const state = filtersReducer(undefined,{ 
        type:'SET_TEXT_FILTER',
        text 
    })
    expect(state.text).toBe(text)
})

test('Should set sortBy to alphabetical',()=>{
    const state = filtersReducer(undefined,{ type:'SORT_BY_ALPHABETICAL' })
    expect(state.sortBy).toBe('alphabetical')
})

test('Should set sortBy to date',()=>{
    const currentState = {
        date:moment().startOf('day'),
        text: '',
        sortBy: 'alphabetical',
        referenceDatabase: 'private',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
    }
    const action = { type:'SORT_BY_DATE' }
    const state = filtersReducer(currentState,action)
    expect(state.sortBy).toBe('date')
})

test('Should set text filter',()=>{
    const text = 'hhh'
    const state = filtersReducer(undefined,{ 
        type:'SET_TEXT_FILTER',
        text 
    })
    expect(state.text).toBe(text)
})

test('Should set reference database to public',()=>{
    const action = {
            type:'SET_REFERENCE_DATABASE_TO_PUBLIC'
    }
    const state = filtersReducer(undefined,action)
    expect(state.referenceDatabase).toBe('public')
})

test('Should set reference database to private',()=>{
    const currentState = {
        date:moment().startOf('day'),
        text: '',
        sortBy: 'alphabetical',
        referenceDatabase: 'public',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
    }
    const action = {
            type:'SET_REFERENCE_DATABASE_TO_PRIVATE'
    }
    const state = filtersReducer(currentState,action)
    expect(state.referenceDatabase).toBe('private')
})

test('Should set chart type filter',()=>{
    const chartType = { 
        chart: 'weight-tracker',
        option:'6months'
    }
    const state = filtersReducer(undefined,{ 
        type:'SET_CHART_TYPE',
        chartType
    })
    expect(state.chartType).toEqual(chartType)
})

test('Should set meal filter',()=>{
    const meal = 'lunch'
    const state = filtersReducer(undefined,{ 
        type:'SET_MEAL_FILTER',
        meal
    })
    expect(state.meal).toBe('lunch')
})

