<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf'
    import { Button } from '$lib/components/ui/button'
    import { fn } from 'storybook/test'

    const { Story } = defineMeta({
        title: 'Example/Button',
        component: Button,
        tags: ['autodocs'],
        argTypes: {
            backgroundColor: { control: 'color' },
            size: {
                control: { type: 'select' },
                options: ['small', 'medium', 'large'],
            },
        },
        args: {
            onclick: fn(),
        },
    })
</script>

<Story name="Primary" args={{ primary: true, label: 'Button' }} />

<Story name="Secondary" args={{ label: 'Button' }} />

<Story name="Large" args={{ size: 'large', label: 'Button' }} />

<Story name="Small" args={{ size: 'small', label: 'Button' }} />
