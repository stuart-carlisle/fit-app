import configureMockStore from 'redux-mock-store'
import moment from 'moment'
import thunk from 'redux-thunk'
import {
  addFoodPrivate,
  startAddFoodPrivate,
  addFoodDiary,
  startAddFoodDiary,
  setFoodsPublic,
  setFoodsPrivate,
  startSetFoodsPrivate,
  setFoodsDiary,
  startSetFoodsDiary,
  updateFoodPrivate,
  startUpdateFoodPrivate,
  updateFoodDiary,
  startUpdateFoodDiary,
  removeFoodDiary,
  startRemoveFoodDiary,
  updateTargets,
  startUpdateTargets,
  setTargets,
  startSetTargets,
  updateWeight,
  startUpdateWeight,
  setWeightsDiary,
  startSetWeightsDiary
} from '../../actions/foods'
import foods from '../fixtures/foods'
import targets from '../fixtures/targets'
import weights from '../fixtures/weights'
import { database } from '../../firebase/firebase'

const uid = 'thisismytestuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

let foodsDataPrivCompare = []
let foodsDataDiaryCompare = []

beforeEach((done) => { //sets up fixtures data in firebase to fetch
  const foodsDataPriv = {}
  const foodsDataDiary = {}
  let n=0
  
  foods.forEach(({ id, description, serving, nutrition, diaryDate, lastUsed, meal, numberOfServings }) => {
    foodsDataPriv[id] = { description, serving, nutrition, lastUsed }
    foodsDataDiary[id] = { description, serving, nutrition, diaryDate, meal, numberOfServings }
    foodsDataPrivCompare[n] = { id, description, serving, nutrition, lastUsed }
    foodsDataDiaryCompare[n] = { id, description, serving, nutrition, diaryDate, meal, numberOfServings }
    n = n+1
  })

  database.ref(`users/${uid}/foods`).set(foodsDataPriv)
  .then(() =>  database.ref(`users/${uid}/diary/foods`).set(foodsDataDiary))
  .then(() =>  database.ref(`users/${uid}/diary/targets`).set(targets))
  .then(() =>  database.ref(`users/${uid}/diary/weights`).set(weights))
  .then(() => done())
})

/////
test('should setup set public food action object with provided values', () => {
  const action = setFoodsPublic(foods)
  expect(action).toEqual({
    type: 'SET_FOODS_PUBLIC',
    foodsPublic: foods
  })
})
/////
test('should setup set private food action object with provided values', () => {
  const action = setFoodsPrivate(foods)
  expect(action).toEqual({
    type: 'SET_FOODS_PRIVATE',
    foodsPrivate: foods
  })
})
//////
test('should setup add private food action object with provided values', () => {
  const action = addFoodPrivate(foods[2])
  expect(action).toEqual({
    type: 'ADD_FOOD_PRIVATE',
    food: foods[2]
  })
})
/////
test('should fetch the private foods from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetFoodsPrivate()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_FOODS_PRIVATE',
      foodsPrivate: foodsDataPrivCompare
    })
    done()
  })
})
//////
test('should set the diary food action object with provided values', () => {
  const action = setFoodsDiary(foods)
  expect(action).toEqual({
    type: 'SET_FOODS_DIARY',
    foods: foods
  })
})
//////

test('should fetch diary foods from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetFoodsDiary()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_FOODS_DIARY',
      foods: foodsDataDiaryCompare
    })
    done()
  })
})

