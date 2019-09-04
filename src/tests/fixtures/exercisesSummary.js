import moment from 'moment'

export default [{
    id:'1',
    description:'RUNNING',
    type:'Cardiovascular',
    energy:'122',
    time:'195',
    diaryDate:moment(0).subtract(4,'days').valueOf(),
    lastUsed:moment(0).subtract(4,'days').valueOf() 
},{
    id:'2',
    description:'JUMPING',
    type:'Strength',
    energy:'29',
    time:'90',
    diaryDate:moment(0).valueOf(),
    lastUsed:moment(0).valueOf()
},{
    id:'3',
    description:'HOPPING',
    type:'Cardiovascular',
    energy:'87',
    time:'13',
    diaryDate:moment(0).valueOf(),
    lastUsed:moment(0).valueOf()  
}]