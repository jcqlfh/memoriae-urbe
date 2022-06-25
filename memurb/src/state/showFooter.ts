import { writable } from 'svelte/store';

export const showFooter = writable({ show:true, path: "/home.html", text: "Home"});