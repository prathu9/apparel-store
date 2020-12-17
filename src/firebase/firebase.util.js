import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCqvgQeyddXQPPP3JJIbiZyvizRGof_qss",
    authDomain: "apparel-store-db-def38.firebaseapp.com",
    projectId: "apparel-store-db-def38",
    storageBucket: "apparel-store-db-def38.appspot.com",
    messagingSenderId: "1001337954024",
    appId: "1:1001337954024:web:517016c253e0710a49735d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;