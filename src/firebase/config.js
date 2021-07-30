// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore' // firestoreを使いたいのでimportする
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCXeHWmYjsFYeSb7jI3NUTbak5-5ryM5xc',
  authDomain: 'health-website-c58ef.firebaseapp.com',
  projectId: 'health-website-c58ef',
  storageBucket: 'health-website-c58ef.appspot.com',
  messagingSenderId: '980880698793',
  appId: '1:980880698793:web:0379ce6408cabdfde3e8b8',
  measurementId: 'G-KLQS0G4Y18',
}

// init firebase
firebase.initializeApp(firebaseConfig) // バックエンドのfirebaseを初期化する

// init firestore service
const projectFirestore = firebase.firestore() // firebaseのサービスを初期化する
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
