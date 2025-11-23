<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { Input } from "$lib/components/ui/input/index.ts";

    const { Story } = defineMeta({
        title: "Components/Input",
        tags: ["autodocs"],
        component: Input,
        argTypes: {
            placeholder: {
                control: { type: "text" },
            },
            type: {
                control: { type: "select" },
                options: ["text", "number", "password", "email", "tel", "url"],
            },
            size: {
                control: { type: "select" },
                options: ["lg", "sm", "xs"],
            },
        },
        args: {
            placeholder: "Input...",
            type: "text",
            size: "lg",
            class: "w-fit",
        },
        parameters: {
            controls: {
                include: Object.keys({
                    placeholder: null,
                    type: null,
                    size: null,
                }),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

<Story name="Input" let:args />
<Story name="Invalid" args={{ "aria-invalid": true }} let:args />
