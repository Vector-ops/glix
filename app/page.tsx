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
	}, []);

	return (
		<div className="flex flex-col justify-center items-center w-full lg:w-[50%] m-4 gap-8">
			<h1 className="text-4xl font-bold text-red-400">Welcome to Glix</h1>
			<div className="flex flex-col justify-center items-start gap-4">
				<div className="flex flex-col justify-center items-center gap-4">
					<div>
						Glix is your go-to website for discovering fascinating
						stories from Reddit! We curate interesting posts that
						link directly back to the original comments or
						discussions on Reddit, allowing you to explore deeper
						and engage with the community.
					</div>
					<div>
						<h2 className="text-lg font-semibold text-red-400">
							Share Your Favorites
						</h2>
						We invite you to share your favorite Reddit stories with
						us—just drop the link below! Whether it’s a heartwarming
						tale, a funny anecdote, or an intriguing discussion, we
						want to hear from you! We are also open to stories that
						are not on Reddit, so feel free to share any captivating
						narratives you think should be featured.
					</div>

					<div>
						<h2 className="text-lg font-semibold text-red-400">
							Content Guidelines
						</h2>
						While we aim to showcase a variety of interesting
						content, we focus on stories that are engaging and
						thought-provoking. Please keep this in mind when
						submitting links.
					</div>

					<div>
						<h2 className="text-lg font-semibold text-red-400">
							Removal Requests
						</h2>
						If you own a story featured here and wish to have it
						removed, please contact us with the link, and we will
						ensure its removal within 24 hours. Your rights as a
						creator are important to us.
					</div>

					<div>
						<h2 className="text-lg font-semibold text-red-400">
							Privacy Assurance
						</h2>
						At Glix, we prioritize your privacy. We do not collect
						or share any personal data from our users. Glix does not
						require you to login or register to read the posts. Our
						platform is designed to be a safe space for sharing
						captivating narratives without any explicit or private
						content.
					</div>

					<div>
						<h2 className="text-lg font-semibold text-red-400">
							Development Notice
						</h2>
						Please note that Glix is still under development, and
						errors are to be expected. We appreciate your
						understanding as we work to improve the site and enhance
						your experience.
					</div>

					<div>
						<h2 className="text-lg font-semibold text-red-400">
							Join Us!
						</h2>
						Explore our collection of stories and contribute your
						favorites today. Thank you for being part of the Glix
						community!
					</div>
				</div>
				<Button />
			</div>
			<div className="flex flex-col justify-center items-center gap-4 w-full">
				<div className="flex justify-between items-center w-full">
					<h2 className="text-lg font-semibold">Latest Posts</h2>
					<p className="underline hover:text-red-400">
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
