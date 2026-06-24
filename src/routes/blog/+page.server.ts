import type { PageServerLoad } from './$types';

interface BlogPostMeta {
	title: string;
	date: string;
	description: string;
	[key: string]: unknown;
}

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob('/src/posts/*.{md,svx,svelte.md}');

	const postPromises = Object.entries(modules).map(async ([path, resolver]) => {
		const { metadata } = (await resolver()) as { metadata: BlogPostMeta };
		const slug = path.split('/').pop()?.split('.')[0] ?? '';
		return {
			slug,
			...(metadata as BlogPostMeta)
		};
	});

	let posts = await Promise.all(postPromises);

	posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
