<script lang="ts">
	import ThanksContent from '../content/ThanksContent.md';
	import { showFooter } from '../state/showFooter';
	import { showHeader } from '../state/showHeader';
	showFooter.update((value) => ({ show: false, path: '/home.html', text: 'Home' }));
	showHeader.update((value) => false);
</script>

<h2 class="font-julius">Obrigado</h2>

<article class="shadow">
	<ThanksContent />
</article>
