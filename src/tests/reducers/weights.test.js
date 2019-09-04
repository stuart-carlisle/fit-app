import weightsReducer from '../../reducers/weights'

test('Should set default state',()=>{
    const state = weightsReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('Should update the weights state when correct data is given',()=>{
    const weight = { weight: '99', date:'88379'}
    const state = weightsReducer([{ weight: '52', date:'88379'},{ weight: '201', date:'8837879'}],{
        type:'UPDATE_WEIGHT',
        weight
    })
    expect(state).toEqual([{ weight: '201', date:'8837879'},{ weight: '99', date:'88379'}])
})

test('Should set weights',()=>{
    const weights = [{ weight: '99', date:'88379'},{ weight: '201', date:'8837879'}]
    const action = {
        type:'SET_WEIGHTS_DIARY',
        weights: weights
    }
    const state = weightsReducer([],action)
    expect(state).toEqual(weights)
})