import { error } from '@sveltejs/kit';

interface BlogPostMeta {
	title: string;
	date: string;
	description: string;
}

export const load = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata as BlogPostMeta
		};
	} catch {
		throw error(404, `Post não encontrado: ${params.slug}`);
	}
};
