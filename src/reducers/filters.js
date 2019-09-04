import moment from 'moment'

// Filters Reducer

const filtersReducerDefaultState = {
  date:moment().startOf('day'),
  text: '',
  sortBy: 'date',
  referenceDatabase: 'private',
  chartType: {
    chart: 'calorie-tracker', 
    option: 'week'
  },
  meal: 'breakfast'
}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DATE_FILTER':
      return{
        ...state,
        date: action.date
      }
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_ALPHABETICAL':
      return {
        ...state,
        sortBy: 'alphabetical'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_REFERENCE_DATABASE_TO_PUBLIC':
      return {
        ...state,
        referenceDatabase: 'public'
      }
    case 'SET_REFERENCE_DATABASE_TO_PRIVATE':
      return {
        ...state,
        referenceDatabase: 'private'
      }
    case 'SET_CHART_TYPE':
      return {
        ...state,
        chartType: action.chartType
      };
    case 'SET_MEAL_FILTER':
      return {
        ...state,
        meal: action.meal
      }
    default:
      return state;
  }
};
