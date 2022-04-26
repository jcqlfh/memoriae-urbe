<TopAppBar
    variant="static"
    dense
    class="grey"
>
  <Row>
    {#if (showLink)}
      <Section>
            <Icon class="material-icons">chevron_left</Icon>
            <a href="{path}">{text}</a>
      </Section>
    {/if}
  </Row>
</TopAppBar>

<script lang="ts">
    import TopAppBar, { Row, Section } from '@smui/top-app-bar';
    import { Icon } from '@smui/common';

    export let showLink = false;
    export let path = "/";
    export let text = "Voltar";
</script>
