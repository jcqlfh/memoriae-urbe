<h2 class='font-julius'>OOPS!!</h2>
<h6>Hummm parece que temos uma problema</h6>


<script lang="ts">
    import { showHeaderFooter } from '../state/showHeaderFooter';
    showHeaderFooter.update(value => ({ show:false, path: "/home.html", text: "Home"}));
</script>