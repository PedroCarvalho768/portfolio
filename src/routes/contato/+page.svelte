<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { Code2, Briefcase, Camera, Mail } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Pedro | Contato</title>
</svelte:head>

<section class="max-w-5xl mx-auto py-12">
	<div class="text-center mb-16 border-b-4 border-double border-news-ink pb-8" use:reveal>
		<h1 class="font-serif text-4xl md:text-7xl text-news-ink tracking-wide mb-4 pt-4 md:pt-6">
			Contato
		</h1>
		<p class="font-sans text-sm uppercase tracking-widest text-news-inkLight">
			Bora trocar uma ideia?
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
		<div class="space-y-8" use:reveal={{ delay: 100 }}>
			<div>
				<h2 class="font-serif text-4xl text-news-ink mb-6 border-b border-news-ink pb-2">Redes</h2>

				<div class="flex flex-col gap-4 font-sans text-sm uppercase tracking-widest">
					<a
						href="https://github.com/PedroCarvalho768"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 border border-news-ink p-4 pt-6 hover:bg-news-ink hover:text-news-paper transition-colors"
					>
						<Code2 size={20} class="shrink-0" />
						<span class="font-bold">GitHub</span>
						<span class="ml-auto opacity-50 group-hover:opacity-100 transition-opacity">&rarr;</span
						>
					</a>

					<a
						href="https://www.linkedin.com/in/pedro-carvalho-1b57573bb"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 border border-news-ink p-4 pt-6 hover:bg-news-ink hover:text-news-paper transition-colors"
					>
						<Briefcase size={20} class="shrink-0" />
						<span class="font-bold">LinkedIn</span>
						<span class="ml-auto opacity-50 group-hover:opacity-100 transition-opacity">&rarr;</span
						>
					</a>

					<a
						href="https://www.instagram.com/pedro.carvalho768?igsh=am8zd3EzZTNiajhp"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 border border-news-ink p-4 pt-6 hover:bg-news-ink hover:text-news-paper transition-colors"
					>
						<Camera size={20} class="shrink-0" />
						<span class="font-bold">Instagram</span>
						<span class="ml-auto opacity-50 group-hover:opacity-100 transition-opacity">&rarr;</span
						>
					</a>
				</div>
			</div>
		</div>

		<div use:reveal={{ delay: 200 }}>
			<h2 class="font-serif text-4xl text-news-ink mb-6 border-b border-news-ink pb-2">Email</h2>

			<a
				href="mailto:pedrohcarvalho556@gmail.com"
				class="group flex flex-col items-center justify-center border-[6px] border-double border-news-ink p-12 text-center hover:bg-news-ink hover:text-news-paper transition-colors"
			>
				<Mail size={40} class="mb-4 transition-transform duration-300 group-hover:scale-110" />
				<span
					class="font-serif text-xl md:text-2xl text-news-ink group-hover:text-news-paper transition-colors"
				>
					pedrohcarvalho556@gmail.com
				</span>
				<span class="font-sans text-xs uppercase tracking-widest mt-3 opacity-60">
					Clique para enviar um email
				</span>
			</a>
		</div>
	</div>
</section>
