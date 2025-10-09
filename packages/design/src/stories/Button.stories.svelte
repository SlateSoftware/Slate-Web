<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import { Button } from '$lib/components/ui/button';
    import { fn } from 'storybook/test';

    const { Story } = defineMeta({
        title: 'Button',
        component: Button,
        argTypes: {
            size: {
                control: { type: 'select' },
                options: ['small', 'medium', 'large'],
            },
        },
        args: {
            onclick: fn(),
        },
    });
</script>

<Story name="Button" args={{ label: 'Button' }} />
