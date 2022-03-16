import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCQ14FePi46Oob8QOBGwbvXw26ZbxhpkqM',
  authDomain: 'woygaa-7794d.firebaseapp.com',
  projectId: 'woygaa-7794d',
  storageBucket: 'woygaa-7794d.appspot.com',
  messagingSenderId: '904775384183',
  appId: '1:904775384183:web:837a73ce34779786dcda72',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
