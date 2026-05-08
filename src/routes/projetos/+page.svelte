<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { resolve } from '$app/paths';
	import { Construction, ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Pedro | Projetos</title>
</svelte:head>

<section class="max-w-4xl mx-auto py-24 text-center min-h-[60vh] flex flex-col justify-center">
	<div
		class="border-[6px] border-double border-news-ink p-8 md:p-16 relative bg-news-paper"
		use:reveal
	>
		<Construction size={48} class="text-news-inkLight mx-auto mb-6" />

		<h1 class="font-serif text-4xl md:text-7xl text-news-ink mb-6 pt-4 md:pt-6 leading-tight">
			Projetos
		</h1>

		<div class="border-y border-news-ink py-4 mb-8 mx-auto max-w-lg">
			<h2 class="font-serif text-3xl md:text-4xl text-news-inkLight uppercase tracking-wider">
				Em Construção
			</h2>
		</div>

		<p class="font-serif text-xl md:text-2xl text-news-ink leading-relaxed max-w-2xl mx-auto mb-8">
			Ainda estou arrumando essa página. Volta mais tarde!
		</p>

		<p class="font-sans text-sm uppercase tracking-widest text-news-inkLight mb-12 italic">
			&mdash; Roma não foi construída em um dia, e nem esse portfólio. &mdash;
		</p>

		<a
			href={resolve('/')}
			class="group inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest text-news-ink border border-news-ink px-6 py-3 hover:bg-news-ink hover:text-news-paper transition-colors"
		>
			<ArrowLeft size={14} class="transition-transform duration-300 group-hover:-translate-x-1" />
			Voltar para o Início
		</a>
	</div>
</section>
