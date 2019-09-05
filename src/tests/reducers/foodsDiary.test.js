import foodsDiaryReducer from '../../reducers/foodsDiary'
import foods from '../fixtures/foods'

test('Should set default state',()=>{
    const state = foodsDiaryReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('Should remove an food by id',()=>{
    const state = foodsDiaryReducer(foods,{
        type:'REMOVE_FOOD_DIARY',
        id:foods[1].id
    })
    expect(state).toEqual([foods[0],foods[2]])
})

test('Should not remove expenses when no id is given',()=>{
    const state = foodsDiaryReducer(foods,{
        type:'REMOVE_FOOD_DIARY'
    })
    expect(state).toEqual(foods)
})

test('Should update the foodDiary state when correct data is given',()=>{
    const id = foods[1].id
    const state = foodsDiaryReducer(foods,{
        type:'UPDATE_FOOD_DIARY',
        id,
        updates: {
            numberOfServings:'3'
        }
    })
    expect(state[1]).toEqual({ 
        ...foods[1],
        numberOfServings:'3'  
    })
})

test('Should return foodsDiary array if wrong edit id is given',()=>{
    const id = '-1'
    const state = foodsDiaryReducer(foods,{
        type:'UPDATE_FOOD_DIARY',
        id,
        updates: {
            numberOfServings: '30'
        }
    })
    expect(state).toEqual(foods)
})

test('Should set foodsDiary',()=>{
    const action = {
        type:'SET_FOODS_DIARY',
        foods: [foods[1]]
    }
    const state = foodsDiaryReducer(foods,action)
    expect(state).toEqual([foods[1]])
})

test('Should add food to Diary',()=>{
    const action = {
        type:'ADD_FOOD_DIARY',
        food: foods[1]
    }
    const state = foodsDiaryReducer([],action)
    expect(state).toEqual([foods[1]])
})