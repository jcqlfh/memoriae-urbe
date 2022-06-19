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
    let showValue:boolean;
    let showHowToValue:boolean;

	showHeaderFooter.subscribe(value => {
		showValue = value;
	});
	showHowToPlay.subscribe(value => {
		showHowToValue = value;
	});

</script>
