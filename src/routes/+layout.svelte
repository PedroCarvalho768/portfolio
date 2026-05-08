<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import 'virtual:uno.css';
	import '../app.css';

	let { children } = $props();

	const navItems = [
		{ path: '/', label: 'Início' },
		{ path: '/curriculo', label: 'Currículo' },
		{ path: '/projetos', label: 'Projetos' },
		{ path: '/blog', label: 'Blog' },
		{ path: '/contato', label: 'Contato' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Portfólio | Pedro Carvalho</title>
</svelte:head>

<div class="min-h-screen bg-news-paper font-serif text-news-ink flex flex-col">
	<div
		class="border-b border-news-ink py-1 text-center text-xs uppercase tracking-widest font-sans"
	>
		<span
			>{new Date().toLocaleDateString('pt-BR', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}</span
		>
	</div>

	<header class="border-b-4 border-double border-news-ink py-6">
		<div class="container mx-auto px-4 text-center">
			<a href={resolve('/')} class="inline-block mb-4">
				<h1
					class="font-hero text-5xl md:text-7xl font-normal text-news-ink tracking-normal leading-tight"
				>
					Pedro Carvalho
				</h1>
				<p class="font-sans text-xs uppercase tracking-[0.2em] text-news-inkLight mt-2">
					Desenvolvedor Backend
				</p>
			</a>

			<nav class="mt-4 border-t border-news-ink pt-4">
				<ul class="flex flex-wrap justify-center gap-6 md:gap-10">
					{#each navItems as item (item.label)}
						<li>
							<a
								href={resolve(item.path)}
								class="font-serif text-xl tracking-wider text-news-ink hover:text-news-red transition-colors relative group"
							>
								{item.label}
								<span
									class="absolute -bottom-1 left-0 w-0 h-[1px] bg-news-red transition-all group-hover:w-full"
								></span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</header>

	<main class="container mx-auto px-4 py-12 flex-grow">
		{#key $page.url.pathname}
			<div in:fade={{ duration: 300 }}>
				{@render children()}
			</div>
		{/key}
	</main>

	<footer class="border-t-4 border-double border-news-ink py-8 text-center bg-news-paper mt-auto">
		<div class="container mx-auto px-4">
			<p class="font-sans text-xs uppercase tracking-widest text-news-inkLight">
				© {new Date().getFullYear()} — Feito com SvelteKit & UnoCSS
			</p>
		</div>
	</footer>
</div>
