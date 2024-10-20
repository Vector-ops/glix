"use client";
import { posts } from "@/.velite";
import PostCard from "@/components/PostCard";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { IPost } from "../types";

enum SearchType {
	POST = "post",
	TAG = "tag",
	ALL = "all",
}

const Page = () => {
	const [type, setType] = useState<SearchType>(SearchType.POST);
	const [input, setInput] = useState<string>("");
	const [searchedPosts, setSearchedPosts] = useState<IPost[] | null>(null);

	useEffect(() => {
		const searchPosts = () => {
			if (input === "") {
				setSearchedPosts(posts);
				return;
			}
			let filteredPosts = null;
			switch (type) {
				case SearchType.POST:
					filteredPosts = posts.filter((post) =>
						post.title.toLowerCase().includes(input.toLowerCase())
					);
					break;

				case SearchType.TAG:
					filteredPosts = posts.filter((post) =>
						post.tags.some((tag) =>
							tag.toLowerCase().includes(input.toLowerCase())
						)
					);
					break;
				default:
					filteredPosts = posts.filter(
						(post) =>
							post.title
								.toLowerCase()
								.includes(input.toLowerCase()) ||
							post.tags.some((tag) =>
								tag.toLowerCase().includes(input.toLowerCase())
							)
					);
					break;
			}
			setSearchedPosts(filteredPosts);
		};
		searchPosts();
	}, [type, input]);

	return (
		<div className="h-full w-full flex flex-col justify-start items-center gap-8 p-4">
			<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-4 w-full md:w-[50%] lg:w-[50%]">
				<div className="relative w-full border border-gray-300 h-[35px] rounded-2xl ">
					<input
						type="text"
						className="w-full h-full rounded-2xl px-2 py-1 text-sm"
						placeholder="The Whistler"
						onChange={(e) => setInput(e.target.value)}
					/>
					<MagnifyingGlass
						size={20}
						className="absolute top-1.5 right-2"
					/>
				</div>
				<select
					value={type}
					onChange={(e) => setType(e.target.value as SearchType)}
					className="w-[70px] h-[38px] rounded-xl p-2 border border-gray-300"
				>
					<option value={SearchType.POST}>Post</option>
					<option value={SearchType.TAG}>Tag</option>
					<option value={SearchType.ALL}>All</option>
				</select>
			</div>
			<div className="flex flex-col justify-center items-center gap-2">
				{searchedPosts && searchedPosts?.length > 0 ? (
					<div className="flex flex-col justify-center items-center gap-4">
						{searchedPosts.map((post, index) => (
							<PostCard post={post} key={index} />
						))}
					</div>
				) : (
					<div className="flex justify-center items-center font-semibold text-lg text-red-400 mt-52">
						No Posts Found :(
					</div>
				)}
			</div>
		</div>
	);
};

export default Page;
