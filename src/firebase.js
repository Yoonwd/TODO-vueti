import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyANLn_yqz5Vqzps4HPfA3M4LSHFxf9dbGw",
  authDomain: "todo-vueti.firebaseapp.com",
  databaseURL: "https://todo-vueti.firebaseio.com",
  projectId: "todo-vueti",
  storageBucket: "todo-vueti.appspot.com",
  messagingSenderId: "458556162400"
};
firebase.initializeApp(config);

const db = firebase.firestore(); //firestore initialize

db.settings({ timestampsInSnapshots: true }); //false 면 콘솔에서 경고 메세지

export default db;