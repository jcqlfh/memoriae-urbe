<script lang="ts">
	import Clue from '../../../../content/cities/fortaleza/place4/Clue.md';
	import { showFooter } from '../../../../state/showFooter';
	showFooter.update((value) => ({ show: true, path: '/cities/fortaleza.html', text: 'Fortaleza' }));
</script>

<h2 class="font-julius">Pista do Lugar #4</h2>

<article>
	<Clue />
</article>
