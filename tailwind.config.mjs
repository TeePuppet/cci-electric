/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  primary: 'var(--color-primary)',
		  accent: 'var(--color-accent)',
		  title: 'var(--color-title)',
		  body: 'var(--color-body)',
		},
	  },
	},
	plugins: [],
  }