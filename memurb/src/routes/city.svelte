<h2 class="font-julius">{map?.title}</h2>
<CollapsableArticle>
    <svelte:component this={Content}></svelte:component>
</CollapsableArticle>
<ul class="grid">
    {#each map?.places ?? [] as place, index}
        
    
    <li class="place shadow"><a href="/cities/{map.key}/place{index+1}/clue.html">Lugar #{index+1}</a></li>
    {/each}
</ul>


<script lang="ts">
    import FortalezaContent from '../content/cities/fortaleza/FortalezaContent.md';
    import UnknownContent from '../content/cities/UnknownContent.md';
    import CollapsableArticle from '../components/CollapsableArticle.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import type { SvelteComponent } from 'svelte/internal';

    const citiesMap = {
        for:{
            key: 'fortaleza', 
            title: 'Fortaleza',
            places: [{},{},{},{}]
        },
        unk:{
            key: 'unknown', 
            title: 'Cidade Desconhecida',
            places: []
        }
    };

    type CityKey = keyof typeof citiesMap;
    type City = {
            key: string;
            title: string;
            places: []
        }

    let Content: SvelteComponent

    let map: City;

    onMount(() => {
        let city = ($page.url.searchParams.get('v') ?? 'unk') as CityKey;
        
        if (!citiesMap[city])
            city = 'unk';

        map = citiesMap[city] as City;

        switch(city)
        {
            case 'for': 
                Content = FortalezaContent;
                break;
            default:
                Content = UnknownContent;
                break;
        }
    });

</script>