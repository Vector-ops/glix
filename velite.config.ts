import rehypeShiki from "@shikijs/rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
	name: "Post",
	pattern: ["posts/**/*.md", "posts/**/*.mdx"],
	schema: s
		.object({
			title: s.string().max(99),
			slug: s.slug("posts"),
			date: s.isodate(),
			tags: s.array(s.string()),
			description: s.string().optional(),
			cover: s.image().optional(),
			video: s.file().optional(),
			metadata: s.metadata(),
			excerpt: s.excerpt(),
			content: s.markdown(),
			link: s.string(),
			publish: s.isodate(),
		})
		.transform((data) => ({
			...data,
			permalink: `/post/${data.slug}`,
		})),
});

export default defineConfig({
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
					defaultLang: {
						block: "plaintext",
						inline: "plaintext",
					},
					filterMetaString: (string: string) =>
						string.replace(/filename="[^"]*"/, ""),

					onVisitLine(node: any) {
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}

						node.properties = {
							...node.properties,
							style: "padding: 10px;",
						};
					},
					onVisitHighlightedLine(node: any) {
						node.properties.className.push("line--highlighted");
					},
					onVisitHighlightedWord(node: any) {
						node.properties.className.push("word--highlighted");
					},

					onVisitPre(node: any) {
						const language = node.data?.meta;
						if (language) {
							const langLabel = {
								type: "element",
								tagName: "div",
								properties: { className: ["language-label"] },
								children: [{ type: "text", value: language }],
							};
							node.children.unshift(langLabel);
						}

						const lineNumbers = node.children.map(
							(_: any, index: number) => ({
								type: "element",
								tagName: "span",
								properties: { className: ["line-number"] },
								children: [
									{ type: "text", value: String(index + 1) },
								],
							})
						);

						node.children.forEach((child: any, index: number) => {
							if (
								child.type === "element" &&
								child.tagName === "div"
							) {
								child.children.unshift(lineNumbers[index]);
							}
						});

						node.properties = {
							...node.properties,
							style:
								(node.properties.style || "") +
								"margin-top: 20px; margin-bottom: 20px;",
						};
					},
				},
			],
		],
		removeComments: true,
		remarkPlugins: [remarkGfm],
		gfm: true,
	},
	mdx: {
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
					defaultLang: {
						block: "plaintext",
						inline: "plaintext",
					},
					filterMetaString: (string: string) =>
						string.replace(/filename="[^"]*"/, ""),

					onVisitLine(node: any) {
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}

						node.properties = {
							...node.properties,
							style: "padding: 10px;",
						};
					},
					onVisitHighlightedLine(node: any) {
						node.properties.className.push("line--highlighted");
					},
					onVisitHighlightedWord(node: any) {
						node.properties.className.push("word--highlighted");
					},

					onVisitPre(node: any) {
						const language = node.data?.meta;
						if (language) {
							const langLabel = {
								type: "element",
								tagName: "div",
								properties: { className: ["language-label"] },
								children: [{ type: "text", value: language }],
							};
							node.children.unshift(langLabel);
						}

						const lineNumbers = node.children.map(
							(_: any, index: number) => ({
								type: "element",
								tagName: "span",
								properties: { className: ["line-number"] },
								children: [
									{ type: "text", value: String(index + 1) },
								],
							})
						);

						node.children.forEach((child: any, index: number) => {
							if (
								child.type === "element" &&
								child.tagName === "div"
							) {
								child.children.unshift(lineNumbers[index]);
							}
						});

						node.properties = {
							...node.properties,
							style:
								(node.properties.style || "") +
								"margin-top: 20px; margin-bottom: 20px;",
						};
					},
				},
			],
		],
		removeComments: true,
		remarkPlugins: [remarkGfm],
		gfm: true,
	},
	collections: {
		posts,
	},
});
