<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { resolve } from '$app/paths';
	import { ArrowRight, Send } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Pedro | Dev</title>
</svelte:head>

<section class="section-dark min-h-[80vh] flex items-center relative overflow-hidden">
	<div class="container mx-auto px-4 py-24 md:py-32 w-full">
		<div class="max-w-5xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end">
				<div class="md:col-span-7" use:reveal>
					<p class="font-sans text-xs uppercase tracking-[0.25em] text-news-red/70 mb-6 md:mb-8">
						Portfolio
					</p>
					<h1 class="title-display-dark leading-none mb-6 select-none">
						<span class="inline-block text-news-paper">A</span><span
							class="inline-block text-news-red">o</span
						><span class="inline-block text-news-paper">ba</span>
					</h1>
					<div class="border-t-2 border-news-red/30 pt-6 max-w-xl">
						<p class="font-serif text-xl md:text-2xl leading-relaxed text-news-paper/90">
							Faço código que resolve.
						</p>
						<p class="font-serif text-lg md:text-xl leading-relaxed text-news-paper/60 mt-2">
							Backend, automação, API.
						</p>
					</div>
					<div class="flex flex-wrap gap-4 mt-8">
						<a
							href={resolve('/projetos')}
							class="btn-news-dark inline-flex items-center gap-2 group"
						>
							Ver Projetos
							<ArrowRight
								size={14}
								class="transition-transform duration-300 group-hover:translate-x-1"
							/>
						</a>
						<a
							href={resolve('/contato')}
							class="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-news-red/70 border border-news-red/30 px-6 py-3 hover:bg-news-red hover:text-news-paper transition-all"
						>
							Bora Conversar
							<Send size={14} />
						</a>
					</div>
				</div>

				<div class="md:col-span-5 hidden md:flex justify-end" use:reveal={{ delay: 200 }}>
					<div class="border border-news-paper/20 p-6 max-w-[200px]">
						<div class="font-sans text-[10px] uppercase tracking-[0.15em] text-news-paper/40 mb-3">
							Stack
						</div>
						<div class="space-y-2 text-right">
							{#each ['Python', 'Go', 'Rust', 'FastAPI', 'PostgreSQL'] as tech (tech)}
								<div
									class="font-sans text-xs text-news-paper/60 border-b border-news-paper/10 pb-1"
								>
									{tech}
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section-light py-20 md:py-28">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto" use:reveal>
			<div class="card-news-double text-center">
				<p class="font-serif text-xl md:text-2xl leading-relaxed text-news-paper/80 italic mb-4">
					"Não prometo o que não posso. Entrego o que funciona."
				</p>
				<div class="border-t border-news-paper/15 pt-4 mt-4">
					<p class="font-serif text-lg text-news-paper/60 leading-relaxed max-w-2xl mx-auto">
						Desenvolvedor backend focado em sistemas que não quebram. Automação, APIs, integrações
						com IA.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section-ink py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div class="max-w-5xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8" use:reveal>
				<div class="text-center md:text-left">
					<p class="font-sans text-[10px] uppercase tracking-[0.2em] text-news-red/60 mb-4">Foco</p>
					<h3 class="font-hero text-hero-sm text-news-paper mb-3">Backend</h3>
					<p class="font-serif text-base text-news-paper/70 leading-relaxed">
						APIs performáticas em Python, Go e Rust. Sistemas que escalam.
					</p>
				</div>
				<div class="text-center md:text-left">
					<p class="font-sans text-[10px] uppercase tracking-[0.2em] text-news-red/60 mb-4">
						Entrega
					</p>
					<h3 class="font-hero text-hero-sm text-news-paper mb-3">Automação</h3>
					<p class="font-serif text-base text-news-paper/70 leading-relaxed">
						Processos que rodam sozinhos. Selenium, browser-use, pipelines.
					</p>
				</div>
				<div class="text-center md:text-left">
					<p class="font-sans text-[10px] uppercase tracking-[0.2em] text-news-red/60 mb-4">
						Integração
					</p>
					<h3 class="font-hero text-hero-sm text-news-paper mb-3">IA</h3>
					<p class="font-serif text-base text-news-paper/70 leading-relaxed">
						Modelos embedados em sistemas reais. Não hype, pipeline.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section-dark py-20 md:py-24">
	<div class="container mx-auto px-4 text-center" use:reveal>
		<div class="max-w-2xl mx-auto">
			<p class="font-sans text-[10px] uppercase tracking-[0.2em] text-news-red/50 mb-4">
				Pronto pra construir?
			</p>
			<h2 class="title-news mb-6"><span class="text-news-red">Bora</span> Codar</h2>
			<p class="font-serif text-lg text-news-paper/60 leading-relaxed mb-8">
				Tem um projeto em mente? Vamos conversar.
			</p>
			<a
				href={resolve('/contato')}
				class="inline-flex items-center gap-2 btn-news font-sans text-xs font-bold uppercase tracking-widest"
			>
				<Send size={14} />
				<span>Entrar em Contato</span>
			</a>
		</div>
	</div>
</section>
