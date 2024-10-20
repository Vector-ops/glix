"use client";

import { Article, House, MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
	return (
		<div className="sticky top-0 w-full p-4 z-10 transition-colors duration-200 bg-white dark:bg-[#1c1b22] drop-shadow-md rounded-lg">
			<header className="flex justify-between items-center w-full ">
				<Link href="/" className="text-3xl font-bold text-red-400">
					Glix
				</Link>
				<div className="flex justify-center items-center gap-8">
					<Link href="/" className="hover:text-red-400">
						<House size={20} />
					</Link>
					<Link href="/post" className="hover:text-red-400">
						<Article size={20} />
					</Link>
					<Link href={"/search"} className="hover:text-red-400">
						<MagnifyingGlass size={20} />
					</Link>
					<ThemeToggle />
				</div>
			</header>
		</div>
	);
};

export default Header;
