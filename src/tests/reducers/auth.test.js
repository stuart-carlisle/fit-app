import authReducer from '../../reducers/auth'

test('Should return the uid when login action is sent',()=>{
    const uid = 'guyugh'
    const action = {
        type:'LOGIN',
        uid
    }
    const state = authReducer({},action)
    expect(state.uid).toBe(uid)
})

test('Should return the uid when logout action is sent',()=>{
    const uid = 'guyugh'
    const action = {
        type:'LOGOUT'
    }
    const state = authReducer({ uid:uid },action)
    expect(state).toEqual({})
})

test('Should set targets to completed ( on first log in entering targets page )',()=>{
    const action = {
        type:'SET_TARGETS_TO_COMPLETED',
        targetsCompleted: true
    }
    const state = authReducer({}, action)
    expect(state.targetsCompleted).toBe(true)
})

test('Should set diary to completed ( on first log in entering diary page )',()=>{
    const action = {
        type:'SET_DIARY_TO_COMPLETED',
        diaryCompleted: true
    }
    const state = authReducer({}, action)
    expect(state.diaryCompleted).toBe(true)
})

test('Should set targets to submitted ( on first log in submitting targets )',()=>{
    const action = {
        type:'SET_TARGETS_TO_SUBMITTED',
        targetsSubmitted: true
    }
    const state = authReducer({}, action)
    expect(state.targetsSubmitted).toBe(true)
})