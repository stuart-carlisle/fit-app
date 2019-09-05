import { database, firebase, googleAuthProvider, twitterAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const startLoginGoogle = () => {
  return () => {
    return firebase.auth().signInWithRedirect(googleAuthProvider);
  };
};

export const startLoginTwitter = () => {
  return () => {
    return firebase.auth().signInWithRedirect(twitterAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}

export const setLoginCount = (logins) => ({
  type: 'SET_LOGIN_COUNT',
  logins
})

export const startSetLoginCount = () => {
    return (dispatch,getState) => {
      const uid = getState().auth.uid
      return database.ref(`users/${uid}/diary/loginData`).once('value').then((snapshot)=>{
        const logins = !!snapshot.val() ? snapshot.val() : 0
        database.ref(`users/${uid}/diary/loginData`).set(logins+1).then(()=>{
          dispatch(setLoginCount(logins+1))
        })  
      })  
    }
}

export const setTargetsToCompleted = () => ({
  type: 'SET_TARGETS_TO_COMPLETED'
})

export const setDiaryToCompleted = () => ({
  type: 'SET_DIARY_TO_COMPLETED'
})

export const setTargetsToSubmitted = () => ({
  type: 'SET_TARGETS_TO_SUBMITTED'
})