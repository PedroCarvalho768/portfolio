import { defineConfig, presetUno, presetTypography } from 'unocss';

export default defineConfig({
	presets: [presetUno(), presetTypography()],
	theme: {
		fontFamily: {
			sans: 'Inter, sans-serif',
			serif: '"Playfair Display", serif',
			hero: 'UnifrakturMaguntia, cursive'
		},
		colors: {
			news: {
				paper: '#f4f1ea',
				ink: '#2c2c2c',
				inkLight: '#4a4a4a',
				red: '#8b0000',
				highlight: '#e8e1cc'
			}
		}
	},
	shortcuts: {
		'card-news': 'bg-news-paper border border-news-ink p-4 shadow-[2px_2px_0_0_#2c2c2c]',
		'btn-news':
			'bg-news-paper border border-news-ink px-4 py-2 font-serif text-news-ink shadow-[2px_2px_0_0_#2c2c2c] transition-all hover:bg-news-ink hover:text-news-paper active:translate-x-[1px] active:translate-y-[1px] active:shadow-none',
		'title-news': 'font-hero text-5xl md:text-7xl font-normal text-news-ink tracking-wide',
		'subtitle-news': 'font-serif text-3xl font-bold text-news-ink tracking-wide',
		'body-news': 'font-serif text-lg text-news-ink leading-relaxed'
	},
	typography: {
		news: {
			css: {
				'--tw-prose-body': '#2c2c2c',
				'--tw-prose-headings': '#2c2c2c',
				'--tw-prose-links': '#8b0000',
				'--tw-prose-bold': '#2c2c2c',
				'--tw-prose-counters': '#4a4a4a',
				'--tw-prose-bullets': '#4a4a4a',
				'--tw-prose-hr': '#2c2c2c',
				'--tw-prose-quotes': '#4a4a4a',
				'--tw-prose-quote-borders': '#2c2c2c',
				'--tw-prose-caption': '#4a4a4a'
			}
		}
	}
});
