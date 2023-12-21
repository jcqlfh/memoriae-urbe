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
	getProfiles: function (db: Firestore): Profile[] {
		var profilesList = null;
		const profilesCol = collection(db, 'profiles');
		getDocs(profilesCol)
			.then((profilesSnapshot) => (profilesList = profilesSnapshot.docs.map((doc) => doc.data())))
			.catch((e) => {
				console.log(e);
				profilesList = [];
			});
		while (!profilesList) console.log('getting profile list');
		return profilesList;
	},
	getProfile: function (db: Firestore, email: string) {
		this.getProfiles(db).find((p) => p.user.email == email);
	},
	setProfile: function (db: Firestore, payload: Profile) {
		var newProf = null;
		setDoc(doc(db, 'profiles', payload.user.email.replace('@', '_at_')), payload)
			.then((profile) => (newProf = profile))
			.catch((e) => {
				console.log(e);
				newProf = {};
			});
		while (!newProf) console.log('setting profile');
		return newProf;
	}
};

export default firebase;
