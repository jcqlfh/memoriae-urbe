<article class="shadow" >
    <div class={`content ${collapsed ? 'collapsed' : ''}`}>
        <slot></slot>
    </div>
    <div class="collapseButtonArea"><Button text size="small" on:click={() => collapsed = !collapsed }>
        {#if (collapsed)}
            mais <Icon path={mdiChevronDoubleDown}></Icon>
        {:else}
            menos <Icon path={mdiChevronDoubleUp}></Icon>
        {/if}

    </Button></div>
  </article>

  <script lang="ts">
    import { Button, Icon } from 'svelte-materialify';
    import { mdiChevronDoubleDown, mdiChevronDoubleUp } from '@mdi/js';
    var collapsed = true;
  </script>