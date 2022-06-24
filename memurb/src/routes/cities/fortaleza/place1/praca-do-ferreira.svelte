<h2 class="font-julius">Praça do Ferreira</h2>

<CollapsableArticle>
    <Place/>
</CollapsableArticle>

<script lang="ts">
    import CollapsableArticle from '../../../../components/CollapsableArticle.svelte';
    import Place from '../../../../content/cities/fortaleza/place1/Place.md';
    import { showHeaderFooter } from '../../../../state/showHeaderFooter';
    showHeaderFooter.update(value => ({ show:true, path: "/cities/fortaleza.html", text: "Fortaleza"}));
</script>