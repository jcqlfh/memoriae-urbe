<script lang="ts">
	import { showFooter } from '../state/showFooter';
	import { showHeader } from '../state/showHeader';
	showFooter.update((value) => ({ show: false, path: '/home.html', text: 'Home' }));
	showHeader.update((value) => false);
</script>

<h2 class="font-julius">OOPS!!</h2>
<h6>Hummm parece que temos uma problema</h6>
