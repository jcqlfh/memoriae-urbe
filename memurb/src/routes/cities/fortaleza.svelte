<script lang="ts">
	import FortalezaContent from '../../content/cities/fortaleza/FortalezaContent.md';
	import CollapsableArticle from '../../components/CollapsableArticle.svelte';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import RedirectHandler from '../../../src/services/RedirectHandler';
	import { showFooter } from '../../../src/state/showFooter';
	import { profile } from '../../../src/state/profile';
	import type { Profile } from '../../../src/types/Profile';
	import type { Place } from '../../../src/types/Place';
	import ProfileUpdater from '../../../src/services/ProfileUpdater';

	let profileValue: Profile = { places: [] as Place[] } as Profile;
	let foundAll: boolean;

	onMount(() => {
		showFooter.update((value) => ({
			show: true,
			path: '/home.html',
			text: 'Home'
		}));

		if (RedirectHandler.shouldRedirect(window.location.pathname)) {
			window.location.assign('/login.html');
			return;
		}
		profileValue = ProfileUpdater.getProfile();
		foundAll = !profileValue.places.find((p: any) => !p.found);
	});
</script>

<h2 class="font-julius">Fortaleza</h2>
<CollapsableArticle>
	<FortalezaContent />
</CollapsableArticle>

{#if foundAll}
	<h4 class="font-julius">PARABÉNS</h4>
	<h6>Você encontrou todos os lugares</h6>
{/if}

<ul class="grid">
	{#each profileValue.places as place}
		<li class="place shadow {place.found ? 'found' : ''}"><a href={place.link}>{place.name}</a></li>
	{/each}
</ul>
