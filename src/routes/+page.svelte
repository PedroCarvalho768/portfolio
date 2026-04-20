<script lang="ts">
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>Pedro | Dev</title>
</svelte:head>

<section class="py-12 md:py-16 border-b-2 border-news-ink mb-12">
	<div class="max-w-4xl mx-auto">
		<div use:reveal>
			<h1 class="text-4xl md:text-6xl font-serif font-normal mb-6 text-news-ink leading-tight">
				Pedro. Dev.
			</h1>
			<div class="border-y-2 border-news-ink py-4 mb-6">
				<p class="font-serif text-xl md:text-2xl leading-relaxed text-news-ink">
					Faço código que resolve. Backend, automação, API.
				</p>
			</div>
			<div class="border-b-2 border-news-ink pb-4 mb-6">
				<p class="font-serif text-lg md:text-xl leading-relaxed text-news-inkLight">
					Não prometo o que não posso. Entrego o que funciona.
				</p>
			</div>
			<div class="flex flex-wrap gap-6 mt-8 font-sans">
				<a
					href="/projetos"
					class="uppercase tracking-widest text-sm font-bold text-news-ink border-b border-news-ink hover:text-news-red hover:border-news-red transition-colors pb-1"
				>
					Ver Projetos →
				</a>
				<a
					href="/contato"
					class="uppercase tracking-widest text-sm font-bold text-news-ink border-b border-news-ink hover:text-news-red hover:border-news-red transition-colors pb-1"
				>
					Bora Conversar →
				</a>
			</div>
		</div>
	</div>
</section>
