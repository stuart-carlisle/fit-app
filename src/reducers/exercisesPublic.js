// Public Exercises Reducer

const exercisesPublicReducerDefaultState = [];

export default (state = exercisesPublicReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_EXERCISES_PUBLIC':
        return [
          ...action.exercisesPublic
        ]
    default:
      return state;
  }
};
