<AppBar>
  <div slot="icon">
    <Button fab depressed>
      <Avatar tile><img src="/images/logo.png" alt="Logo"/></Avatar>
    </Button>
  </div>
  <span slot="title" class="font-julius"><strong>Memoriae Urbe</strong></span>
  <div style="flex-grow:1" />
  {#if (showMenu)}
    <Menu right>
      <div slot="activator">
        <Button fab depressed>
          <Icon path={mdiDotsVertical} />
        </Button>
      </div>
      <ListItem><a href='/'>Home</a></ListItem>
      <ListItem>Como jogar</ListItem>
      <ListItem>Sair</ListItem>
    </Menu>
  {/if}
  
</AppBar>

<script lang="ts">
    import { AppBar, Button, Icon, Menu, ListItem, Avatar } from 'svelte-materialify';
    import { mdiDotsVertical } from '@mdi/js';
    
    export let showMenu = false;
</script>
