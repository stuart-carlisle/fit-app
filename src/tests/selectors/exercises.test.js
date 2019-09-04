import moment from 'moment'
import selectExercises from '../../selectors/exercises'
import exercises from '../fixtures/exercises'

test('Should filter by text value',()=>{
    const filters = {
        date:moment(0).startOf('day'),
        text: 'p',
        sortBy: 'date',
        referenceDatabase: 'private',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
    }
    const result = selectExercises(exercises,filters)
    expect(result).toEqual([exercises[2],exercises[1]])
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
    const result = selectExercises(exercises,filters)
    expect(result).toEqual([exercises[2],exercises[1],exercises[0]])
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
    const result = selectExercises(exercises,filters)
    expect(result).toEqual([exercises[2],exercises[1],exercises[0]])
})