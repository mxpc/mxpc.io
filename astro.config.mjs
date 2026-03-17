// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://mxpc.io',
  integrations: [
    starlight({
      title: 'MX+C Docs',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mxpc' }],
      sidebar: [
        {
          label: 'Documentation',
          autogenerate: { directory: 'docs' },
        },
      ],
      customCss: ['./src/styles/starlight.css'],
    }),
  ],
});
