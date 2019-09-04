
// SET_DATE_FILTER
export const setDateFilter = (date) => ({
  type: 'SET_DATE_FILTER',
  date
})

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_ALPHABETICAL
export const sortByAlphabetical = () => ({
  type: 'SORT_BY_ALPHABETICAL'
});

// SET_REFERENCE_DATABASE_TO_PUBLIC
export const setReferenceDatabaseToPublic = () => ({
  type: 'SET_REFERENCE_DATABASE_TO_PUBLIC'
})

// SET_REFERENCE_DATABASE_TO_PRIVATE
export const setReferenceDatabaseToPrivate = () => ({
  type: 'SET_REFERENCE_DATABASE_TO_PRIVATE'
})

// SET_CHART_TYPE
export const setChartType = (chartType) => ({
  type: 'SET_CHART_TYPE',
  chartType
})

// SET_MEAL_FILTER
export const setMealFilter = (meal) => ({
  type: 'SET_MEAL_FILTER',
  meal
})

