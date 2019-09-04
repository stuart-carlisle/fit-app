// Private Exercises Reducer

const exercisesPrivateReducerDefaultState = [];

export default (state = exercisesPrivateReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE_PRIVATE':
      return [
        ...state,
        action.exercise
      ];
    case 'REMOVE_EXERCISE_PRIVATE':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_EXERCISE_PRIVATE':
      return state.map((exercise) => {
        if (exercise.id === action.id) {
          return {
            ...exercise,
            ...action.updates
          };
        } else {
          return exercise;
        };
      });
    case 'SET_EXERCISES_PRIVATE':
      return action.exercisesPrivate
    default:
      return state;
  }
};
