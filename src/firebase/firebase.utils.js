import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/firebase-auth'

const config = {
    apiKey: "AIzaSyCfi7soCdK4AgbGhsFXrIbpRy7_rddxA4I",
    authDomain: "crwn-db-9001f.firebaseapp.com",
    projectId: "crwn-db-9001f",
    storageBucket: "crwn-db-9001f.appspot.com",
    messagingSenderId: "1018612518057",
    appId: "1:1018612518057:web:504f13335d00b1a6236db8"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); 

  if(!snapShot.exists) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);

    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;
