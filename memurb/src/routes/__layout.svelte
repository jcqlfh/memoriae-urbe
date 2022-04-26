    <div class="header">
        <Header/>
    </div>
    <div class="main">
        <slot></slot>
    </div>
    <div class="footer">
        <Footer/>
    </div>

<script lang="ts">
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
</script>
