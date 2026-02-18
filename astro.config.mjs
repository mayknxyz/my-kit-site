// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mykit.mikenavales.xyz',
	integrations: [
		starlight({
			title: 'my-kit',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/my-backpack-logo.png',
			},
			customCss: ['./src/styles/custom.css'],
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/mayknxyz/my-kit',
				},
				{
					icon: 'external',
					label: 'mikenavales.xyz',
					href: 'https://mikenavales.xyz',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/mayknxyz/my-kit-site/edit/main/',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'getting-started' },
						{ label: 'Installation', slug: 'installation' },
						{ label: 'Supported Stack', slug: 'supported-stack' },
					],
				},
				{
					label: 'Workflow',
					items: [
						{ label: 'Overview', slug: 'workflow/overview' },
						{ label: 'Specify', slug: 'workflow/specify' },
						{ label: 'Plan', slug: 'workflow/plan' },
						{ label: 'Tasks', slug: 'workflow/tasks' },
						{ label: 'Implement', slug: 'workflow/implement' },
						{ label: 'Ship', slug: 'workflow/ship' },
						{ label: 'Audit', slug: 'workflow/audit' },
					],
				},
				{
					label: 'Commands',
					collapsed: true,
					autogenerate: { directory: 'commands' },
				},
				{
					label: 'Skills',
					items: [
						{
							label: 'Workflow Skills',
							autogenerate: { directory: 'skills/workflow' },
						},
						{
							label: 'Domain Skills',
							autogenerate: { directory: 'skills/domain' },
						},
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Overview', slug: 'architecture/overview' },
						{ label: 'Stow Layout', slug: 'architecture/stow-layout' },
						{ label: 'Extension Guide', slug: 'architecture/extension-guide' },
					],
				},
				{
					label: 'Troubleshooting',
					autogenerate: { directory: 'troubleshooting' },
				},
			],
		}),
	],
});
