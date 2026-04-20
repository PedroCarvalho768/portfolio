<script lang="ts">
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>Pedro | Desenvolvedor Backend</title>
</svelte:head>

<section class="py-12 md:py-16 border-b-2 border-news-ink mb-12">
	<div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
		<div class="flex-1" use:reveal>
			<h1 class="text-4xl md:text-6xl font-serif font-normal mb-6 text-news-ink leading-tight">
				Eaí, eu sou o Pedro!
			</h1>
			<div class="border-y-2 border-news-ink py-4 mb-6">
				<p class="font-serif text-xl md:text-2xl leading-relaxed text-news-ink">
					Desenvolvedor Backend (mas eu me viro no front) focado em construir aplicações rápidas, e
					cheias de funcionalidade.
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

		<div
			class="md:w-1/3 border-t md:border-t-0 md:border-l border-news-ink pt-8 md:pt-0 md:pl-8"
			use:reveal={{ delay: 100 }}
		>
			<div class="mb-8">
				<h2 class="font-serif text-3xl mb-4 text-news-ink">O Que Eu Faço</h2>
				<ul class="font-serif text-lg space-y-3 text-news-inkLight list-disc list-inside">
					<li>Backend Development</li>
					<li>API's</li>
					<li>Automações</li>
					<li>Workflows de IA</li>
				</ul>
			</div>

			<div class="border-t border-news-ink pt-6">
				<h2 class="font-serif text-3xl mb-4 text-news-ink">Minha Vibe</h2>
				<p class="font-serif text-news-inkLight leading-relaxed">
					A tecnologia está aqui para melhorar a nossa eficiência, quanto menos tempo perdemos
					fazendo tarefas chatas e repetitivas, mais tempo tempos para viver.
				</p>
			</div>
		</div>
	</div>
</section>
