<script lang="ts">
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>Pedro | Contato</title>
</svelte:head>

<section class="max-w-5xl mx-auto py-12">
	<div class="text-center mb-16 border-b-4 border-double border-news-ink pb-8" use:reveal>
		<h1 class="font-serif text-4xl md:text-7xl text-news-ink tracking-wide mb-4 pt-4 md:pt-6">
			Contato
		</h1>
		<p class="font-sans text-sm uppercase tracking-widest text-news-inkLight">Bora trocar ideia?</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
		<div class="space-y-8" use:reveal={{ delay: 100 }}>
			<div>
				<h2 class="font-serif text-4xl text-news-ink mb-6 border-b border-news-ink pb-2">
					Onde me encontrar
				</h2>
				<p class="font-serif text-lg text-news-ink leading-relaxed mb-8">
					Tem um projeto em mente, quer trocar ideias ou falar de nerdices? Me chama em uma das
					redes abaixo.
				</p>

				<div class="flex flex-col gap-4 font-sans text-sm uppercase tracking-widest">
					<a
						href="https://github.com/PedroCarvalho768"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-between border border-news-ink p-4 pt-6 hover:bg-news-ink hover:text-news-paper transition-colors"
					>
						<span class="font-bold">GitHub</span>
						<span>&rarr;</span>
					</a>

					<a
						href="https://www.linkedin.com/in/pedro-carvalho-1b57573bb"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-between border border-news-ink p-4 pt-6 hover:bg-news-ink hover:text-news-paper transition-colors"
					>
						<span class="font-bold">LinkedIn</span>
						<span>&rarr;</span>
					</a>

					<a
						href="https://www.instagram.com/pedro.carvalho768?igsh=am8zd3EzZTNiajhp"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-between border border-news-ink p-4 pt-6 hover:bg-news-ink hover:text-news-paper transition-colors"
					>
						<span class="font-bold">Instagram</span>
						<span>&rarr;</span>
					</a>
				</div>
			</div>
		</div>

		<div use:reveal={{ delay: 200 }}>
			<h2 class="font-serif text-4xl text-news-ink mb-6 border-b border-news-ink pb-2">
				Mande uma mensagem
			</h2>

			<form
				action="https://formspree.io/f/SEU_ID_AQUI"
				method="POST"
				class="flex flex-col gap-8 font-serif"
			>
				<div class="flex flex-col gap-1 relative">
					<label
						for="name"
						class="text-sm font-bold text-news-inkLight uppercase tracking-widest font-sans"
						>Seu Nome</label
					>
					<input
						type="text"
						id="name"
						name="name"
						required
						class="bg-transparent border-b-2 border-news-ink/50 focus:border-news-ink focus:border-solid py-2 px-1 text-lg outline-none transition-colors"
						placeholder="Como te chamam?"
					/>
				</div>

				<div class="flex flex-col gap-1 relative">
					<label
						for="email"
						class="text-sm font-bold text-news-inkLight uppercase tracking-widest font-sans"
						>Email</label
					>
					<input
						type="email"
						id="email"
						name="email"
						required
						class="bg-transparent border-b-2 border-news-ink/50 focus:border-news-ink focus:border-solid py-2 px-1 text-lg outline-none transition-colors"
						placeholder="seu@email.com"
					/>
				</div>

				<div class="flex flex-col gap-1 relative">
					<label
						for="message"
						class="text-sm font-bold text-news-inkLight uppercase tracking-widest font-sans"
						>Mensagem</label
					>
					<textarea
						id="message"
						name="message"
						required
						rows="5"
						class="bg-transparent border border-news-ink/50 focus:border-news-ink focus:border-solid p-3 text-lg outline-none transition-colors resize-none mt-2"
						placeholder="Manda a braba..."
					></textarea>
				</div>

				<button
					type="submit"
					class="mt-4 font-sans text-sm font-bold uppercase tracking-widest text-news-paper bg-news-ink border border-news-ink px-8 py-4 hover:bg-news-paper hover:text-news-ink transition-colors"
				>
					Enviar Mensagem
				</button>
			</form>
		</div>
	</div>
</section>
