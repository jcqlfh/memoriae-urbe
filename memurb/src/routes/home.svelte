<h2 class="font-julius">Cidades</h2>
<ul>
    <li class="city shadow"><a href="/cities/fortaleza.html">Fortaleza</a></li>
</ul>

<script lang="ts">
    import { showHeaderFooter } from '../state/showHeaderFooter';
    showHeaderFooter.update(value => ({ show:false, path: "/home.html", text: "Home"}));

</script>