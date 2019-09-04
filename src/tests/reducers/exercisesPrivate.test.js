import exercisesPrivateReducer from '../../reducers/exercisesPrivate'
import exercises from '../fixtures/exercises'

test('Should add an exercise to the exercisePrivate array', ()=>{
    const exercise = exercises[1]
    const state = exercisesPrivateReducer(exercises,{
        type:'ADD_EXERCISE_PRIVATE',
        exercise
    })
    expect(state).toEqual([...exercises,exercise])
})

test('Should set default state',()=>{
    const state = exercisesPrivateReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('Should remove an exercise by id',()=>{
    const state = exercisesPrivateReducer(exercises,{
        type:'REMOVE_EXERCISE_PRIVATE',
        id:exercises[1].id
    })
    expect(state).toEqual([exercises[0],exercises[2]])
})

test('Should not remove expenses when no id is given',()=>{
    const state = exercisesPrivateReducer(exercises,{
        type:'REMOVE_EXERCISE_PRIVATE'
    })
    expect(state).toEqual(exercises)
})

test('Should update the exercisePrivate state when correct data is given',()=>{
    const id = exercises[1].id
    const state = exercisesPrivateReducer(exercises,{
        type:'UPDATE_EXERCISE_PRIVATE',
        id,
        updates: {
            time: '30'
        }
    })
    expect(state[1]).toEqual({...exercises[1], time: '30' })
})

test('Should return exercisesPrivate array if wrong edit id is given',()=>{
    const id = '-1'
    const state = exercisesPrivateReducer(exercises,{
        type:'UPDATE_EXERCISE_PRIVATE',
        id,
        updates: {
            time: '30'
        }
    })
    expect(state).toEqual(exercises)
})

test('Should set exercises',()=>{
    const action = {
        type:'SET_EXERCISES_PRIVATE',
        exercisesPrivate: [exercises[1]]
    }
    const state = exercisesPrivateReducer(exercises,action)
    expect(state).toEqual([exercises[1]])
})