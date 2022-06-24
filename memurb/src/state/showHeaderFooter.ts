import { writable } from 'svelte/store';

export const showHeaderFooter = writable({ show:true, path: "/home.html", text: "Home"});