<h2 class="font-julius">Fortaleza</h2>
<CollapsableArticle>
    <FortalezaContent/>
</CollapsableArticle>

{#if foundAll}
    <h4 class="font-julius">PARABÉNS</h4>
    <h6>Você encontrou todos os lugares</h6>
{/if}

<ul class="grid">
    {#each profile.places as place }
        <li class="place shadow {place.found ? 'found' : ''}"><a href="{place.link}">{place.name}</a></li>
    {/each}
</ul>
<script lang="ts">
    import FortalezaContent from '../../content/cities/fortaleza/FortalezaContent.md';
    import CollapsableArticle from '../../components/CollapsableArticle.svelte';
    import firebase from '../../services/Firebase';
    import { onMount } from 'svelte';
    
    let profile : any = {places:[]};
    let foundAll = false;

    onMount(() => {
        profile = JSON.parse(localStorage.getItem("MEMURB_PROFILE") ?? "{}");

        var places = profile.places;

        if(!places)
        {
            profile = {...profile, places: [
                { name: "Lugar #1", link: "/cities/fortaleza/place1/clue.html", found: false},
                { name: "Lugar #2", link: "/cities/fortaleza/place2/clue.html", found: false},
                { name: "Lugar #3", link: "/cities/fortaleza/place3/clue.html", found: false},
                { name: "Lugar #4", link: "/cities/fortaleza/place4/clue.html", found: false}
            ]};

            firebase.setProfile(firebase.db, profile);
            localStorage.setItem("MEMURB_PROFILE", JSON.stringify(profile));
        }

        foundAll = !places.find(p => !p.found);


    });
</script>