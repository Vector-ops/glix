"use client";

import { IPost } from "@/app/types";
import { getFormattedDate } from "@/utils/getFormattedDate";
import { useEffect, useState } from "react";

import { posts } from ".velite";
import Tags from "@/components/Tags";
import Link from "next/link";

export interface PostProps {
	params: {
		slug: string;
	};
}

const Post = ({ params }: PostProps) => {
	const [post, setPost] = useState<IPost>();

	useEffect(() => {
		setPost(posts.find((post) => post.slug === params.slug));
	}, [params.slug]);

	const date = post && getFormattedDate(post.date);

	return (
		post && (
			<div className="flex flex-col justify-center items-center gap-4 mt-8 w-[80%] md:w-[90%] lg:w-[40%]">
				<h1 className="text-4xl font-bold text-center">
					{post?.title}
				</h1>
				<Tags tags={post?.tags} hover />
				<p className="text-sm text-gray-900 dark:text-stone-300">
					{date} - {post?.metadata.readingTime} min read
				</p>
				<Link
					href={post.link}
					target="_blank"
					className="text-sm underline hover:text-red-400"
				>
					Original Post
				</Link>
				<div className="border-t border-gray-300 dark:border-gray-600 w-full"></div>
				<article
					className="prose dark:prose-invert lg:prose-xl w-full"
					dangerouslySetInnerHTML={{ __html: post.content }}
				></article>
			</div>
		)
	);
};

export default Post;
