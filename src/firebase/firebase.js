import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://fitapp-private.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
const primary = firebase.initializeApp(config);
const database = primary.database();

const secondaryAppConfig = {
  apiKey: process.env.FIREBASE_API_KEY2,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN2,
  databaseURL: "https://fitapp-public.firebaseio.com",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET2
}
const secondary = firebase.initializeApp(secondaryAppConfig, "secondary")
const databasePublic = secondary.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider()

// googleAuthProvider.setCustomParameters({
//   prompt: 'select_account'
// });

export { firebase, googleAuthProvider, database, databasePublic, twitterAuthProvider }



