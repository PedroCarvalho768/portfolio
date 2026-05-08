<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { Wrench, Briefcase } from 'lucide-svelte';

	const skills = [
		{ name: 'Python (FastAPI / Flask)', level: '95%' },
		{ name: 'Automação (Selenium / browser-use)', level: '90%' },
		{ name: 'Go', level: '80%' },
		{ name: 'PostgreSQL', level: '80%' },
		{ name: 'Docker', level: '75%' },
		{ name: 'Node.js (Backend)', level: '75%' },
		{ name: 'Playwright (Testes)', level: '70%' },
		{ name: 'Rust', level: '60%' },
		{ name: 'Deploy na Sexta 18h', level: '15%' },
		{ name: 'Ignorar o Linter', level: '8%' }
	];

	const jobs = [
		{
			title: 'Dev Freelancer',
			company: 'Freela',
			period: '2022 - Atual',
			desc: 'Automação de processos, APIs em Python e Go, raspagem de dados, integrações com IA.'
		},
		{
			title: 'Estagiário da TI',
			company: 'LEMA Consultoria',
			period: '2025 - 2026',
			desc: 'Automações em Go e Rust, Docker, APIs com Node, cálculos financeiros.'
		},
		{
			title: 'Desenvolvedor Backend',
			company: 'LEMA Consultoria',
			period: '2026 - Atual',
			desc: 'APIs com FastAPI, automações com Selenium e browser-use, integrações com IA, manutenção de aplicações web.'
		}
	];
</script>

<svelte:head>
	<title>Pedro | Currículo</title>
</svelte:head>

<section class="max-w-5xl mx-auto py-12">
	<div class="text-center mb-16 border-b-4 border-double border-news-ink pb-8" use:reveal>
		<h1 class="font-serif text-4xl md:text-7xl text-news-ink tracking-wide mb-4 pt-4 md:pt-6">
			Skills & Experiência
		</h1>
		<p class="font-sans text-sm uppercase tracking-widest text-news-inkLight">
			Minhas habilidades e trajetória.
		</p>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
		<div
			class="lg:col-span-1 border-r-0 lg:border-r border-news-ink lg:pr-12"
			use:reveal={{ delay: 100 }}
		>
			<h2
				class="font-serif text-4xl text-news-ink mb-6 border-b border-news-ink pb-2 text-center inline-flex items-center justify-center gap-3 w-full"
			>
				<Wrench size={28} class="text-news-inkLight" />
				Habilidades
			</h2>

			<div class="space-y-6 font-serif">
				{#each skills as skill, i (skill.name)}
					<div class="border-b border-news-ink pb-2" use:reveal={{ delay: 100 * (i + 1) }}>
						<div class="flex justify-between items-baseline mb-1">
							<span class="text-news-ink font-bold">{skill.name}</span>
							<span class="text-news-inkLight text-sm font-sans">{skill.level}</span>
						</div>
						<div class="w-full h-1 bg-news-ink/10 relative overflow-hidden">
	<div
		class="absolute top-0 left-0 h-full bg-news-ink transition-all duration-700 ease-out"
		style="width: {skill.level}"
	></div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="lg:col-span-2" use:reveal={{ delay: 200 }}>
			<h2
				class="font-serif text-4xl text-news-ink mb-8 border-b border-news-ink pb-2 text-center inline-flex items-center justify-center gap-3 w-full"
			>
				<Briefcase size={28} class="text-news-inkLight" />
				Histórico Profissional
			</h2>

			<div class="space-y-12">
				{#each jobs as job, index (job.title)}
					<article
						use:reveal={{ delay: 100 * (index + 1) }}
						class="relative pl-6 border-l-2 border-news-ink"
					>
						<div class="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-news-ink"></div>

						<header class="mb-3">
							<h3 class="font-serif text-3xl text-news-ink leading-tight">{job.title}</h3>
							<div
								class="font-sans text-xs uppercase tracking-wider text-news-inkLight mt-1 flex items-center gap-2"
							>
								<span class="font-bold">{job.company}</span>
								<span>&mdash;</span>
								<span>{job.period}</span>
							</div>
						</header>

						<p class="font-serif text-news-ink leading-relaxed">
							{job.desc}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
