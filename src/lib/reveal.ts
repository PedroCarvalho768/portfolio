export function reveal(node: HTMLElement, { delay = 0 }: { delay?: number } = {}) {
	node.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-300');

	if (delay) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.remove('opacity-0', 'translate-y-8');
					node.classList.add('opacity-100', 'translate-y-0');
					observer.unobserve(node);
				}
			});
		},
		{
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
