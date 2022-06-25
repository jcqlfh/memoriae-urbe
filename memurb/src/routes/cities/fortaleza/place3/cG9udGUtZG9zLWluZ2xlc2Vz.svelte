<h2 class="font-julius">Você encontrou!</h2>

<ul class="grid">
    <li><a href="ponte-dos-ingleses.html"><img src="/images/pictures/fortaleza/place3/1.webp" alt="Ponte dos Ingleses"/></a></li>
</ul>

<h4 class="font-julius">Parabéns!</h4>

<script lang="ts">
    import { onMount } from 'svelte';
    import firebase from '../../../../services/Firebase'
    import { showFooter } from '../../../../state/showFooter';
    showFooter.update(value => ({ show:true, path: "/cities/fortaleza.html", text: "Fortaleza"}));
    onMount(() => {
        let profile = JSON.parse(localStorage.getItem("MEMURB_PROFILE") ?? "{}");

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

        profile.places[2] = {
            name: "Ponte dos Ingleses",
            link: "/cities/fortaleza/place3/ponte-dos-ingleses.html",
            found: true
        }

        firebase.setProfile(firebase.db, profile);
        localStorage.setItem("MEMURB_PROFILE", JSON.stringify(profile));
    });
</script>