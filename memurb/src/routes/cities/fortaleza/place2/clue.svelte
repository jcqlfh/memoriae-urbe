<script lang="ts">
	import Clue from '../../../../content/cities/fortaleza/place2/Clue.md';
	import { showFooter } from '../../../../state/showFooter';
	showFooter.update((value) => ({ show: true, path: '/cities/fortaleza', text: 'Fortaleza' }));
</script>

<h2 class="font-julius">Pista do Lugar #2</h2>

<article>
	<Clue />
</article>
