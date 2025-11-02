<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<div>
    {@render children()}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        height: 100%;
        padding: 2rem;
        overflow: auto;
        box-sizing: border-box;
    }
</style>
