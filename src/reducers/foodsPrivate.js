// Private Foods Reducer

const foodsPrivateReducerDefaultState = [];

export default (state = foodsPrivateReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_FOOD_PRIVATE':
      return [
        ...state,
        action.food
      ];
    case 'REMOVE_FOOD_PRIVATE':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_FOOD_PRIVATE':
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
    case 'SET_FOODS_PRIVATE':
      return action.foodsPrivate
    default:
      return state;
  }
};
