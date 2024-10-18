import { posts } from "@/.velite";
import PostCard from "@/components/PostCard";
import React from "react";

const page = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-4 w-full m-4 flex-wrap">
			{posts.map((post, index) => (
				<PostCard post={post} key={index} />
			))}
		</div>
	);
};

export default page;
