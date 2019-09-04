// weights Reducer

const weightsReducerDefaultState = []

export default (state = weightsReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_WEIGHT':
        const filteredState = state.filter(({ date }) => date !== action.weight.date)
        return [...filteredState,action.weight]
    case 'SET_WEIGHTS_DIARY':
      return action.weights
    default:
      return state;
  }
};
