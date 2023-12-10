<script lang="ts">
	import NewUserContent from '../content/NewUserContent.md';
	import { showFooter } from '../state/showFooter';
	import { showHeader } from '../state/showHeader';
	import { KJUR, b64utoutf8 } from 'jsrsasign';
	import firebase from '../services/Firebase';
	import { onMount } from 'svelte';

	showFooter.update((value) => ({ show: false, path: '/home.html', text: 'Home' }));
	showHeader.update((value) => false);

	let load = false;

	onMount(() => {
		globalThis.handleCredentialResponse = async function (CredentialResponse: any) {
			try {
				var cred = CredentialResponse.credential;
				var payload: any = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(cred.split('.')[1]));
				var user = await firebase.getProfile(firebase.db, payload?.email);
				if (!user) user = await firebase.setProfile(firebase.db, payload);

				localStorage.setItem('MEMURB_PROFILE', JSON.stringify(user));
				window.location.assign('/home.html');
			} catch (exception) {
				console.log('erro ao :' + exception);
			}
		};

		load = true;
	});
</script>

<svelte:head>
	{#if load}
		<!-- Google Auth -->
		<script src="https://accounts.google.com/gsi/client" async defer></script>
	{/if}
</svelte:head>

<h2 class="font-julius">Login</h2>

<article class="shadow">
	<NewUserContent />
</article>

<div
	id="g_id_onload"
	data-client_id="681803862852-vkgkgfn4bjcm9s8ou89lvtpbiq7bm0nc.apps.googleusercontent.com"
	data-callback="handleCredentialResponse"
/>
<div class="g_id_signin" data-type="standard" data-theme="outline" data-size="large" />
