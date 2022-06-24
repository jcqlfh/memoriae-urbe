<h2 class="font-julius">Obrigado</h2>

<article class="shadow" >
    <ThanksContent/>
</article>

<script lang="ts">
    import ThanksContent from '../content/ThanksContent.md';
    import { showHeaderFooter } from '../state/showHeaderFooter';
    showHeaderFooter.update(value => ({ show:false, path: "/home.html", text: "Home"}));
</script>