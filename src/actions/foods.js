import { database } from '../firebase/firebase'

//SET_FOODS_PUBLIC
export const setFoodsPublic = (foodsPublic) => ({
    type:'SET_FOODS_PUBLIC',
    foodsPublic
  })


//SET_FOODS_PRIVATE
export const setFoodsPrivate = (foodsPrivate) => ({
  type:'SET_FOODS_PRIVATE',
  foodsPrivate
})

export const startSetFoodsPrivate = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/foods`).once('value').then((snapshot)=>{
        const foodsPrivate = []
        snapshot.forEach((childSnapshot)=>{
          foodsPrivate.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setFoodsPrivate(foodsPrivate))
    })  
  }
}

//SET_FOODS_DIARY
export const setFoodsDiary = (foods) => ({
  type:'SET_FOODS_DIARY',
  foods
})

export const startSetFoodsDiary = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/diary/foods`).once('value').then((snapshot)=>{
        const foods = []
        snapshot.forEach((childSnapshot)=>{
          foods.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setFoodsDiary(foods))
    })  
  }
}

// ADD_FOOD PRIVATE
export const addFoodPrivate = (food) => ({
  type: 'ADD_FOOD_PRIVATE',
  food
});

export const startAddFoodPrivate = (foodData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const { description, serving, nutrition, lastUsed } = foodData
    const food = { description, serving, nutrition, lastUsed }
   
    return database.ref(`users/${uid}/foods`).push(food).then((ref)=>{
      dispatch(addFoodPrivate({
        id:ref.key,
        ...food
      }))
    })
  }
}

// ADD_FOOD_DIARY
export const addFoodDiary = (food) => ({
  type: 'ADD_FOOD_DIARY',
  food
});

export const startAddFoodDiary = (foodData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {description, serving, nutrition, diaryDate, numberOfServings, meal} = foodData
    const food = { description, serving, nutrition, diaryDate, numberOfServings, meal}
   
    return database.ref(`users/${uid}/diary/foods`).push(food).then((ref)=>{
      dispatch(addFoodDiary({
        id: ref.key,
        ...food
      }))
    })
  }
}

// UPDATE_FOOD_PRIVATE
export const updateFoodPrivate = (id, updates) => ({
  type: 'UPDATE_FOOD_PRIVATE',
  id,
  updates
});

export const startUpdateFoodPrivate = (id, updates) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/foods/${id}`).update(updates).then(()=>{
      dispatch(updateFoodPrivate(id,updates))
    })
  }
}

// REMOVE_FOOD_DIARY
export const removeFoodDiary = ({ id } = {}) => ({
  type: 'REMOVE_FOOD_DIARY',
  id
});


export const startRemoveFoodDiary = ({ id } = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/diary/foods/${id}`).remove().then(()=>{
      dispatch(removeFoodDiary({id}))
    })
  }
}

// UPDATE_FOOD_DIARY
export const updateFoodDiary = (id, updates) => ({
  type: 'UPDATE_FOOD_DIARY',
  id,
  updates
});

export const startUpdateFoodDiary = (id, updates) => {
  return (dispatch,getState) => {
  const uid = getState().auth.uid
  return database.ref(`users/${uid}/diary/foods/${id}`).update(updates).then(()=>{
    dispatch(updateFoodDiary(id,updates))
  })
}}

// UPDATE_TARGETS
export const updateTargets = (updates) => ({
  type: 'UPDATE_TARGETS',
  updates
})

export const startUpdateTargets = (updates) => {
  return (dispatch,getState) => {
  const uid = getState().auth.uid
  return database.ref(`users/${uid}/diary/targets`).update(updates).then(()=>{
    dispatch(updateTargets(updates))
  })
}}

// SET_TARGETS
export const setTargets = (targets) => ({
  type:'SET_TARGETS',
  targets
})

export const startSetTargets = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/diary/targets`).once('value').then((snapshot)=>{
      const targets = snapshot.val()
      if(!!targets){
      dispatch(setTargets(targets))
      }
  })  
}
}

// UPDATE_WEIGHT
export const updateWeight = (weight) => ({
  type: 'UPDATE_WEIGHT',
  weight
})

export const startUpdateWeight = (weight,date) => {
  return (dispatch,getState) => {
  const uid = getState().auth.uid
  return database.ref(`users/${uid}/diary/weights/${date}`).set({weight})
  .then(()=>{
    dispatch(updateWeight({weight: weight, date: date}))
  })
}}

//SET_WEIGHTS_DIARY
export const setWeightsDiary = (weights) => ({
  type:'SET_WEIGHTS_DIARY',
  weights
})

export const startSetWeightsDiary = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/diary/weights`).once('value').then((snapshot)=>{
        const weights = []
        snapshot.forEach((childSnapshot)=>{
          weights.push({
            ...childSnapshot.val(),
            date:childSnapshot.key
          })
        })
        dispatch(setWeightsDiary(weights))
    })  
  }
}