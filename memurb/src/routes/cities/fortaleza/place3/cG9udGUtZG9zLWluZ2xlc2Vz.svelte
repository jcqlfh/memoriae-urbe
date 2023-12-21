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
			code: 'cG9udGUtZG9zLWluZ2xlc2Vz',
			name: 'Ponte dos Ingleses',
			link: '/cities/fortaleza/place3/ponte-dos-ingleses.html',
			found: true
		}).then(() => {
			localStorage.setItem('MEMURB_PROFILE', JSON.stringify(get(profile)));
		});
	});
</script>

<h2 class="font-julius">Você encontrou!</h2>

<ul class="grid">
	<li>
		<a href="ponte-dos-ingleses.html"
			><img src="/images/pictures/fortaleza/place3/1.webp" alt="Ponte dos Ingleses" /></a
		>
	</li>
</ul>

<h4 class="font-julius">Parabéns!</h4>
