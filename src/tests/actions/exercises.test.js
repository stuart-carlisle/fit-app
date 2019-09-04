import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  addExercisePrivate,
  startAddExercisePrivate,
  addExerciseDiary,
  startAddExerciseDiary,
  setExercisesPublic,
  setExercisesPrivate,
  startSetExercisesPrivate,
  setExercisesDiary,
  startSetExercisesDiary,
  updateExercisePrivate,
  startUpdateExercisePrivate,
  updateExerciseDiary,
  startUpdateExerciseDiary,
  removeExerciseDiary,
  startRemoveExerciseDiary
} from '../../actions/exercises'
import exercises from '../fixtures/exercises'
import { database } from '../../firebase/firebase'

const uid = 'thisismytestuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

let exercisesDataPrivCompare = []
let exercisesDataDiaryCompare = [];

beforeEach((done) => { //sets up fixtures data in firebase to fetch
  const exercisesDataPriv = {}
  const exercisesDataDiary = {};
  let n=0
  exercises.forEach(({ id, description, type, energy, time, diaryDate, lastUsed}) => {
    exercisesDataPriv[id] = { description, type, energy, time, lastUsed }
    exercisesDataDiary[id] = { description, type, energy, time, diaryDate }
    exercisesDataPrivCompare[n] = { id, description, type, energy, time, lastUsed }
    exercisesDataDiaryCompare[n] = { id, description, type, energy, time, diaryDate }
    n = n+1
  })
  database.ref(`users/${uid}/exercises`).set(exercisesDataPriv)
  .then(() =>  database.ref(`users/${uid}/diary/exercises`).set(exercisesDataDiary))
  .then(() => done())
})

/////
test('should setup set public exercise action object with provided values', () => {
  const action = setExercisesPublic(exercises)
  expect(action).toEqual({
    type: 'SET_EXERCISES_PUBLIC',
    exercisesPublic: exercises
  })
})
/////
test('should setup set private exercise action object with provided values', () => {
  const action = setExercisesPrivate(exercises)
  expect(action).toEqual({
    type: 'SET_EXERCISES_PRIVATE',
    exercisesPrivate: exercises
  })
})
//////
test('should setup add private exercise action object with provided values', () => {
  const action = addExercisePrivate(exercises[2])
  expect(action).toEqual({
    type: 'ADD_EXERCISE_PRIVATE',
    exercise: exercises[2]
  })
})
/////
test('should fetch the private exercises from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetExercisesPrivate()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXERCISES_PRIVATE',
      exercisesPrivate: exercisesDataPrivCompare
    })
    done()
  })
})
//////
test('should set the diary exercise action object with provided values', () => {
  const action = setExercisesDiary(exercises)
  expect(action).toEqual({
    type: 'SET_EXERCISES_DIARY',
    exercises: exercises
  })
})
//////

test('should fetch diary exercises from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetExercisesDiary()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXERCISES_DIARY',
      exercises: exercisesDataDiaryCompare
    })
    done()
  })
})

//////
test('should add exercise to private database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const exerciseData = {
    description:'RUNNING',
    type:'Cardiovascular',
    energy:'122',
    time:'195',
    lastUsed:1000
  }

  store.dispatch(startAddExercisePrivate(exerciseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXERCISE_PRIVATE',
      exercise: {
        id: expect.any(String),
        ...exerciseData
      }
    })

    return database.ref(`users/${uid}/exercises/${actions[0].exercise.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(exerciseData)
    done()
  })
})
//////
test('should setup add diary exercise action object with provided values', () => {
  const action = addExerciseDiary(exercises[1])
  expect(action).toEqual({
    type: 'ADD_EXERCISE_DIARY',
    exercise: exercises[1]
  })
})
///////
test('should add exercise to diary database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const exerciseData = {
    description:'RUNNING',
    type:'Cardiovascular',
    energy:'122',
    time:'195',
    diaryDate:1000
  }

  store.dispatch(startAddExerciseDiary(exerciseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXERCISE_DIARY',
      exercise: {
        id: expect.any(String),
        ...exerciseData
      }
    })

    return database.ref(`users/${uid}/diary/exercises/${actions[0].exercise.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(exerciseData)
    done()
  })
})
//////
test('should setup update private exercise action object', () => {
  const action = updateExercisePrivate('123abc', { time: '54' })
  expect(action).toEqual({
    type: 'UPDATE_EXERCISE_PRIVATE',
    id: '123abc',
    updates: {
      time: '54'
    }
  })
})
//////
test('should private update exercise from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = exercises[0].id
  const updates = { time: '34' }
  store.dispatch(startUpdateExercisePrivate(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'UPDATE_EXERCISE_PRIVATE',
      id,
      updates
    })
    return database.ref(`users/${uid}/exercises/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().time).toBe(updates.time)
    done()
  })
})
///////
test('should setup update diary exercise action object', () => {
  const action = updateExerciseDiary('123abc', { time: '54' })
  expect(action).toEqual({
    type: 'UPDATE_EXERCISE_DIARY',
    id: '123abc',
    updates: {
      time: '54'
    }
  })
})
//////
test('should update diary exercise from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = exercises[0].id
  const updates = { time: '34' }
  store.dispatch(startUpdateExerciseDiary(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'UPDATE_EXERCISE_DIARY',
      id,
      updates
    })
    return database.ref(`users/${uid}/diary/exercises/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().time).toBe(updates.time)
    done()
  })
})
//////
test('should setup remove diary exercise action object', () => {
  const action = removeExerciseDiary({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXERCISE_DIARY',
    id: '123abc'
  })
})
///////
test('should remove diary exercise from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = exercises[2].id;
  store.dispatch(startRemoveExerciseDiary({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXERCISE_DIARY',
      id
    });
    return database.ref(`users/${uid}/diary/exercises/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});