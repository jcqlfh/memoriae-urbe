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
    import CollapsableArticle from '../components/CollapsableArticle.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import type { SvelteComponent } from 'svelte/internal';

    const citiesMap = {
        for:{
            key: 'fortaleza', 
            title: 'Fortaleza',
            importPath: '../content/cities/fortaleza/FortalezaContent.md',
            places: [{},{},{},{}]
        },
        unk:{
            key: 'unknown', 
            title: 'Cidade Desconhecida',
            importPath: '../content/cities/UnknownContent.md',
            places: []
        }
    };

    type CityKey = keyof typeof citiesMap;
    type City = {
            key: string;
            title: string;
            importPath: string;
            places: []
        }

    let Content: SvelteComponent

    let map: City;

    onMount(() => {
        let city = ($page.url.searchParams.get('v') ?? 'unk') as CityKey;
        
        if (!citiesMap[city])
            city = 'unk';

        map = citiesMap[city] as City;

        /* @vite-ignore */
        import(map.importPath)
            .then(module => Content = module.default)
    });

</script>