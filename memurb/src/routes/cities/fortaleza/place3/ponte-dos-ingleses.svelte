<h2 class="font-julius">Ponte dos ingleses</h2>

<CollapsableArticle>
    <Place/>
</CollapsableArticle>

<script lang="ts">
    import CollapsableArticle from '../../../../components/CollapsableArticle.svelte';
    import Place from '../../../../content/cities/fortaleza/place3/Place.md';
    import { showHeaderFooter } from '../../../../state/showHeaderFooter';
    showHeaderFooter.update(value => ({ show:true, path: "/cities/fortaleza.html", text: "Fortaleza"}));
</script>