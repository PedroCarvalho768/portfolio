<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import 'virtual:uno.css';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Portfólio | Pedro Carvalho</title>
</svelte:head>

<div class="min-h-screen bg-news-dark font-serif text-news-paper flex flex-col">
	<div
		class="border-b border-news-red/50 py-1 text-center text-xs uppercase tracking-widest font-sans text-news-paper/50 bg-news-dark"
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

	<header class="border-b border-news-red/30 py-6">
		<div class="container mx-auto px-4 text-center">
			<a href={resolve('/')} class="inline-block mb-4">
				<h1 class="font-hero text-5xl md:text-7xl font-normal tracking-normal leading-tight">
					<span class="text-news-red">Pedro</span> <span class="text-news-paper">Carvalho</span>
				</h1>
				<p class="font-sans text-xs uppercase tracking-[0.2em] text-news-paper/50 mt-2">
					Desenvolvedor Backend
				</p>
			</a>

			<nav class="mt-4 border-t border-news-red/20 pt-4">
				<ul class="flex flex-wrap justify-center gap-6 md:gap-10">
					<li>
						<a
							href={resolve('/')}
							class="font-serif text-xl tracking-wider text-news-paper/80 hover:text-news-red transition-colors relative group"
						>
							Início
							<span
								class="absolute -bottom-1 left-0 w-0 h-[1px] bg-news-red transition-all group-hover:w-full"
							></span>
						</a>
					</li>
					<li>
						<a
							href={resolve('/curriculo')}
							class="font-serif text-xl tracking-wider text-news-paper/80 hover:text-news-red transition-colors relative group"
						>
							Currículo
							<span
								class="absolute -bottom-1 left-0 w-0 h-[1px] bg-news-red transition-all group-hover:w-full"
							></span>
						</a>
					</li>
					<li>
						<a
							href={resolve('/projetos')}
							class="font-serif text-xl tracking-wider text-news-paper/80 hover:text-news-red transition-colors relative group"
						>
							Projetos
							<span
								class="absolute -bottom-1 left-0 w-0 h-[1px] bg-news-red transition-all group-hover:w-full"
							></span>
						</a>
					</li>
					<li>
						<a
							href={resolve('/blog')}
							class="font-serif text-xl tracking-wider text-news-paper/80 hover:text-news-red transition-colors relative group"
						>
							Blog
							<span
								class="absolute -bottom-1 left-0 w-0 h-[1px] bg-news-red transition-all group-hover:w-full"
							></span>
						</a>
					</li>
					<li>
						<a
							href={resolve('/contato')}
							class="font-serif text-xl tracking-wider text-news-paper/80 hover:text-news-red transition-colors relative group"
						>
							Contato
							<span
								class="absolute -bottom-1 left-0 w-0 h-[1px] bg-news-red transition-all group-hover:w-full"
							></span>
						</a>
					</li>
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

	<footer class="border-t border-news-paper/15 py-8 text-center bg-news-dark mt-auto">
		<div class="container mx-auto px-4">
			<p class="font-sans text-xs uppercase tracking-widest text-news-paper/50">
				© {new Date().getFullYear()} — Feito com SvelteKit & UnoCSS
			</p>
		</div>
	</footer>
</div>
