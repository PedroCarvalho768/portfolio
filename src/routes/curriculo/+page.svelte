<script lang="ts">
	import { reveal } from '$lib/reveal';

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
			title: 'Desenvolvedor Backend',
			company: 'LEMA Consultoria',
			period: '2026 - Atual',
			desc: 'APIs com FastAPI, automações com Selenium e browser-use, integrações com IA, manutenção de aplicações web.'
		},
		{
			title: 'Estagiário da TI',
			company: 'LEMA Consultoria',
			period: '2025 - 2026',
			desc: 'Automações em Go e Rust, Docker, APIs com Node, cálculos financeiros.'
		},
		{
			title: 'Dev Freelancer',
			company: 'Freela',
			period: '2022 - Atual',
			desc: 'Automação de processos, APIs em Python e Go, raspagem de dados, integrações com IA.'
		}
	];
</script>

<svelte:head>
	<title>Pedro | Currículo</title>
</svelte:head>

<section class="section-dark min-h-[35vh] flex items-center">
	<div class="container mx-auto px-4 py-20 md:py-24 w-full">
		<div class="max-w-5xl mx-auto" use:reveal>
			<p class="font-sans text-xs uppercase tracking-[0.25em] text-news-paper/50 mb-4">Currículo</p>
			<h1 class="title-display-dark mb-4">
				Skills &amp; Exper<span class="text-news-red">i</span>ência
			</h1>
			<div class="border-t-2 border-news-paper/30 pt-4 max-w-xl">
				<p class="font-serif text-xl md:text-2xl text-news-paper/80 leading-relaxed">
					O que sei fazer e onde fiz.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section-ink py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
			<div class="lg:col-span-1" use:reveal={{ delay: 100 }}>
				<div class="border border-news-paper/15 p-6 md:p-8">
					<h2 class="font-sans text-[10px] uppercase tracking-[0.2em] text-news-paper/40 mb-6">
						Habilidades
					</h2>

					<div class="space-y-5">
						{#each skills as skill (skill.name)}
							<div>
								<div class="flex justify-between items-baseline mb-1.5">
									<span class="font-serif text-sm font-bold text-news-paper">{skill.name}</span>
									<span class="font-sans text-[10px] uppercase tracking-wider text-news-paper/40"
										>{skill.level}</span
									>
								</div>
								<div class="w-full h-[3px] bg-news-paper/10 relative overflow-hidden">
									<div
										class="absolute top-0 left-0 h-full bg-news-red transition-all duration-700 ease-out"
										style="width: {skill.level}"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="lg:col-span-2" use:reveal={{ delay: 200 }}>
				<h2 class="font-sans text-[10px] uppercase tracking-[0.2em] text-news-paper/40 mb-8">
					Histórico Profissional
				</h2>

				<div class="space-y-14">
					{#each jobs as job (job.title)}
						<article class="relative pl-7 border-l-2 border-news-paper/20">
							<div
								class="absolute -left-[5px] top-2 w-[10px] h-[10px] bg-news-dark border-2 border-news-red"
							></div>

							<header class="mb-3">
								<h3 class="font-serif text-2xl md:text-3xl font-bold text-news-paper leading-tight">
									{job.title}
								</h3>
								<div
									class="font-sans text-[10px] uppercase tracking-wider text-news-paper/50 mt-1.5 flex items-center gap-2"
								>
									<span class="font-bold text-news-red">{job.company}</span>
									<span class="text-news-paper/20">/</span>
									<span>{job.period}</span>
								</div>
							</header>

							<p class="font-serif text-base md:text-lg text-news-paper/60 leading-relaxed">
								{job.desc}
							</p>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
