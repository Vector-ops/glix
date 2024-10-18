import { motion } from "framer-motion";
import React from "react";

const Tags = ({ tags, hover = false }: { tags: string[]; hover?: boolean }) => {
	return (
		<div className="flex flex-wrap justify-center items-center gap-2">
			{tags.map((tag: string, index: number) =>
				hover ? (
					<motion.p
						whileHover={{ scale: 1.04 }}
						className="w-fit px-2 py-1 rounded-xl text-stone-100 bg-stone-600 text-sm cursor-pointer"
						key={index}
					>
						#{tag.toLowerCase()}
					</motion.p>
				) : (
					<p
						className="w-fit px-2 py-1 rounded-xl text-stone-100 bg-stone-600 text-sm"
						key={index}
					>
						#{tag.toLowerCase()}
					</p>
				)
			)}
		</div>
	);
};

export default Tags;
