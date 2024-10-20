import { PaperPlaneTilt } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const Button = () => {
	return (
		<div
			className="w-16 h-10 border border-gray-500 
		bg-white dark:bg-gray-900 dark:border-stone-300 rounded-xl flex justify-center items-center hover:bg-stone-300 dark:hover:bg-stone-800 cursor-pointer dark:hover:text-white"
		>
			<Link href="mailto:infernorift44@gmail.com" target="_blank">
				<PaperPlaneTilt weight="fill" />
			</Link>
		</div>
	);
};

export default Button;
