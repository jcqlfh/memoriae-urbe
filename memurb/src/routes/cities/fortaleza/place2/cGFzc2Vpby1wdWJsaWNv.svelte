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
			name: 'Passeio Público',
			link: '/cities/fortaleza/place2/passeio-publico.html',
			found: true
		});
	});
</script>

<h2 class="font-julius">Você encontrou!</h2>

<ul class="grid">
	<li>
		<a href="passeio-publico.html"
			><img src="/images/pictures/fortaleza/place2/1.webp" alt="Passeio Público" /></a
		>
	</li>
</ul>

<h4 class="font-julius">Parabéns!</h4>
