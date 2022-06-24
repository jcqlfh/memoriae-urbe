
<h2 class="font-julius">Pista do Lugar #1</h2>

<article>
    <Clue/>
</article>

<script lang="ts">
    import Clue from '../../../../content/cities/fortaleza/place1/Clue.md';
    import { showHeaderFooter } from '../../../../state/showHeaderFooter';
    showHeaderFooter.update(value => ({ show:true, path: "/cities/fortaleza.html", text: "Fortaleza"}));
</script>