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
        },
        args: {
            indeterminate: false,
            disabled: false,
            checked: true,
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
<Story name="Invalid" args={{ "aria-invalid": true }} let:args />
