import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, doc, getDocs, setDoc } from 'firebase/firestore';

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDtzPgN4docwbxsFdYUkoZ0RGIP6ftGsZg",
    authDomain: "memoriaeurbe.firebaseapp.com",
    projectId: "memoriaeurbe",
    storageBucket: "memoriaeurbe.appspot.com",
    messagingSenderId: "271248917480",
    appId: "1:271248917480:web:5ff5e4f76286b394d61a5d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const firebase = {
    db: getFirestore(app),
    getProfiles: async function (db: Firestore) {
        const profilesCol = collection(db, 'profiles');
        const profilesSnapshot = await getDocs(profilesCol);
        const profilesList = profilesSnapshot.docs.map(doc => doc.data());
        return profilesList;
    },
    getProfile: async function (db: Firestore, email: string) {
        return (await this.getProfiles(db)).find(p => p.email == email);
    },
    setProfile: async function (db: Firestore, payload: { email: string; name: string; }) {
        await setDoc(doc(db, "profiles", payload.email), payload);
        return payload;
    }
}

export default firebase;