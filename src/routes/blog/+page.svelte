<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { resolve } from '$app/paths';
	let { data } = $props();
</script>

<svelte:head>
	<title>Pedro | Blog</title>
</svelte:head>

<section class="section-dark min-h-[35vh] flex items-center">
	<div class="container mx-auto px-4 py-20 md:py-24 w-full">
		<div class="max-w-5xl mx-auto" use:reveal>
			<p class="font-sans text-xs uppercase tracking-[0.25em] text-news-paper/50 mb-4">Blog</p>
			<h1 class="title-display-dark mb-4">B<span class="text-news-red">l</span>og</h1>
			<div class="border-t-2 border-news-paper/30 pt-4 max-w-xl">
				<p class="font-serif text-xl md:text-2xl text-news-paper/80 leading-relaxed">
					Artigos, tutoriais e devaneios sobre código.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section-ink py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			{#if data.posts.length === 0}
				<div class="card-news-double text-center py-16" use:reveal>
					<h2 class="font-serif text-3xl text-news-paper/80 mb-3">Nenhum post publicado ainda.</h2>
					<p class="font-serif text-lg text-news-paper/50">Estou escrevendo o próximo...</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 gap-10">
					{#each data.posts as post, index (post.slug)}
						<a
							href={resolve(`/blog/${post.slug}`)}
							class="block group"
							use:reveal={{ delay: 100 * (index + 1) }}
						>
							<article
								class="pb-8 border-b border-news-paper/15 transition-all hover:bg-news-dark p-6 -mx-6"
							>
								<header class="mb-3">
									<div
										class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2"
									>
										<h2
											class="font-serif text-3xl md:text-4xl font-bold text-news-paper group-hover:text-news-red transition-colors leading-tight"
										>
											{post.title}
										</h2>
										<time
											class="font-sans text-[10px] uppercase tracking-wider text-news-paper/40 whitespace-nowrap shrink-0"
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
									<p class="font-serif text-lg text-news-paper/60 leading-relaxed mb-4">
										{post.description}
									</p>
								{/if}

								<div
									class="font-sans text-[10px] font-bold uppercase tracking-widest text-news-red flex items-center gap-2 group-hover:gap-3 transition-all"
								>
									<span>Ler post</span>
									<span>&rarr;</span>
								</div>
							</article>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>
