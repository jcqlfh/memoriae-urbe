<article class="shadow" >
    <div class={`content ${collapsed ? 'collapsed' : ''}`}>
        <slot></slot>
    </div>
    <div class="collapseButtonArea"><Button icon size="small" on:click={() => collapsed = !collapsed }>
        {#if (collapsed)}
            <Icon path={mdiChevronDoubleDown}></Icon>
        {:else}
            <Icon path={mdiChevronDoubleUp}></Icon>
        {/if}

    </Button></div>
  </article>

  <script lang="ts">
    import { Button, Icon } from 'svelte-materialify';
    import { mdiChevronDoubleDown, mdiChevronDoubleUp } from '@mdi/js';
    var collapsed = true;
  </script>