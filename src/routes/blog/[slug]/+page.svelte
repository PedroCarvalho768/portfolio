<script lang="ts">
	let { data } = $props();
	const Content = $derived(data.content);
</script>

<svelte:head>
	<title>Pedro | {data.meta.title}</title>
</svelte:head>

<article class="max-w-prose mx-auto py-12">
	<div class="mb-12 border-b-4 border-double border-news-ink pb-8 text-center">
		<a
			href="/blog"
			class="font-sans text-xs font-bold uppercase tracking-widest text-news-ink hover:text-news-red transition-colors inline-flex items-center gap-2 mb-10"
		>
			<span>&larr;</span>
			<span>Voltar para o blog</span>
		</a>

		<h1 class="font-focus text-5xl md:text-7xl text-news-ink tracking-wide mb-6 leading-tight">
			{data.meta.title}
		</h1>

		<div
			class="font-sans text-sm uppercase tracking-widest text-news-inkLight flex items-center justify-center gap-2"
		>
			<time>
				{new Date(data.meta.date).toLocaleDateString('pt-BR', {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
		</div>
	</div>

	<div
		class="prose prose-news prose-lg mx-auto font-serif text-news-ink prose-headings:font-focus prose-headings:font-normal prose-headings:text-news-ink prose-a:text-news-red prose-a:underline prose-a:decoration-news-red prose-a:underline-offset-4 hover:prose-a:bg-news-red hover:prose-a:text-news-paper prose-blockquote:border-l-4 prose-blockquote:border-news-ink prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-news-inkLight prose-hr:border-news-ink "
	>
		<Content />
	</div>
</article>
