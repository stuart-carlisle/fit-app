import foodsPublicReducer from '../../reducers/foodsPublic'
import foods from '../fixtures/foods'


test('Should set default state',()=>{
    const state = foodsPublicReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('Should set foods',()=>{
    const action = {
        type:'SET_FOODS_PUBLIC',
        foodsPublic: [foods[1]]
    }
    const state = foodsPublicReducer(foods,action)
    expect(state).toEqual([foods[1]])
})