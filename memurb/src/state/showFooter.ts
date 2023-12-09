import { writable } from 'svelte/store';

export const showFooter = writable({ show: true, path: '/home', text: 'Home' });
