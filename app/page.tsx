"use client";
import { posts } from "@/.velite";
import Button from "@/components/Button";
import RecentPostCard from "@/components/RecentPostCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IPost } from "./types";

const Home = () => {
	const [recentPosts, setRecentPosts] = useState<IPost[]>();

	useEffect(() => {
		const sortedPosts = posts.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);

			return dateA > dateB ? -1 : 1;
		});

		setRecentPosts(sortedPosts.slice(0, 6));
	}, [posts]);

	return (
		<div className="flex flex-col justify-center items-center w-full lg:w-[50%] m-4 gap-8">
			<h1 className="text-4xl font-bold">Welcome to Glix</h1>
			<div className="flex flex-col justify-center items-start gap-4">
				<p>
					Glix is a simple website to find all the interesting reddit
					stories. All the posts contain links to the original comment
					or post on reddit. If you would like to see your favourite
					post on the site drop me the link below. All the posts are
					taken directly from reddit and no stories are altered.
				</p>
				<Button />
			</div>
			<div className="flex flex-col justify-center items-center gap-4 w-full">
				<div className="flex justify-between items-center w-full">
					<h2 className="text-lg font-semibold">Latest Posts</h2>
					<p className="underline hover:text-blue-400">
						<Link href="/post">{"all posts ->"}</Link>
					</p>
				</div>
				<div className="flex flex-col flex-wrap md:flex-row lg:flex-row justify-center items-center gap-4 w-full">
					{recentPosts?.map((post, index) => (
						<RecentPostCard post={post} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
