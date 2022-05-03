<script>
  import Markdown from '../components/Markdown.svelte'
  var exampleMarkdown = import('./welcoming.md');
  const test = `# HEADER`;
</script>
  
<h1 class="julius">Bem-vindos</h1>

<article class="shadow" >
    <Markdown markdown={test} />
</article>

