import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Suboptimal Studio',
    description: 'We build games. Optimization is optional.',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Give No Quarter', link: '/games/give-no-quarter/index' },
            { text: 'Newsletter', link: '/forms/newsletter' },
            { text: 'Press', link: '/forms/press' },
        ],
        sidebar: {
            '/games/give-no-quarter': [
                {
                    text: 'Give No Quarter',
                    items: [{ text: 'About Game', link: '/games/give-no-quarter/index' }],
                },
            ],
        },
        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/invite/9uwyJ85Jae' },
            { icon: 'youtube', link: 'https://youtube.com/stuyk' },
        ],
    },
    head: [
        ['meta', { name: 'title', content: 'Suboptimal Studio' }],
        [
            'meta',
            {
                name: 'description',
                content:
                    'We are a small group of friends that are building games. Come check out some of our latest indie games.',
            },
        ],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://suboptimalstudio.com' }],
        ['meta', { property: 'og:title', content: 'Suboptimal Studio' }],
        [
            'meta',
            {
                property: 'og:description',
                content:
                    'We are a small group of friends that are building games. Come check out some of our latest indie games.',
            },
        ],
        ['meta', { property: 'og:image', content: '/meta.png' }],
        ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { property: 'twitter:url', content: 'https://suboptimalstudio.com' }],
        ['meta', { property: 'twitter:title', content: 'Suboptimal Studio' }],
        [
            'meta',
            {
                property: 'twitter:description',
                content:
                    'We are a small group of friends that are building games. Come check out some of our latest indie games.',
            },
        ],
        ['meta', { property: 'twitter:image', content: '/meta.png' }],
        ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: 'site.webmanifest' }],
        [
            'script',
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=G-98MNR4M2DK',
            },
        ],
        [
            'script',
            {},
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-98MNR4M2DK');",
        ],
    ],
});
