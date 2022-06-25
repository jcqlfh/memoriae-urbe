<h2 class="font-julius">Pista do Lugar #3</h2>

<article>
    <Clue/>
</article>

<script lang="ts">
    import Clue from '../../../../content/cities/fortaleza/place3/Clue.md';
    import { showFooter } from '../../../../state/showFooter';
    showFooter.update(value => ({ show:true, path: "/cities/fortaleza.html", text: "Fortaleza"}));
</script>