//////
test('should add food to private database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const foodData = {
    description:'BEANS',
    nutrition:{
        energy: {amount:'670'},
        totalCarbs: {amount:'', unit:''},
        sugars: {amount:'', unit:''},
        protein: {amount:'', unit:''},
        totalFat: {amount:'', unit:''},
        satFat: {amount:'', unit:''}
      },
    serving:{
        servingSize: {size:'300',unit:'g'},
        servingsPerContainer: ''
      },
    lastUsed:1000
  }

  store.dispatch(startAddFoodPrivate(foodData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_FOOD_PRIVATE',
      food: {
        id: expect.any(String),
        ...foodData
      }
    })

    return database.ref(`users/${uid}/foods/${actions[0].food.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(foodData)
    done()
  })
})
//////
test('should setup add diary food action object with provided values', () => {
  const action = addFoodDiary(foods[1])
  expect(action).toEqual({
    type: 'ADD_FOOD_DIARY',
    food: foods[1]
  })
})
///////
test('should add food to diary database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const foodData = {
    description:'BEANS',
    nutrition:{
        energy: {amount:'670'},
        totalCarbs: {amount:'', unit:''},
        sugars: {amount:'', unit:''},
        protein: {amount:'', unit:''},
        totalFat: {amount:'', unit:''},
        satFat: {amount:'', unit:''}
      },
    serving:{
        servingSize: {size:'300',unit:'g'},
        servingsPerContainer: ''
      },
    numberOfServings:'2',
    diaryDate:1000,
    meal:'breakfast'
  }

  store.dispatch(startAddFoodDiary(foodData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_FOOD_DIARY',
      food: {
        id: expect.any(String),
        ...foodData
      }
    })

    return database.ref(`users/${uid}/diary/foods/${actions[0].food.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(foodData)
    done()
  })
})
//////
test('should setup update private food action object', () => {
  const action = updateFoodPrivate('123abc', { time: '54' })
  expect(action).toEqual({
    type: 'UPDATE_FOOD_PRIVATE',
    id: '123abc',
    updates: {
      time: '54'
    }
  })
})
//////
test('should private update food from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = foods[0].id
  const updates = { time: '34' }
  store.dispatch(startUpdateFoodPrivate(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'UPDATE_FOOD_PRIVATE',
      id,
      updates
    })
    return database.ref(`users/${uid}/foods/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().time).toBe(updates.time)
    done()
  })
})
///////
test('should setup update diary food action object', () => {
  const action = updateFoodDiary('123abc', { numberOfServings: '4' })
  expect(action).toEqual({
    type: 'UPDATE_FOOD_DIARY',
    id: '123abc',
    updates: {
      numberOfServings: '4'
    }
  })
})
//////
test('should update diary food from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = foods[0].id
  const updates = {
    numberOfServings: '4'
  } 
  store.dispatch(startUpdateFoodDiary(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'UPDATE_FOOD_DIARY',
      id,
      updates
    })
    return database.ref(`users/${uid}/diary/foods/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().numberOfServings).toBe(updates.numberOfServings)
    done()
  })
})
//////
test('should setup remove diary food action object', () => {
  const action = removeFoodDiary({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_FOOD_DIARY',
    id: '123abc'
  })
})
///////
test('should remove diary food from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = foods[2].id;
  store.dispatch(startRemoveFoodDiary({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_FOOD_DIARY',
      id
    });
    return database.ref(`users/${uid}/diary/foods/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});
/////
test('should setup add diary food action object with provided values', () => {
  const action = addFoodDiary(foods[1])
  expect(action).toEqual({
    type: 'ADD_FOOD_DIARY',
    food: foods[1]
  })
})
///////
test('should setup update target action object', () => {
  const action = updateTargets({ 
    dailyCarbsTarget:'200',
    dailyEnergyTarget:'2000',
    dailyFatTarget:'4'
})
  expect(action).toEqual({
    type: 'UPDATE_TARGETS',
    updates: {
          dailyCarbsTarget:'200',
          dailyEnergyTarget:'2000',
          dailyFatTarget:'4'
    }    
  })
})
//////
test('should update targets from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const updates = { dailyCarbsTarget: '300', dailyEnergyTarget:'4000'}
  store.dispatch(startUpdateTargets(updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'UPDATE_TARGETS',
      updates
    })
    return database.ref(`users/${uid}/diary/targets`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual({...updates, dailyFatTarget: '4'})
    done()
  })
})
///////
test('should setup set targets action object with provided values', () => {
  const action = setTargets(targets)
  expect(action).toEqual({
    type: 'SET_TARGETS',
    targets: targets
  })
})
//////
test('should fetch targets from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetTargets()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_TARGETS',
      targets: targets
    })
    done()
  })
})
///////
test('should setup update weight action object', () => {
  const action = updateWeight({ 
      weight:'400',
      date:'767867864'
})
  expect(action).toEqual({
    type: 'UPDATE_WEIGHT',
    weight: {
      weight:'400',
      date:'767867864' 
    }    
  })
})
////
test('should update weights in firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const weightUpdate = '140'
  const dateUpdate = moment(0).add(4, 'days').valueOf()
  store.dispatch(startUpdateWeight(weightUpdate, dateUpdate)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'UPDATE_WEIGHT',
      weight: {
        weight: weightUpdate, 
        date: dateUpdate
      }
    })
    return database.ref(`users/${uid}/diary/weights`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual({
      ...weights,
      [dateUpdate]:{weight:weightUpdate}
    })
    done()
  })
})
/////
test('should setup set weights diary action object with provided values', () => {
  const setWeightsCheck = {weight:'89', date:'6565658757'}
  const action = setWeightsDiary(setWeightsCheck)
  expect(action).toEqual({
    type: 'SET_WEIGHTS_DIARY',
    weights: setWeightsCheck
  })
})
//////
test('should fetch weights from firebase', (done) => {
  const date1 = (moment(0).subtract(4,'days').valueOf()).toString()
  const date2 = (moment(0).valueOf()).toString()
  const weights = [
    {weight: '100', date: date1},
    {weight: '95', date: date2}
  ]
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetWeightsDiary()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_WEIGHTS_DIARY',
      weights: weights
    })
    done()
  })
})
///////