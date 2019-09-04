export default (state = {
    targetsCompleted:false,
    diaryCompleted:false,
    targetsSubmitted:false
}, action) => {
    switch(action.type){
        case 'LOGIN': 
            return {
                ...state,
                uid: action.uid
            }
        case 'LOGOUT':
            return {}
        case 'SET_LOGIN_COUNT':
            return {
                ...state,
                logins: action.logins
            }
        case 'SET_TARGETS_TO_COMPLETED':
            return {
                ...state,
                targetsCompleted: true
            }
        case 'SET_DIARY_TO_COMPLETED':
            return {
                ...state,
                diaryCompleted: true
            }
        case 'SET_TARGETS_TO_SUBMITTED':
            return {
                ...state,
                targetsSubmitted: true
            }
        default:
            return state
    }
}