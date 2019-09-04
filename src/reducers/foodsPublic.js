// Public Foods Reducer

const foodsPublicReducerDefaultState = [];

export default (state = foodsPublicReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FOODS_PUBLIC':
        return [
          ...action.foodsPublic
        ]
    default:
      return state;
  }
};
