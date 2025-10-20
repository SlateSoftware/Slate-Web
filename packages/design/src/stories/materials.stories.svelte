<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';

    const { Story } = defineMeta({
        title: 'Guidelines/Materials',
    });
</script>

<Story name="Glass">
    <div class="text-text flex min-w-[32rem] flex-col gap-8">
        <div
            class="bg-bg-window rounded-16 border-stroke flex w-full flex-col gap-2 border p-4 pt-16"
        >
            <p>BG Window</p>
            <div class="flex gap-2">
                <div
                    class="bg-fg-base shadow-glass rounded-8 border-stroke w-full border p-4 pt-16"
                >
                    <p>FG Base</p>
                </div>
                <div
                    class="bg-fg-base-p shadow-glass rounded-8 border-stroke-p w-full border p-4 pt-16"
                >
                    <p>FG Base Pronounced</p>
                </div>
                <div
                    class="bg-fg-base-s shadow-glass rounded-8 border-stroke-s w-full border p-4 pt-16"
                >
                    <p>FG Base Subtle</p>
                </div>
            </div>
            <div
                class="bg-surface-primary-success text-text-success-contrast shadow-glass rounded-8 border-stroke w-full border p-4 pt-16"
            >
                <p>surface-primary-success</p>
            </div>
            <div
                class="bg-surface-primary-warning text-text-warning-contrast shadow-glass rounded-8 border-stroke w-full border p-4 pt-16"
            >
                <p>surface-primary-warning</p>
            </div>
            <div
                class="bg-surface-primary-danger text-text-danger-contrast shadow-glass rounded-8 border-stroke w-full border p-4 pt-16"
            >
                <p>surface-primary-danger</p>
            </div>
        </div>
    </div>
</Story>
