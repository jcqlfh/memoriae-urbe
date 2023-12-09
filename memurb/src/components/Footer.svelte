<script lang="ts">
	import { Footer, Button, Icon } from 'svelte-materialify';
	import { mdiChevronLeft } from '@mdi/js';

	export let showLink = false;
	export let path = '';
	export let text = 'Voltar';
</script>

<Footer>
	{#if showLink}
		<Button depressed>
			<Icon path={mdiChevronLeft} />
			<a href={path}>{text}</a>
		</Button>
	{/if}
</Footer>
