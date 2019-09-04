import exercisesDiaryReducer from '../../reducers/exercisesDiary'
import exercises from '../fixtures/exercises'

test('Should set default state',()=>{
    const state = exercisesDiaryReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('Should remove an exercise by id',()=>{
    const state = exercisesDiaryReducer(exercises,{
        type:'REMOVE_EXERCISE_DIARY',
        id:exercises[1].id
    })
    expect(state).toEqual([exercises[0],exercises[2]])
})

test('Should not remove expenses when no id is given',()=>{
    const state = exercisesDiaryReducer(exercises,{
        type:'REMOVE_EXERCISE_DIARY'
    })
    expect(state).toEqual(exercises)
})

test('Should update the exerciseDiary state when correct data is given',()=>{
    const id = exercises[1].id
    const state = exercisesDiaryReducer(exercises,{
        type:'UPDATE_EXERCISE_DIARY',
        id,
        updates: {
            time: '30'
        }
    })
    expect(state[1]).toEqual({...exercises[1], time: '30' })
})

test('Should return exercisesDiary array if wrong edit id is given',()=>{
    const id = '-1'
    const state = exercisesDiaryReducer(exercises,{
        type:'UPDATE_EXERCISE_DIARY',
        id,
        updates: {
            time: '30'
        }
    })
    expect(state).toEqual(exercises)
})

test('Should set expenses',()=>{
    const action = {
        type:'SET_EXERCISES_DIARY',
        exercises: [exercises[1]]
    }
    const state = exercisesDiaryReducer(exercises,action)
    expect(state).toEqual([exercises[1]])
})