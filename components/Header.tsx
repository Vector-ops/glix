"use client";

import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
	return (
		<div className="sticky top-0 w-full p-4 z-10 transition-colors duration-200 bg-white dark:bg-[#1c1b22] drop-shadow-md rounded-lg">
			<header className="flex justify-between items-center w-full ">
				<Link href="/" className="text-xl font-semibold">
					Glix
				</Link>
				<ThemeToggle />
			</header>
		</div>
	);
};

export default Header;
