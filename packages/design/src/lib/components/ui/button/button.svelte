<script lang="ts" module>
    import { cn, type WithElementRef } from '$lib/utils.js';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
    import { type VariantProps, tv } from 'tailwind-variants';

    export const buttonVariants = tv({
        base: 'text-text border border-stroke',
        variants: {
            variant: {
                primary: 'bg-fg-blue',
                secondary: 'bg-fg-base ',
                success: 'bg-fg-green ',
                warning: 'bg-fg-yellow ',
                danger: 'bg-fg-red ',
            },
            size: {
                lg: 'h-40 rounded-16 px-16',
                sm: 'h-30 rounded-12 px-10',
                xs: 'h-22 rounded-10 px-6',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'lg',
        },
    });

    export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
    export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

    export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
        WithElementRef<HTMLAnchorAttributes> & {
            variant?: ButtonVariant;
            size?: ButtonSize;
        };
</script>

<script lang="ts">
    let {
        class: className,
        variant = 'primary',
        size = 'lg',
        ref = $bindable(null),
        href = undefined,
        type = 'button',
        disabled,
        children,
        ...restProps
    }: ButtonProps = $props();
</script>

{#if href}
    <a
        bind:this={ref}
        data-slot="button"
        class={cn(buttonVariants({ variant, size }), className)}
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        role={disabled ? 'link' : undefined}
        tabindex={disabled ? -1 : undefined}
        {...restProps}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        bind:this={ref}
        data-slot="button"
        class={cn(buttonVariants({ variant, size }), className)}
        {type}
        {disabled}
        {...restProps}
    >
        {@render children?.()}
    </button>
{/if}
