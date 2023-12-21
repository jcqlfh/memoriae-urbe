import type { Profile } from 'src/types/Profile';
import { writable } from 'svelte/store';

export const profile = writable({
	user: { email: '', name: '' },
	places: [
		{
			code: 'cHJhY2EtZG8tZmVycmVpcmE',
			name: 'Lugar #1',
			link: '/cities/fortaleza/place1/clue.html',
			found: false
		},
		{
			code: 'cGFzc2Vpby1wdWJsaWNv',
			name: 'Lugar #2',
			link: '/cities/fortaleza/place2/clue.html',
			found: false
		},
		{
			code: 'cG9udGUtZG9zLWluZ2xlc2Vz',
			name: 'Lugar #3',
			link: '/cities/fortaleza/place3/clue.html',
			found: false
		},
		{
			code: 'dGVhdHJvLWpvc2UtZGUtYWxlbmNhcg',
			name: 'Lugar #4',
			link: '/cities/fortaleza/place4/clue.html',
			found: false
		}
	]
} as Profile);
