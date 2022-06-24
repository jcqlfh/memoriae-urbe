<MaterialApp>
    <div class="container">
        <div class="header">
            <Header showMenu={showValue}/>
        </div>
        <div class="main">
            <slot></slot>
        </div>
        <div class="footer">
            <Footer showLink={showValue}/>
        </div>
    </div>
</MaterialApp>

<HowToPlay active={showHowToValue}/>
<script lang="ts">
    import '../styles/app.scss'
    import { MaterialApp } from 'svelte-materialify';
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import HowToPlay from "../components/HowToPlay.svelte";
    import { showHowToPlay } from '../state/showHowToPlay';
    import { showHeaderFooter } from '../state/showHeaderFooter';
    import { onMount } from 'svelte';
    import firebase from '../services/Firebase'; 
    import  {KJUR, b64utoutf8} from "jsrsasign";

    let showValue:boolean;
    let showHowToValue:boolean;

    onMount(() => {
        showHeaderFooter.subscribe(value => {
		    showValue = value;
        });
        showHowToPlay.subscribe(value => {
            showHowToValue = value;
        });
        
        let user = localStorage.getItem('MEMURB_USER');
        let locationRedirect = 
            (window.location.pathname != '/login.html') && 
            (window.location.pathname != '/thanks.html') && 
            (window.location.pathname != '/index.html') && 
            (window.location.pathname != '/');
        if(!user && locationRedirect)
            window.location.assign('/');
    });

    async function handleCredentialResponse(CredentialResponse: any) {
        try {
            var cred = CredentialResponse.credential;
            var payload: any = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(cred.split(".")[1]));
            var user = await firebase.getProfile(firebase.db, payload?.email);
            if (!user)
                user = await firebase.setProfile(firebase.db, payload);
            
            updateStorage(user); 
            window.location.assign('/home.html'); 
        } catch { 
            console.log("erro ao logar"); 
        } 
    } 
    
    function updateStorage(profile: any) { 
        localStorage.setItem("MEMURB_USER", profile); 
    }
</script>
