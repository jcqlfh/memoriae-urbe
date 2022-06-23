<Footer>
  {#if (showLink)}
    <Button depressed>
      <Icon path="{mdiChevronLeft}" />
      <a href="javascript:history.back()">{text}</a>
    </Button>
    {/if}
</Footer>

<script lang="ts">
    import { Footer , Button, Icon } from 'svelte-materialify';
    import { mdiChevronLeft } from '@mdi/js';

    export let showLink = false;
    export let text = "Voltar";
</script>
