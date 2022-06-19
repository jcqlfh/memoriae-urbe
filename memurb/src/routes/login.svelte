<h2 class="font-julius">Login</h2>

<article class="shadow" >
    <NewUserContent/>
</article>

    <div id="g_id_onload"
        data-client_id="230694410812-o7kia0262bsslhb2vh418s4jhbtqp02l.apps.googleusercontent.com"
        data-callback="handleCredentialResponse">
    </div>
    <div class="g_id_signin" data-type="standard" data-theme="outline" data-size="large"></div>
<script lang="ts">
    import NewUserContent from '../content/NewUserContent.md';
    import { showHeaderFooter } from '../state/showHeaderFooter';
    showHeaderFooter.update(value => false);
</script>