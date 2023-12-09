<script lang="ts">
	import CollapsableArticle from '../../../../components/CollapsableArticle.svelte';
	import Place from '../../../../content/cities/fortaleza/place1/Place.md';
	import { showFooter } from '../../../../state/showFooter';
	showFooter.update((value) => ({ show: true, path: '/cities/fortaleza.html', text: 'Fortaleza' }));
</script>

<h2 class="font-julius">Praça do Ferreira</h2>

<CollapsableArticle>
	<Place />
</CollapsableArticle>
