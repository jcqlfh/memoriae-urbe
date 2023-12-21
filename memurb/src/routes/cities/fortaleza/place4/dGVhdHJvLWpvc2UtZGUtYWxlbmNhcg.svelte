<script lang="ts">
	import { onMount } from 'svelte';
	import ProfileUpdater from '../../../../../src/services/ProfileUpdater';
	import RedirectHandler from '../../../../../src/services/RedirectHandler';
	import { showFooter } from '../../../../../src/state/showFooter';
	import { profile } from '../../../../../src/state/profile';
	import { get } from 'svelte/store';

	onMount(() => {
		showFooter.update((value) => ({
			show: true,
			path: '/cities/fortaleza.html',
			text: 'Fortaleza'
		}));

		if (RedirectHandler.shouldRedirect(window.location.origin)) {
			window.location.assign('/login.html');
			return;
		}
		ProfileUpdater.updatePlace({
			code: 'dGVhdHJvLWpvc2UtZGUtYWxlbmNhcg',
			name: 'Teatro José de Alencar',
			link: '/cities/fortaleza/place4/teatro-jose-de-alencar.html',
			found: true
		}).then(() => {
			localStorage.setItem('MEMURB_PROFILE', JSON.stringify(get(profile)));
		});
	});
</script>

<h2 class="font-julius">Você encontrou!</h2>

<ul class="grid">
	<li>
		<a href="teatro-jose-de-alencar.html"
			><img src="/images/pictures/fortaleza/place4/1.webp" alt="Teatro José de Alencar" /></a
		>
	</li>
</ul>

<h4 class="font-julius">Parabéns!</h4>
