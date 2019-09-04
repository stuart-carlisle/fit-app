// Diary Foods Reducer

const exercisesDiaryReducerDefaultState = [];

export default (state = exercisesDiaryReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE_DIARY':
      const exercise = {
        id: action.id,
        ...action.exercise
      }
      return [
        ...state,
        exercise
      ]
    case 'REMOVE_EXERCISE_DIARY':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_EXERCISE_DIARY':
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
    case 'SET_EXERCISES_DIARY':
      return action.exercises
    default:
      return state
  }
}