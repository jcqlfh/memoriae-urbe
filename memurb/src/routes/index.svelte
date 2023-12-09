<script lang="ts">
	import WelcomeContent from '../content/WelcomeContent.md';
	import { Button } from 'svelte-materialify';
	import { showFooter } from '../state/showFooter';
	import { showHeader } from '../state/showHeader';
	import { onMount } from 'svelte';

	onMount(() => {
		showFooter.update((value) => ({ show: false, path: '/home', text: 'Home' }));
		showHeader.update((value) => false);

		let user = localStorage.getItem('MEMURB_PROFILE');
		if (user) window.location.assign('/home');
	});
</script>

<h2 class="font-julius">Bem-vindos</h2>
<article class="shadow">
	<WelcomeContent />
</article>
<div class="button-area">
	<div class="flex-column-center">
		<Button icon size="large" class="red" on:click={() => (document.location = '/thanks')}>
			<img class="icon-button filter-white" src="/images/placeholder.svg" alt="button" />
		</Button>
		<span>Rejeitar</span>
	</div>
	<div class="flex-column-center">
		<Button icon size="large" class="green" on:click={() => (document.location = '/login')}>
			<img class="icon-button filter-white" src="/images/placeholder.svg" alt="button" />
		</Button>
		<span>Aceitar</span>
	</div>
</div>
