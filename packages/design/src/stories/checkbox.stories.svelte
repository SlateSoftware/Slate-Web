<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { Checkbox } from "$lib/components/ui/checkbox/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Components/Checkbox",
        tags: ["autodocs"],
        component: Checkbox,
        argTypes: {
            indeterminate: {
                control: { type: "boolean" },
            },
            disabled: {
                control: { type: "boolean" },
            },
            checked: {
                control: { type: "boolean" },
            },
            label: {
                control: { type: "text" },
            },
        },
        args: {
            indeterminate: false,
            disabled: false,
            checked: true,
            label: "Agree to terms and conditions",
            onCheckedChange: fn(),
        },
        parameters: {
            controls: {
                include: Object.keys({
                    indeterminate: null,
                    disabled: null,
                    checked: null,
                }),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

<Story name="Checkbox" let:args />

{#snippet templateLabel(args)}
    <div class="flex items-center gap-6">
        <Checkbox id="checkbox" {...args} /><label for="checkbox" class="text-body text-text"
            >{args.label}</label
        >
    </div>
{/snippet}
<Story name="Label" let:args template={templateLabel} />

<Story name="Invalid" args={{ "aria-invalid": true }} let:args />
