import exercisesPublicReducer from '../../reducers/exercisesPublic'
import exercises from '../fixtures/exercises'


test('Should set default state',()=>{
    const state = exercisesPublicReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('Should set exercises',()=>{
    const action = {
        type:'SET_EXERCISES_PUBLIC',
        exercisesPublic: [exercises[1]]
    }
    const state = exercisesPublicReducer(exercises,action)
    expect(state).toEqual([exercises[1]])
})