<script lang="ts">
	import '../styles/app.scss';
	import { MaterialApp } from 'svelte-materialify';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import HowToPlay from '../components/HowToPlay.svelte';
	import { showHowToPlay } from '../state/showHowToPlay';
	import { showFooter } from '../state/showFooter';
	import { showHeader } from '../state/showHeader';
	import { onMount } from 'svelte';

	let showHeaderValue: boolean;
	let showFooterValue: boolean;
	let path: string;
	let text: string;
	let showHowToValue: boolean;

	onMount(() => {
		showHeader.subscribe((value) => {
			showHeaderValue = value;
		});

		showFooter.subscribe((value) => {
			showFooterValue = value.show;
			path = value.path;
			text = value.text;
		});

		showHowToPlay.subscribe((value) => {
			showHowToValue = value;
		});

		let user = localStorage.getItem('MEMURB_PROFILE');
		let locationRedirect =
			window.location.pathname != '/login.html' &&
			window.location.pathname != '/thanks.html' &&
			window.location.pathname != '/nggyu.html' &&
			window.location.pathname != '/index.html' &&
			window.location.pathname != '/';
		if (!user && locationRedirect) window.location.assign('/');
	});
</script>

<MaterialApp>
	<div class="container">
		<div class="header">
			<Header showMenu={showHeaderValue} />
		</div>
		<div class="main">
			<slot />
		</div>
		<div class="footer">
			<Footer showLink={showFooterValue} {path} {text} />
		</div>
	</div>
</MaterialApp>

<HowToPlay active={showHowToValue} />
