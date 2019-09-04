// Diary Foods Reducer

const foodsDiaryReducerDefaultState = [];

export default (state = foodsDiaryReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_FOOD_DIARY':
      const food = {
        id: action.id,
        ...action.food
      }
      return [
        ...state,
        food
      ]
    case 'REMOVE_FOOD_DIARY':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_FOOD_DIARY':
      return state.map((food) => {
        if (food.id === action.id) {
          return {
            ...food,
            ...action.updates
          };
        } else {
          return food;
        };
      });
    case 'SET_FOODS_DIARY':
      return action.foods
    default:
      return state
  }
}