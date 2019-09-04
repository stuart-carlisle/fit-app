import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import foodsPublicReducer from '../reducers/foodsPublic'
import foodsPrivateReducer from '../reducers/foodsPrivate'
import exercisesPublicReducer from '../reducers/exercisesPublic'
import exercisesPrivateReducer from '../reducers/exercisesPrivate'
import foodsDiaryReducer from '../reducers/foodsDiary'
import exercisesDiaryReducer from '../reducers/exercisesDiary'
import filtersReducer from '../reducers/filters'
import targetsReducer from '../reducers/targets'
import weightsReducer from '../reducers/weights'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      foodsPublic: foodsPublicReducer,
      foodsPrivate: foodsPrivateReducer,
      exercisesPublic: exercisesPublicReducer,
      exercisesPrivate: exercisesPrivateReducer,
      foodsDiary: foodsDiaryReducer,
      exercisesDiary: exercisesDiaryReducer,
      filters: filtersReducer,
      targets: targetsReducer,
      weights: weightsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
