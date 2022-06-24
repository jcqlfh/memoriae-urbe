<h2 class="font-julius">Você encontrou!</h2>

<ul class="grid">
    <li><a href="praca-do-ferreira"><img src="/images/pictures/fortaleza/place1/1.webp" alt="Praça do Ferreira"/></a></li>
</ul>

<h4 class="font-julius">Parabéns!</h4>

<script lang="ts">
    import { onMount } from 'svelte';
    import firebase from '../../../../services/Firebase'

    onMount(() => {
        let profile = JSON.parse(localStorage.getItem("MEMURB_USER") ?? "{}");

        var places = profile.places;

        if(!places)
        {
            profile = {...profile, places: [
                { name: "Lugar #1", link: "/cities/fortaleza/place1/clue.html", found: false},
                { name: "Lugar #2", link: "/cities/fortaleza/place2/clue.html", found: false},
                { name: "Lugar #3", link: "/cities/fortaleza/place3/clue.html", found: false},
                { name: "Lugar #4", link: "/cities/fortaleza/place4/clue.html", found: false}
            ]};
        }

        profile.places[0] = {
            name: "Praça do Ferreira",
            link: "/cities/fortaleza/place1/praca-do-ferreira.html",
            found: true
        }

        firebase.setProfile(firebase.db, profile);
        localStorage.setItem("MEMURB_USER", JSON.stringify(profile));
    });
</script>