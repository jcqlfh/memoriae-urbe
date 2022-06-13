<AppBar>
  <div slot="icon">
    {#if (showLink)}
    <Button fab depressed>
      <Icon path={'/logo.png'} />
      <a href="{path}">{text}</a>
    </Button>
    {/if}
  </div>
</AppBar>

<script lang="ts">
    import { AppBar, Button, Icon, Menu, ListItem, MaterialApp } from 'svelte-materialify';

    export let showLink = false;
    export let path = "/";
    export let text = "Voltar";
</script>
