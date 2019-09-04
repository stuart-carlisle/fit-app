import moment from 'moment'
import selectExercises from '../../selectors/diaryExercises'
import exercises from '../fixtures/exercisesSummary'

test('Should return diary exercise items on a fixed date',()=>{
    const date = {
        date: moment(0)
    }
    const result = selectExercises(exercises,date)
    expect(result).toEqual([exercises[1],exercises[2]])
})

test('Should return no foods on a non matching date',()=>{
    const date = {
        date: moment(0).add(4,'days')
    }
    const result = selectExercises(exercises,date)
    expect(result).toEqual([])
})
