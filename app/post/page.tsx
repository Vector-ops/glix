"use client";

import { posts } from "@/.velite";
import PostCard from "@/components/PostCard";
import React, { useEffect, useState } from "react";
import { IPost } from "../types";

const page = () => {
	const [orderedPosts, setOrderedPosts] = useState<IPost[]>();

	useEffect(() => {
		const sortedPosts = posts.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);

			return dateA > dateB ? -1 : 1;
		});

		setOrderedPosts(sortedPosts);
	}, [posts]);

	return (
		<div className="flex flex-col justify-center items-center gap-4 w-full m-4 flex-wrap">
			{orderedPosts?.map((post, index) => (
				<PostCard post={post} key={index} />
			))}
		</div>
	);
};

export default page;
