"use client";

import { getFormattedDate } from "@/utils/getFormattedDate";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IPost } from "../app/types";
import Tags from "./Tags";

interface IPostCardProps {
	post: IPost;
}

const PostCard = ({ post }: IPostCardProps) => {
	const [displayContent, setDisplayContent] = useState("");
	const router = useRouter();

	const getContentLength = () => {
		const windowWidth = window.innerWidth;

		if (windowWidth < 600) {
			return 200;
		} else if (windowWidth < 900) {
			return 300;
		} else {
			return 500;
		}
	};

	const updateContentLength = () => {
		const length = getContentLength();
		setDisplayContent(
			post.description
				? post.description.slice(0, length)
				: post.excerpt.slice(0, length) + "..."
		);
	};

	useEffect(() => {
		updateContentLength();

		window.addEventListener("resize", updateContentLength);

		return () => {
			window.removeEventListener("resize", updateContentLength);
		};
	}, [post.content]);

	const publishDate = getFormattedDate(post.date);

	return (
		<motion.div
			whileHover={{ x: 5 }}
			className="flex flex-col justify-center items-start gap-4
w-full lg:w-[50%] xl:w-[50%] max-h-[340px] border border-stone-300 rounded-xl p-4 opacity-90 bg-stone-300 text-gray-900 dark:bg-stone-800 dark:text-white cursor-pointer"
			onClick={() => router.push(`post/${post.slug}`)}
		>
			<div className="flex justify-between items-center w-full text-xs text-text-default dark:text-text-dark">
				<div>{publishDate}</div>
				<div>{post.metadata.readingTime} min read</div>
			</div>
			<p className="font-semibold text-md text-gray-900 dark:text-white">
				{post.title}
			</p>
			<Tags tags={post.tags} />
			<p className="text-gray-900 dark:text-gray-300 text-sm">
				{displayContent}
			</p>
			<Link
				href={`post/${post.slug}`}
				className="text-sm hover:underline"
			>
				{"read more ->"}
			</Link>
		</motion.div>
	);
};

export default PostCard;
