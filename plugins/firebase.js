// import firebase from 'firebase/app'
// import '@firebase/auth'
// import 'firebase/firestore'
// // import store from '~/store/index'
// require('firebase/firestore')
// // Firebase Config
// // const firebaseConfig = {
// //   apiKey: 'AIzaSyCC7v18RaUB2W-FdxH5nh0NXFzQsv1EnJs',
// //   authDomain: 'fir-account-ae112.firebaseapp.com',
// //   databaseURL: 'https://fir-account-ae112.firebaseio.com',
// //   projectId: 'fir-account-ae112',
// //   storageBucket: 'fir-account-ae112.appspot.com',
// //   messagingSenderId: '916219746291',
// //   appId: '1:916219746291:web:71eb440ec484892e0ea48'
// // }

// const firebaseConfig = {
//   apiKey: 'AIzaSyAS4IiCRRd9z-7N7TdnZS_rJlGSFUEJX_o',
//   authDomain: 'naviclearn.firebaseapp.com',
//   databaseURL: 'https://naviclearn.firebaseio.com',
//   projectId: 'naviclearn',
//   storageBucket: 'naviclearn.appspot.com',
//   messagingSenderId: '903488565140',
//   appId: '1:903488565140:web:7449be8fab6e41f6b7a981',
//   measurementId: 'G-REH5R796MH'
// }
// // Initialize Firebase
// // eslint-disable-next-line no-unused-vars
// const app = null
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// } else {
//   firebase.app() // if already initialized, use that one
// }
// // firebase.auth().onAuthStateChanged(user => {
// //   store.dispatch('fetchUser', user)
// // })
// export const db = firebase.firestore()
// export const auth = firebase.auth()
// export default firebase

// // //Import the required methods
// // import { initializeApp } from 'firebase/app'
// // import { getAuth } from 'firebase/auth'

// // //The config we copied from firebase(Replace with your config)
// // const firebaseConfig = {
// //   apiKey: 'AIzaSyAS4IiCRRd9z-7N7TdnZS_rJlGSFUEJX_o',
// //   authDomain: 'naviclearn.firebaseapp.com',
// //   databaseURL: 'https://naviclearn.firebaseio.com',
// //   projectId: 'naviclearn',
// //   storageBucket: 'naviclearn.appspot.com',
// //   messagingSenderId: '903488565140',
// //   appId: '1:903488565140:web:7449be8fab6e41f6b7a981',
// //   measurementId: 'G-REH5R796MH'
// // }
// // //initialize the firebase app
// // initializeApp(firebaseConfig)

// // //initialize firebase auth
// // const auth = getAuth()

// // //export the auth object
// // export { auth }

import firebase from 'firebase/app' // Your web app's Firebase configuration
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAS4IiCRRd9z-7N7TdnZS_rJlGSFUEJX_o',
  authDomain: 'naviclearn.firebaseapp.com',
  databaseURL: 'https://naviclearn.firebaseio.com',
  projectId: 'naviclearn',
  storageBucket: 'naviclearn.appspot.com',
  messagingSenderId: '903488565140',
  appId: '1:903488565140:web:7449be8fab6e41f6b7a981',
  measurementId: 'G-REH5R796MH'
}
// Initialize Firebase
// let app = null
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase
