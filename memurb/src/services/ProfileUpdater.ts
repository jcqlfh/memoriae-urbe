import type { Place } from '../types/Place';
import { profile } from '../state/profile';
import firebase from './Firebase';
import type { Profile } from 'src/types/Profile';
import { get } from 'svelte/store';

const ProfileUpdater = {
	updatePlace: function (place: Place) {
		var storedProfile = JSON.parse(localStorage.getItem('MEMURB_PROFILE') || '{}') as Profile;

		if (storedProfile.user) {
			profile.update((value) => ({
				...value,
				...storedProfile
			}));
		}

		profile.update((value) => ({
			...value,
			places: value.places.map((p) => (p.code != place.code ? p : place))
		}));

		return firebase.setProfile(firebase.db, get(profile));
	},
	updatePriofile: function (newProfile: Profile): Promise<void> {
		var storedProfile = JSON.parse(localStorage.getItem('MEMURB_PROFILE') || '{}') as Profile;

		if (storedProfile.user) {
			profile.update((value) => ({
				...value,
				...storedProfile
			}));
		}

		profile.update((value) => ({ ...value, ...newProfile }));
		return firebase.setProfile(firebase.db, get(profile));
	},
	getProfile: function () {
		var storedProfile = JSON.parse(localStorage.getItem('MEMURB_PROFILE') || '{}') as Profile;

		if (storedProfile.user) {
			profile.update((value) => ({
				...value,
				...storedProfile
			}));
		}

		return get(profile);
	}
};

export default ProfileUpdater;
