import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import type { Profile } from 'src/types/Profile';

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firebase = {
	db: getFirestore(app),
	getProfiles: async function (db: Firestore) {
		const profilesCol = collection(db, 'profiles');
		const profilesSnapshot = await getDocs(profilesCol);
		const profilesList = profilesSnapshot.docs.map((doc) => doc.data());
		return profilesList;
	},
	getProfile: async function (db: Firestore, email: string) {
		return (await this.getProfiles(db)).find((p) => p.user.email == email);
	},
	setProfile: async function (db: Firestore, payload: Profile): Promise<Profile> {
		setDoc(doc(db, 'profiles', payload.user.email), payload)
			.then((doc) => Promise.resolve(doc))
			.catch((e) => Promise.reject(e));
		return payload;
	}
};

export default firebase;
