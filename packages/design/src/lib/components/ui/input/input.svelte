<script lang="ts" module>
    import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import { tv, type VariantProps } from "tailwind-variants";

    const inputVariants = tv({
        base: [
            "bg-fg-base border border-stroke !text-text placeholder:text-text-2",
            "outline-none focus-visible:border-accent focus-visible:ring-accent/30 focus-visible:ring-[3px] ring-offset-background",
            "aria-invalid:ring-red/20 aria-invalid:border-red",
        ],
        variants: {
            size: {
                lg: "h-40 rounded-10 px-16 text-body",
                sm: "h-30 rounded-8 px-10 text-body",
                xs: "h-22 rounded-6 px-6 text-caption leading-0",
            },
        },
        defaultVariants: {
            size: "lg",
        },
    });

    type InputType = Exclude<HTMLInputTypeAttribute, "file">;

    type Props = WithElementRef<
        Omit<HTMLInputAttributes, "type"> & {
            size?: "default" | "sm";
            type?: "file" | InputType;
            files?: FileList;
        }
    >;

    export type InputSize = VariantProps<typeof inputVariants>["size"];
    export type InputProps = WithElementRef<HTMLInputAttributes> & {
        size?: InputSize;
    };
</script>

<script lang="ts">
    let {
        ref = $bindable(null),
        value = $bindable(),
        type,
        files = $bindable(),
        size,
        class: className,
        ...restProps
    }: Props = $props();
</script>

<input
    bind:this={ref}
    data-slot="input"
    class={cn(inputVariants({ size }), className)}
    {type}
    bind:value
    {...restProps}
/>
