<TopAppBar
    variant="static"
    dense
    color="primary"
>
    <Row>
    <Section>
        <Icon component={Img} style="height: 24px;" src="/logo.png" />        
        <Title class="julius">{@html "<strong>Memoriae Urbe</strong>"}</Title>
    </Section>
    {#if (showMenu)}
      <Section align="end" toolbar>
        <IconButton class="material-icons" on:click={() => menu.setOpen(true)} aria-label="Menu">menu</IconButton>
        <div class={Object.keys(anchorClasses).join(' ')}
              use:Anchor={{
                  addClass: (className) => {
                  if (!anchorClasses[className]) {
                      anchorClasses[className] = true;
                  }
                  },
                  removeClass: (className) => {
                  if (anchorClasses[className]) {
                      delete anchorClasses[className];
                      anchorClasses = anchorClasses;
                  }
                  },
              }}
              bind:this={anchor}
        ></div>
      </Section>
    {/if}
    </Row>
</TopAppBar>
<Menu
    bind:this={menu}
    anchor={false}
    bind:anchorElement={anchor}
    anchorCorner="BOTTOM_LEFT">
    <List>
      <Item>
        <Text>{@html "<a href='/'>Home</a>"}</Text>
      </Item>
      <Item>
        <Text>Como jogar</Text>
      </Item>
      <Separator />
      <Item>
        <Text>Sair</Text>
      </Item>
    </List>
</Menu>

<script lang="ts">
    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import { Icon } from '@smui/common';
    import { Img } from '@smui/common/elements';
    import Menu from '@smui/menu';
    import { Anchor } from '@smui/menu-surface';
    import type { MenuComponentDev } from '@smui/menu';
    import List, { Item, Separator, Text } from '@smui/list';

    
    let menu: MenuComponentDev;
    let anchor: HTMLDivElement;
    let anchorClasses: { [k: string]: boolean } = {};

    export let showMenu = false;
</script>
