import './preview.css';

import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-sans/400-italic.css';
import '@fontsource/dm-sans/500-italic.css';
import '@fontsource/dm-sans/700-italic.css';

import '@fontsource/dm-mono';

import type { Preview } from '@storybook/svelte-vite';
import CenterDecorator from './CenterDecorator.svelte';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            disable: true, // Disable default backgrounds since we're using dark mode
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'dark',
            toolbar: {
                title: 'Theme',
                icon: 'sun',
                items: [
                    { value: 'light', icon: 'sun', title: 'Light' },
                    { value: 'dark', icon: 'moon', title: 'Dark' },
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        // Center content decorator
        () => CenterDecorator,
        (story, context) => {
            const theme = context.globals.theme || 'dark';

            // Apply theme and font to the document body and Storybook containers
            if (typeof document !== 'undefined') {
                const applyStyles = () => {
                    const body = document.body;
                    const html = document.documentElement;
                    const storybookRoot = document.getElementById('storybook-root');
                    const storybookPreview = document.querySelector('.sb-story');
                    const mainContainer = document.querySelector('.sb-show-main');
                    const paddedContainer = document.querySelector('.sb-main-padded');
                    const docsWrapper = document.querySelector('.sbdocs-wrapper');

                    const elements = [
                        body,
                        html,
                        storybookRoot,
                        storybookPreview,
                        mainContainer,
                        paddedContainer,
                        docsWrapper,
                    ].filter(Boolean);

                    for (const el of elements) {
                        el?.classList.add('h-full');
                    }

                    // Apply theme classes
                    if (theme === 'dark') {
                        for (const el of elements) {
                            el?.classList.add('dark');
                        }
                    } else {
                        for (const el of elements) {
                            el?.classList.remove('dark');
                        }
                    }
                };

                // Apply immediately
                applyStyles();

                // Apply again after a short delay to catch dynamically created elements
                setTimeout(applyStyles, 50);
            }

            return story();
        },
    ],
};

export default preview;
