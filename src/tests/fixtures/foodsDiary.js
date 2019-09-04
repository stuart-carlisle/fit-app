import moment from 'moment'

export default [{
    id:'1',
    description:'BEANS',
    nutrition:{
        energy: {amount:'670'},
        totalCarbs: {amount:'', unit:''},
        sugars: {amount:'', unit:''},
        protein: {amount:'', unit:''},
        totalFat: {amount:'', unit:''},
        satFat: {amount:'', unit:''}
      },
    serving:{
        servingSize: {size:'300',unit:'g'},
        servingsPerContainer: ''
      },
    diaryDate:moment(0).subtract(4,'days').valueOf(),
    lastUsed:moment(0).subtract(4,'days').valueOf(),
    meal:'breakfast',
    numberOfServings:'1'
},{
    id:'2',
    description:'CHEESE ON TOAST',
    nutrition:{
        energy: {amount:'340'},
        totalCarbs: {amount:'34', unit:'g'},
        sugars: {amount:'3', unit:'g'},
        protein: {amount:'2', unit:'g'},
        totalFat: {amount:'1.2', unit:'g'},
        satFat: {amount:'0.5', unit:'g'}
      },
    serving:{
        servingSize: {size:'200',unit:'g'},
        servingsPerContainer: '1'
      },
    diaryDate:moment(0).valueOf(),
    lastUsed:moment(0).valueOf(),
    meal:'lunch',
    numberOfServings:'1'  
},{
    id:'3',
    description:'CREAM',
    nutrition:{
        energy: {amount:'234'},
        totalCarbs: {amount:'', unit:''},
        sugars: {amount:'', unit:''},
        protein: {amount:'', unit:''},
        totalFat: {amount:'', unit:''},
        satFat: {amount:'', unit:''}
      },
    serving:{
        servingSize: {size:'40',unit:'g'},
        servingsPerContainer: '2'
      },
    diaryDate:moment(0).subtract(4,'days').valueOf(),
    lastUsed:moment(0).subtract(4,'days').valueOf(),
    meal:'breakfast',
    numberOfServings:'2'  
}]


    