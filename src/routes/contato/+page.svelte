<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { Code2, Briefcase, Camera, Mail, ArrowUpRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Pedro | Contato</title>
</svelte:head>

<section class="section-dark min-h-[35vh] flex items-center">
	<div class="container mx-auto px-4 py-20 md:py-24 w-full">
		<div class="max-w-5xl mx-auto" use:reveal>
			<p class="font-sans text-xs uppercase tracking-[0.25em] text-news-paper/50 mb-4">Contato</p>
			<h1 class="title-display-dark mb-4">
				Bora Trocar uma <span class="text-news-red">I</span>deia
			</h1>
			<div class="border-t-2 border-news-paper/30 pt-4 max-w-xl">
				<p class="font-serif text-xl md:text-2xl text-news-paper/80 leading-relaxed">
					Email, redes, ou qualquer outro canto.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section-ink py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
			<div class="space-y-6" use:reveal={{ delay: 100 }}>
				<h2 class="font-sans text-[10px] uppercase tracking-[0.2em] text-news-paper/40 mb-6">
					Redes
				</h2>

				<div class="flex flex-col gap-3">
					<a
						href="https://github.com/PedroCarvalho768"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 border border-news-paper/15 p-5 hover:bg-news-dark hover:border-news-paper/30 transition-colors"
					>
						<Code2 size={20} class="shrink-0" />
						<div class="flex flex-col">
							<span class="font-serif font-bold text-lg leading-none">GitHub</span>
							<span
								class="font-sans text-[10px] uppercase tracking-wider text-news-paper/40 group-hover:text-news-paper/60"
								>/PedroCarvalho768</span
							>
						</div>
						<ArrowUpRight
							size={14}
							class="ml-auto opacity-40 group-hover:opacity-80 transition-opacity shrink-0"
						/>
					</a>

					<a
						href="https://www.linkedin.com/in/pedro-carvalho-1b57573bb"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 border border-news-paper/15 p-5 hover:bg-news-dark hover:border-news-paper/30 transition-colors"
					>
						<Briefcase size={20} class="shrink-0" />
						<div class="flex flex-col">
							<span class="font-serif font-bold text-lg leading-none">LinkedIn</span>
							<span
								class="font-sans text-[10px] uppercase tracking-wider text-news-paper/40 group-hover:text-news-paper/60"
								>/in/pedro-carvalho</span
							>
						</div>
						<ArrowUpRight
							size={14}
							class="ml-auto opacity-40 group-hover:opacity-80 transition-opacity shrink-0"
						/>
					</a>

					<a
						href="https://www.instagram.com/pedro.carvalho768?igsh=am8zd3EzZTNiajhp"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 border border-news-paper/15 p-5 hover:bg-news-dark hover:border-news-paper/30 transition-colors"
					>
						<Camera size={20} class="shrink-0" />
						<div class="flex flex-col">
							<span class="font-serif font-bold text-lg leading-none">Instagram</span>
							<span
								class="font-sans text-[10px] uppercase tracking-wider text-news-paper/40 group-hover:text-news-paper/60"
								>/pedro.carvalho768</span
							>
						</div>
						<ArrowUpRight
							size={14}
							class="ml-auto opacity-40 group-hover:opacity-80 transition-opacity shrink-0"
						/>
					</a>
				</div>
			</div>

			<div use:reveal={{ delay: 200 }}>
				<h2 class="font-sans text-[10px] uppercase tracking-[0.2em] text-news-paper/40 mb-6">
					Email
				</h2>

				<a
					href="mailto:pedrohcarvalho556@gmail.com"
					class="group flex flex-col items-center justify-center border border-news-paper/15 p-12 md:p-16 text-center hover:bg-news-dark hover:border-news-paper/30 transition-colors h-[calc(100%-2rem)]"
				>
					<Mail size={40} class="mb-4 transition-transform duration-300 group-hover:scale-110" />
					<span
						class="font-serif text-xl md:text-2xl text-news-paper group-hover:text-news-red transition-colors break-all"
					>
						pedrohcarvalho556@gmail.com
					</span>
					<span
						class="font-sans text-[10px] uppercase tracking-widest mt-4 text-news-paper/40 group-hover:text-news-paper/60"
					>
						Clique para enviar um email
					</span>
				</a>
			</div>
		</div>
	</div>
</section>
