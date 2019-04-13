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