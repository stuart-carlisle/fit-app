import moment from 'moment'

export default {
        date:moment(0).startOf('day'),
        text: '',
        sortBy: 'date',
        referenceDatabase: 'private',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
}

export const altFilters = {
    date:moment(0).add(4,'days').startOf('day'),
    text: '',
    sortBy: 'alphabetical',
    referenceDatabase: 'public',
    chartType: {
        chart: 'weight-tracker', 
        option: 'week'
    },
    meal: 'lunch'
}