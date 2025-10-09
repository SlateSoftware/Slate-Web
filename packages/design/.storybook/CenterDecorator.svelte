<script lang="ts">
    import type { Snippet } from 'svelte';

    let { children }: { children: Snippet } = $props();
</script>

<div>
    {@render children()}
</div>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 2rem;
    }
</style>
