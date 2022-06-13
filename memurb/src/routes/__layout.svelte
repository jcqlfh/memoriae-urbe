<MaterialApp>
    <div class="header">
        <Header/>
    </div>
    <div class="main">
        <slot></slot>
    </div>
    <div class="footer">
        <Footer/>
    </div>
</MaterialApp>

<script lang="ts">
    import '../styles/app.scss'
    import { MaterialApp } from 'svelte-materialify';
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
</script>
