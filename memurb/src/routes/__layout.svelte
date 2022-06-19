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

<script lang="ts">
    import '../styles/app.scss'
    import { MaterialApp } from 'svelte-materialify';
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import { show } from './show.js';
    let showValue:boolean;

	show.subscribe(value => {
		showValue = value;
	});

</script>
