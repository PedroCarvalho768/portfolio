export function reveal(node: HTMLElement, { delay = 0 }: { delay?: number } = {}) {
	node.style.opacity = '0';
	node.style.transform = 'translateY(24px)';
	node.style.transition = `opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), transform 600ms cubic-bezier(0.22, 1, 0.36, 1)`;

	if (delay) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					observer.unobserve(node);
				}
			});
		},
		{
			threshold: 0.05,
			rootMargin: '0px 0px -30px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
