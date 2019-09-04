import selectDailyTotal, { selectExerciseDailyTotal } from '../../selectors/summary'
import foods from '../fixtures/foodsSummary'
import exercises from '../fixtures/exercisesSummary'
import moment from 'moment'

test('Should return 0 if no foods',()=>{
    const date = moment(0)
    const res = selectDailyTotal([], date)
    expect(res).toBe(0)
})

test('Should add up single food with number of servings not 1',()=>{
    const date = moment(0).subtract(4,'days')
    const res = selectDailyTotal([foods[2]],{ date })
    expect(res).toBe(468)
})

test('Should add up single food with number of servings equal to 1',()=>{
    const date = moment(0)
    const res = selectDailyTotal([foods[1]],{ date })
    expect(res).toBe(340)
})

test('Should add up multiple foods',()=>{
    const date = moment(0).subtract(4,'days')
    const res = selectDailyTotal([foods[0],foods[2]],{ date })
    expect(res).toBe(1138)
})

test('Should add up just foods with the correct diary date',()=>{
    const date = moment(0).subtract(4,'days')
    const res = selectDailyTotal(foods,{ date })
    expect(res).toBe(1138)
})
//////////////////////
test('Should return 0 if no exercises',()=>{
    const date = moment(0)
    const res = selectExerciseDailyTotal([], date)
    expect(res).toBe(0)
})

test('Should add up single exercise with number of servings not 1',()=>{
    const date = moment(0).subtract(4,'days')
    const res = selectExerciseDailyTotal([exercises[0]],{ date })
    expect(res).toBe(122)
})

test('Should add up multiple exercises',()=>{
    const date = moment(0)
    const res = selectExerciseDailyTotal([exercises[1],exercises[2]],{ date })
    expect(res).toBe(116)
})

test('Should add up just exercises with the correct diary date',()=>{
    const date = moment(0)
    const res = selectExerciseDailyTotal(exercises,{ date })
    expect(res).toBe(116)
})