<svelte:head>
    <!-- Google Auth -->
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <meta name="google-signin-client_id" content="">
</svelte:head>

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
    import  {KJUR, b64utoutf8} from "jsrsasign";
    import firebase from '../services/Firebase'; 
    import { onMount } from 'svelte';

    showHeaderFooter.update(value => false);

    onMount(() => {
        globalThis.handleCredentialResponse = async function(CredentialResponse: any) {
            try {
                var cred = CredentialResponse.credential;
                var payload: any = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(cred.split(".")[1]));
                var user = await firebase.getProfile(firebase.db, payload?.email);
                if (!user)
                    user = await firebase.setProfile(firebase.db, payload);
                
                    localStorage.setItem("MEMURB_PROFILE", JSON.stringify(user));  
                window.location.assign('/home.html'); 
            } catch { 
                console.log("erro ao logar"); 
            } 
        } 
    });
</script>