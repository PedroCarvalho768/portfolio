<script lang="ts">
	import { reveal } from '$lib/reveal';
	let { data } = $props();
</script>

<svelte:head>
	<title>Pedro | Blog</title>
</svelte:head>

<section class="max-w-4xl mx-auto py-12">
	<div class="text-center mb-12 border-b-4 border-double border-news-ink pb-6" use:reveal>
		<h1 class="font-serif text-6xl md:text-8xl text-news-ink tracking-wide mb-2">Blog</h1>
		<p class="font-sans text-xs uppercase tracking-widest text-news-inkLight">
			Artigos, tutoriais e devaneios sobre código.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-10">
		{#if data.posts.length === 0}
			<div
				class="text-center py-12 border  border-news-ink"
				use:reveal={{ delay: 100 }}
			>
				<h2 class="font-serif text-3xl text-news-ink mb-2">Nenhum post publicado ainda.</h2>
				<p class="font-serif text-news-inkLight">Estou escrevendo o próximo...</p>
			</div>
		{:else}
			{#each data.posts as post, index}
				<a href="/blog/{post.slug}" class="block group" use:reveal={{ delay: 100 * (index + 1) }}>
					<article
						class="pb-8 border-b border-news-ink  transition-all hover:bg-news-highlight/30 p-4 -mx-4 rounded"
					>
						<header class="mb-3">
							<div
								class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2"
							>
								<h2
									class="font-serif text-4xl text-news-ink group-hover:text-news-red transition-colors leading-tight"
								>
									{post.title}
								</h2>
								<time
									class="font-sans text-xs uppercase tracking-widest text-news-inkLight whitespace-nowrap"
								>
									{new Date(post.date).toLocaleDateString('pt-BR', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</time>
							</div>
						</header>

						{#if post.description}
							<p class="font-serif text-lg text-news-ink leading-relaxed mb-4">
								{post.description}
							</p>
						{/if}

						<div
							class="font-sans text-xs font-bold uppercase tracking-widest text-news-red flex items-center gap-2 group-hover:gap-3 transition-all"
						>
							<span>Ler post</span>
							<span>&rarr;</span>
						</div>
					</article>
				</a>
			{/each}
		{/if}
	</div>
</section>
