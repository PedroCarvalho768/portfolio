import { defineConfig, presetUno, presetTypography } from 'unocss';

export default defineConfig({
	presets: [presetUno(), presetTypography()],
	theme: {
		fontFamily: {
			sans: 'Inter, sans-serif',
			serif: '"Playfair Display", Georgia, serif',
			hero: 'UnifrakturMaguntia, cursive'
		},
		fontSize: {
			display: ['clamp(3rem, 10vw, 6rem)', { lineHeight: '1', letterSpacing: '0.02em' }],
			'display-md': ['clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1', letterSpacing: '0.02em' }],
			'hero-sm': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1', letterSpacing: '0.02em' }]
		},
		colors: {
			news: {
				paper: '#f4f1ea',
				ink: '#2c2c2c',
				inkLight: '#4a4a4a',
				red: '#ff5555',
				highlight: '#e8e1cc',
				dark: '#1a1a1a'
			}
		}
	},
	shortcuts: {
		'card-news':
			'bg-news-dark border border-news-paper/15 p-4 transition-colors duration-300 hover:bg-news-ink hover:border-news-paper/30',
		'card-news-dark': 'bg-news-ink border border-news-paper/15 p-4',
		'card-news-double': 'bg-news-dark border border-news-paper/15 p-8 md:p-12',
		'card-news-double-dark': 'bg-news-ink border border-news-paper/15 p-8 md:p-12',
		'btn-news':
			'bg-news-paper text-news-dark border border-news-paper px-4 py-2 font-serif text-sm transition-colors hover:bg-news-red hover:text-news-paper hover:border-news-red',
		'btn-news-dark':
			'bg-transparent border border-news-paper/30 px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-news-paper/70 transition-all hover:bg-news-red hover:text-news-paper hover:border-news-red',
		'section-light': 'bg-news-ink text-news-paper',
		'section-dark': 'bg-news-dark text-news-paper',
		'section-ink': 'bg-news-ink text-news-paper',
		'title-news': 'font-hero text-5xl md:text-7xl font-normal text-news-paper tracking-wide',
		'title-news-dark': 'font-hero text-5xl md:text-7xl font-normal text-news-paper tracking-wide',
		'title-display': 'font-hero text-display font-normal leading-none',
		'title-display-dark': 'font-hero text-display font-normal leading-none text-news-paper',
		'subtitle-news': 'font-serif text-3xl font-bold text-news-paper tracking-wide',
		'body-news': 'font-serif text-lg text-news-paper leading-relaxed',
		'body-news-dark': 'font-serif text-lg text-news-paper leading-relaxed'
	},
	typography: {
		news: {
			css: {
				'--tw-prose-body': '#f4f1ea',
				'--tw-prose-headings': '#f4f1ea',
				'--tw-prose-links': '#ff5555',
				'--tw-prose-bold': '#f4f1ea',
				'--tw-prose-counters': '#e8e1cc',
				'--tw-prose-bullets': '#e8e1cc',
				'--tw-prose-hr': '#f4f1ea',
				'--tw-prose-quotes': '#e8e1cc',
				'--tw-prose-quote-borders': '#f4f1ea',
				'--tw-prose-caption': '#e8e1cc'
			}
		},
		newsDark: {
			css: {
				'--tw-prose-body': '#f4f1ea',
				'--tw-prose-headings': '#f4f1ea',
				'--tw-prose-links': '#ff5555',
				'--tw-prose-bold': '#f4f1ea',
				'--tw-prose-counters': '#e8e1cc',
				'--tw-prose-bullets': '#e8e1cc',
				'--tw-prose-hr': '#f4f1ea',
				'--tw-prose-quotes': '#e8e1cc',
				'--tw-prose-quote-borders': '#f4f1ea',
				'--tw-prose-caption': '#e8e1cc'
			}
		}
	}
});
