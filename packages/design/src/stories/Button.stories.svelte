<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import { Button } from '$lib/components/ui/button/index.ts';
    import { fn } from 'storybook/test';

    const { Story } = defineMeta({
        title: 'Components/Button',
        tags: ['autodocs'],
        component: Button,
        argTypes: {
            label: {
                control: { type: 'text' },
            },
            variant: {
                control: {
                    type: 'select',
                },
                options: ['primary', 'secondary', 'success', 'warning', 'danger'],
            },
            size: {
                control: { type: 'select' },
                options: ['lg', 'sm', 'xs'],
            },
            disabled: {
                control: { type: 'boolean' },
            },
        },
        args: {
            label: 'Button',
            variant: 'primary',
            size: 'lg',
            disabled: false,
            onclick: fn(),
        },
        parameters: {
            controls: {
                include: Object.keys({
                    label: null,
                    variant: null,
                    appearance: null,
                    size: null,
                    disabled: null,
                }),
                hideNoControlsWarning: true,
            },
        },
    });
</script>

{#snippet templateText(args)}
    <Button {...args}>{args.label}</Button>
{/snippet}
<Story name="Button" let:args template={templateText} />
