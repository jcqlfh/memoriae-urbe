<script lang="ts">
	import CollapsableArticle from '../../../../components/CollapsableArticle.svelte';
	import Place from '../../../../content/cities/fortaleza/place4/Place.md';
	import { showFooter } from '../../../../state/showFooter';
	showFooter.update((value) => ({ show: true, path: '/cities/fortaleza.html', text: 'Fortaleza' }));
</script>

<h2 class="font-julius">Teatro José de Alencar</h2>

<CollapsableArticle>
	<Place />
</CollapsableArticle>
