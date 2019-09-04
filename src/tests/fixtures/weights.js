import moment from 'moment'

const date1 = moment(0).subtract(4,'days').valueOf()
const date2 = moment(0).valueOf()

export default{
    [date1]: {weight: '100'},
    [date2]: {weight: '95'}
}