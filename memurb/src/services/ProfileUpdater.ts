import type { Place } from '../types/Place';
import { profile } from '../state/profile';
import firebase from './Firebase';
import type { Profile } from 'src/types/Profile';

const ProfileUpdater = {
	updatePlace: function (place: Place) {
		profile.update((value) => {
			var prof = {
				...value,
				places: value.places.map((p) => (p.name != place.name ? p : place))
			};

			firebase
				.setProfile(firebase.db, prof)
				.then(() => localStorage.setItem('MEMURB_PROFILE', JSON.stringify(prof)))
				.catch((e) => console.log(e));
			return prof;
		});
	},
	updatePriofile: function (newProfile: Profile) {
		profile.update((value) => {
			var prof = { ...value, ...newProfile };
			firebase
				.setProfile(firebase.db, prof)
				.then(() => localStorage.setItem('MEMURB_PROFILE', JSON.stringify(prof)))
				.catch((e) => console.log(e));
			return prof;
		});
	}
};

export default ProfileUpdater;
