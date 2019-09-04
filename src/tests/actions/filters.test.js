import moment from 'moment'
import { 
    setDateFilter, 
    setTextFilter, 
    sortByDate, 
    sortByAlphabetical,
    setReferenceDatabaseToPublic,
    setReferenceDatabaseToPrivate,
    setChartType,
    setMealFilter
} from '../../actions/filters'

test('Should generate set date filter action object',()=>{
    const action = setDateFilter(moment(0))
    expect(action).toEqual({
        type:'SET_DATE_FILTER',
        date: moment(0)
    })
})

test('Should generate set text filter action object with text value',()=>{
    const text = 'abc'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
})

test('Should generate set text filter action object with default',()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('Should generate sort by date action object',()=>{
    expect(sortByDate()).toEqual({ type:'SORT_BY_DATE'})
})

test('Should generate sort by alphabet action object',()=>{
    expect(sortByAlphabetical()).toEqual({ type:'SORT_BY_ALPHABETICAL'})
})

test('Should generate set database to public action object',()=>{
    expect(setReferenceDatabaseToPublic()).toEqual({ type:'SET_REFERENCE_DATABASE_TO_PUBLIC'})
})

test('Should generate set database to private action object',()=>{
    expect(setReferenceDatabaseToPrivate()).toEqual({ type:'SET_REFERENCE_DATABASE_TO_PRIVATE'})
})

test('Should generate set chart type action object with text value',()=>{
    const chartType = {
        chart: 'calorie-tracker',
        option: 'week'
    }
    const action = setChartType(chartType)
    expect(action).toEqual({
        type:'SET_CHART_TYPE',
        chartType
    })
})

test('Should generate set meal filter action object with text value',()=>{
    const meal = 'lunch'
    const action = setMealFilter(meal)
    expect(action).toEqual({
        type:'SET_MEAL_FILTER',
        meal
    })
})