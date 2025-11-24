<script lang="ts">
    import { Checkbox as CheckboxPrimitive } from "bits-ui";
    import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";
    import IconCheck from "phosphor-icons-svelte/IconCheckBold.svelte";
    import IconMinus from "phosphor-icons-svelte/IconMinusBold.svelte";

    let {
        ref = $bindable(null),
        checked = $bindable(false),
        indeterminate = $bindable(false),
        class: className,
        ...restProps
    }: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
    bind:ref
    data-slot="checkbox"
    class={cn(
        "size-22 rounded-6 bg-fg-base border-stroke data-[state=checked]:border-accent data-[state=checked]:bg-fg-accent data-[state=checked]:text-accent flex items-center justify-center border",
        "transition-all duration-150 ease-out",
        "focus-visible:border-accent focus-visible:ring-accent/30 ring-offset-background outline-none focus-visible:ring-[3px]",
        "aria-invalid:ring-red/20 aria-invalid:border-red data-[state=checked]:aria-invalid:border-red",
        className,
    )}
    bind:checked
    bind:indeterminate
    {...restProps}
>
    {#snippet children({ checked, indeterminate })}
        <div data-slot="checkbox-indicator">
            {#if checked}
                <IconCheck class="size-16" />
            {:else if indeterminate}
                <IconMinus class="size-16" />
            {/if}
        </div>
    {/snippet}
</CheckboxPrimitive.Root>
