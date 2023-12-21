<script lang="ts">
	import { onMount } from 'svelte';
	import ProfileUpdater from '../../../../../src/services/ProfileUpdater';
	import RedirectHandler from '../../../../../src/services/RedirectHandler';
	import { showFooter } from '../../../../../src/state/showFooter';

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
			name: 'Praça do Ferreira',
			link: '/cities/fortaleza/place1/praca-do-ferreira.html',
			found: true
		});
	});
</script>

<h2 class="font-julius">Você encontrou!</h2>

<ul class="grid">
	<li>
		<a href="praca-do-ferreira.html"
			><img src="/images/pictures/fortaleza/place1/1.webp" alt="Praça do Ferreira" /></a
		>
	</li>
</ul>

<h4 class="font-julius">Parabéns!</h4>
