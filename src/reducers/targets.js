// targets Reducer

const targetsReducerDefaultState = {
  dailyEnergyTarget: '2400',
  dailyCarbsTarget: '400',
  dailyFatTarget: '70'
}

export default (state = targetsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DAILY_ENERGY_TARGET':
      return{
        ...state,
        dailyEnergyTarget: action.dailyEnergyTarget
      }
    case 'UPDATE_TARGETS':
      return{
        ...state,
        ...action.updates
      }
    case 'SET_TARGETS':
      return action.targets
    default:
      return state;
  }
};
