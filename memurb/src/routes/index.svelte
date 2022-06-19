<h2 class="font-julius">Bem-vindos</h2>
<article class="shadow" >
  <WelcomeContent/>
</article>
<div class="button-area">
  <div class="flex-column-center">
    <Button icon size="large" class="red" on:click={() => document.location='/thanks.html'}>
      <img class="icon-button filter-white" src="/images/placeholder.svg" alt="button"/>
    </Button>
    <span>Rejeitar</span>
  </div>
  <div class="flex-column-center">
    <Button icon size="large" class="green" on:click={() => document.location='/login.html'}>
      <img class="icon-button filter-white" src="/images/placeholder.svg" alt="button"/>
    </Button>
    <span>Aceitar</span>
  </div>
</div>

<script lang="ts">
  import WelcomeContent from '../content/WelcomeContent.md';
  import { Button } from 'svelte-materialify';
  import { show } from './show';
  show.update(value => false);
</script>