import foodsPrivateReducer from '../../reducers/foodsPrivate'
import foods from '../fixtures/foods'

test('Should add an food to the foodPrivate array', ()=>{
    const food = foods[1]
    const state = foodsPrivateReducer(foods,{
        type:'ADD_FOOD_PRIVATE',
        food
    })
    expect(state).toEqual([...foods,food])
})

test('Should set default state',()=>{
    const state = foodsPrivateReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('Should remove an food by id',()=>{
    const state = foodsPrivateReducer(foods,{
        type:'REMOVE_FOOD_PRIVATE',
        id:foods[1].id
    })
    expect(state).toEqual([foods[0],foods[2]])
})

test('Should not remove expenses when no id is given',()=>{
    const state = foodsPrivateReducer(foods,{
        type:'REMOVE_FOOD_PRIVATE'
    })
    expect(state).toEqual(foods)
})

test('Should update the foodPrivate state when correct data is given',()=>{
    const id = foods[1].id
    const state = foodsPrivateReducer(foods,{
        type:'UPDATE_FOOD_PRIVATE',
        id,
        updates: {
            numberOfServings: '3'
        }
    })
    expect(state[1]).toEqual({...foods[1], numberOfServings: '3' })
})

test('Should return foodsPrivate array if wrong edit id is given',()=>{
    const id = '-1'
    const state = foodsPrivateReducer(foods,{
        type:'UPDATE_FOOD_PRIVATE',
        id,
        updates: {
            numberOfServings: '3'
        }
    })
    expect(state).toEqual(foods)
})

test('Should set foods',()=>{
    const action = {
        type:'SET_FOODS_PRIVATE',
        foodsPrivate: [foods[1]]
    }
    const state = foodsPrivateReducer(foods,action)
    expect(state).toEqual([foods[1]])
})