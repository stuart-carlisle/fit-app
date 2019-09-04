import { database } from '../firebase/firebase'

//SET_EXERCISES_PUBLIC
export const setExercisesPublic = (exercisesPublic) => ({
    type:'SET_EXERCISES_PUBLIC',
    exercisesPublic
  })


//SET_EXERCISES_PRIVATE
export const setExercisesPrivate = (exercisesPrivate) => ({
  type:'SET_EXERCISES_PRIVATE',
  exercisesPrivate
})

export const startSetExercisesPrivate = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/exercises`).once('value').then((snapshot)=>{
        const exercisesPrivate = []
        snapshot.forEach((childSnapshot)=>{
          exercisesPrivate.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setExercisesPrivate(exercisesPrivate))
    })  
  }
}

//SET_EXERCISES_DIARY
export const setExercisesDiary = (exercises) => ({
  type:'SET_EXERCISES_DIARY',
  exercises
})

export const startSetExercisesDiary = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/diary/exercises`).once('value').then((snapshot)=>{
        const exercises = []
        snapshot.forEach((childSnapshot)=>{
          exercises.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setExercisesDiary(exercises))
    })  
  }
}

// ADD_EXERCISE PRIVATE
export const addExercisePrivate = (exercise) => ({
  type: 'ADD_EXERCISE_PRIVATE',
  exercise
});

export const startAddExercisePrivate = (exerciseData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const { description, type, energy, time, lastUsed } = exerciseData
    const exercise = { description, type, energy, time, lastUsed }
   
    return database.ref(`users/${uid}/exercises`).push(exercise).then((ref)=>{
      dispatch(addExercisePrivate({
        id:ref.key,
        ...exercise
      }))
    })
  }
}

// ADD_EXERCISE_DIARY
export const addExerciseDiary = (exercise) => ({
  type: 'ADD_EXERCISE_DIARY',
  exercise
});

export const startAddExerciseDiary = (exerciseData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const { description, type, energy, time, diaryDate } = exerciseData
    const exercise = { description, type, energy, time, diaryDate }
   
    return database.ref(`users/${uid}/diary/exercises`).push(exercise).then((ref)=>{
      dispatch(addExerciseDiary({
        id: ref.key,
        ...exercise
      }))
    })
  }
}
        
// UPDATE_EXERCISE_PRIVATE
export const updateExercisePrivate = (id, updates) => ({
  type: 'UPDATE_EXERCISE_PRIVATE',
  id,
  updates
});

export const startUpdateExercisePrivate = (id, updates) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/exercises/${id}`).update(updates).then(()=>{
      dispatch(updateExercisePrivate(id,updates))
    })
  }
}

// REMOVE_EXERCISE_DIARY
export const removeExerciseDiary = ({ id } = {}) => ({
  type: 'REMOVE_EXERCISE_DIARY',
  id
});


export const startRemoveExerciseDiary = ({ id } = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/diary/exercises/${id}`).remove().then(()=>{
      dispatch(removeExerciseDiary({id}))
    })
  }
}

// UPDATE_EXERCISE_DIARY
export const updateExerciseDiary = (id, updates) => ({
  type: 'UPDATE_EXERCISE_DIARY',
  id,
  updates
});

export const startUpdateExerciseDiary = (id, updates) => {
  return (dispatch,getState) => {
  const uid = getState().auth.uid
  return database.ref(`users/${uid}/diary/exercises/${id}`).update(updates).then(()=>{
    dispatch(updateExerciseDiary(id,updates))
  })
}}