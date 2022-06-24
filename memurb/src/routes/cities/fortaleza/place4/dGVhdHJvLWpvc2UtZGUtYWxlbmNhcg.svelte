<h2 class="font-julius">Você encontrou!</h2>

<ul class="grid">
    <li><a href="teatro-jose-de-alencar"><img src="/images/pictures/fortaleza/place4/1.webp" alt="Teatro José de Alencar"/></a></li>
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

        profile.places[3] = {
            name: "Teatro José de Alencar",
            link: "/cities/fortaleza/place4/teatro-jose-de-alencar.html",
            found: true
        }

        firebase.setProfile(firebase.db, profile);
        localStorage.setItem("MEMURB_USER", JSON.stringify(profile));
    });
</script>