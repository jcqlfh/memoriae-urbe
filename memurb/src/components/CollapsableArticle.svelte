<script lang="ts">
	import { Button, Icon } from 'svelte-materialify';
	import { mdiChevronDoubleDown, mdiChevronDoubleUp } from '@mdi/js';
	var collapsed = true;
</script>

<article class="shadow">
	<div class={`content ${collapsed ? 'collapsed' : ''}`}>
		<slot />
	</div>
	<div class="collapseButtonArea">
		<Button text size="small" on:click={() => (collapsed = !collapsed)}>
			{#if collapsed}
				mais <Icon path={mdiChevronDoubleDown} />
			{:else}
				menos <Icon path={mdiChevronDoubleUp} />
			{/if}
		</Button>
	</div>
</article>
