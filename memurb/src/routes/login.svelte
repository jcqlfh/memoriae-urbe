<script lang="ts">
	import NewUserContent from '../content/NewUserContent.md';
	import { showFooter } from '../state/showFooter';
	import { showHeader } from '../state/showHeader';
	import { KJUR, b64utoutf8 } from 'jsrsasign';
	import firebase from '../../src/services/Firebase';
	import { onMount } from 'svelte';
	import ProfileUpdater from '../../src/services/ProfileUpdater';
	import type { Profile } from 'src/types/Profile';

	showFooter.update((value) => ({ show: false, path: '/home.html', text: 'Home' }));
	showHeader.update((value) => false);

	let load = false;

	onMount(() => {
		globalThis.handleCredentialResponse = async function (CredentialResponse: any) {
			try {
				var cred = CredentialResponse.credential;

				var payload: any = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(cred.split('.')[1]));

				var profile = await firebase.getProfile(firebase.db, payload?.email);

				if (!profile)
					profile = {
						user: { name: payload?.name, email: payload?.email }
					} as Profile;

				var promise = ProfileUpdater.updatePriofile(profile as Profile);

				if (promise) {
					promise
						.then(() => {
							localStorage.setItem('MEMURB_PROFILE', JSON.stringify(profile));

							var redirect = '/home.html';
							var redirectAfterLogin = localStorage.getItem('MEMURB_REDIRECT_AFTER_LOGIN');

							if (redirectAfterLogin) {
								localStorage.removeItem('MEMURB_REDIRECT_AFTER_LOGIN');
								redirect = redirectAfterLogin;
							}
							window.location.assign(redirect);
						})
						.catch((e) => console.log(e));
				}
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
