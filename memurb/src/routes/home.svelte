<script lang="ts">
	import { showFooter } from '../state/showFooter';
	import { onMount } from 'svelte';
	showFooter.update((value) => ({ show: false, path: '/home.html', text: 'Home' }));

	let foundAll = false;

	onMount(() => {
		var profile = JSON.parse(localStorage.getItem('MEMURB_PROFILE') ?? '{}');

		var places = profile.places;

		if (places) foundAll = !places.find((p: any) => !p.found);
	});
</script>

<h2 class="font-julius">Cidades</h2>
<ul>
	<li class="city shadow {foundAll ? 'found' : ''}">
		<a href="/cities/fortaleza.html">Fortaleza</a>
	</li>
</ul>
