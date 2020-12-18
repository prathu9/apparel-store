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



export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log("Error while creating user", error);
        }
    }

    return userRef; 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;