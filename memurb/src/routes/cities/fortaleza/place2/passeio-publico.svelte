<script lang="ts">
	import CollapsableArticle from '../../../../components/CollapsableArticle.svelte';
	import Place from '../../../../content/cities/fortaleza/place2/Place.md';
	import { showFooter } from '../../../../state/showFooter';
	showFooter.update((value) => ({ show: true, path: '/cities/fortaleza', text: 'Fortaleza' }));
</script>

<h2 class="font-julius">Passeio Público</h2>

<CollapsableArticle>
	<Place />
</CollapsableArticle>
