import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAX0jJysXoJmdqPaCJZQkLL7k5caFnQ86g',
    authDomain: 'chat-71fb7.firebaseapp.com',
    projectId: 'chat-71fb7',
    storageBucket: 'chat-71fb7.appspot.com',
    messagingSenderId: '816063796381',
    appId: '1:816063796381:web:c9ef47f6440e4bca75b074',
    measurementId: 'G-LD9W880SDY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
