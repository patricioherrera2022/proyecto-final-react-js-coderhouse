import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBU-8rKr-EpHrYisDwUa1qGkLgbN0bI1CU",
  authDomain: "proyectoreactjspatricioherrera.firebaseapp.com",
  projectId: "proyectoreactjspatricioherrera",
  storageBucket: "proyectoreactjspatricioherrera.appspot.com",
  messagingSenderId: "571334975057",
  appId: "1:571334975057:web:65c3583ccd4443f1aaa270"
};


const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}