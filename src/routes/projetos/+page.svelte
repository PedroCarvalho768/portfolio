<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { ArrowUpRight, GitBranch, Cpu, Zap, Workflow, Globe } from 'lucide-svelte';

	const projects = [
		{
			title: 'FastAPI Core',
			description: 'API modular com autenticação JWT, rate limiting e documentação automática.',
			tags: ['Python', 'FastAPI', 'PostgreSQL'],
			icon: Cpu
		},
		{
			title: 'Browser Automator',
			description:
				'Orquestrador de navegadores headless para automação de fluxos complexos com Selenium e browser-use.',
			tags: ['Python', 'Selenium', 'Docker'],
			icon: Zap
		},
		{
			title: 'Pipeline CLI',
			description: 'CLI em Go para orquestração de pipelines de dados com execução concorrente.',
			tags: ['Go', 'Docker', 'CLI'],
			icon: GitBranch
		},
		{
			title: 'IA Integration Bridge',
			description:
				'Middleware que conecta modelos de linguagem a sistemas legados via API unificada.',
			tags: ['Python', 'FastAPI', 'LLM'],
			icon: Workflow
		},
		{
			title: 'DevOps Toolkit',
			description:
				'Coleção de scripts e automações para deploy, backup e monitoramento de servidores.',
			tags: ['Docker', 'Rust', 'Shell'],
			icon: Globe
		}
	];
</script>

<svelte:head>
	<title>Pedro | Projetos</title>
</svelte:head>

<section class="section-dark min-h-[40vh] flex items-center">
	<div class="container mx-auto px-4 py-20 md:py-28 w-full">
		<div class="max-w-5xl mx-auto" use:reveal>
			<p class="font-sans text-xs uppercase tracking-[0.25em] text-news-paper/50 mb-4">Portfolio</p>
			<h1 class="title-display-dark mb-4">Pro<span class="text-news-red">j</span>etos</h1>
			<div class="border-t-2 border-news-paper/30 pt-4 max-w-xl">
				<p class="font-serif text-xl md:text-2xl text-news-paper/80 leading-relaxed">
					Código que fiz, coisa que entreguei.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section-ink py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each projects as project, i (project.title)}
				<article class="card-news" use:reveal={{ delay: 100 * (i + 1) }}>
					<div class="p-6 md:p-8">
						<header class="flex items-start justify-between mb-4">
							<project.icon size={24} class="text-news-paper/60 transition-colors shrink-0" />
							<ArrowUpRight size={16} class="text-news-paper/30 transition-all shrink-0" />
						</header>

						<h2
							class="font-serif text-2xl md:text-3xl font-bold text-news-paper mb-3 leading-tight"
						>
							{project.title}
						</h2>

						<p class="font-serif text-base text-news-paper/60 leading-relaxed mb-6">
							{project.description}
						</p>

						<div class="flex flex-wrap gap-2">
							{#each project.tags as tag (tag)}
								<span
									class="font-sans text-[10px] uppercase tracking-widest border border-news-paper/20 px-2 py-1 text-news-paper/50"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section-dark py-20">
	<div class="container mx-auto px-4 text-center" use:reveal>
		<div class="max-w-2xl mx-auto">
			<h2 class="title-news-dark text-hero-sm mb-4">Quer ver mais?</h2>
			<p class="font-serif text-lg text-news-paper/70 leading-relaxed mb-8">
				Os repositórios tão no GitHub. Clica lá pra ver o código real.
			</p>
			<a
				href="https://github.com/PedroCarvalho768"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-news-red/70 border border-news-red/30 px-6 py-3 hover:bg-news-red hover:text-news-paper transition-all"
			>
				<GitBranch size={14} />
				<span>GitHub</span>
				<ArrowUpRight size={14} />
			</a>
		</div>
	</div>
</section>
