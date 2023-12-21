import type { Profile } from 'src/types/Profile';
import { writable } from 'svelte/store';

export const profile = writable({
	user: { email: '', name: '' },
	places: [
		{ name: 'Lugar #1', link: '/cities/fortaleza/place1/clue.html', found: false },
		{ name: 'Lugar #2', link: '/cities/fortaleza/place2/clue.html', found: false },
		{ name: 'Lugar #3', link: '/cities/fortaleza/place3/clue.html', found: false },
		{ name: 'Lugar #4', link: '/cities/fortaleza/place4/clue.html', found: false }
	]
} as Profile);
