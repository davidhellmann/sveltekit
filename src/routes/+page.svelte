<script lang="ts">
  import type { PageData } from './$houdini';
  export let data: PageData;

  $: ({ Entries } = data);
</script>

{#if $Entries.fetching}
  <p>Loading...</p>
{:else if $Entries?.data?.entries && $Entries?.data?.entries?.length > 0}
  <ul>
    {#each $Entries.data.entries as entry}
      <li>
        <a href={entry?.url}>{entry?.title}</a>
      </li>
    {/each}
  </ul>
{/if}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
