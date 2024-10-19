import React from "react";

const Footer = () => {
	const date = new Date();
	return (
		<footer className="sticky bottom-0 right-0 left-0 flex flex-col justify-between items-center gap-2 w-full border-t border-gray-300 dark:border-gray-500 p-2 px-4 pb-2 bg-white dark:bg-[#1c1b22]">
			<div className="flex flex-col md:flex-row lg:flex-row justify-between items-center w-full mr-4">
				<p className="text-lg font-bold">Glix</p>
				<p className="text-sm">Made by Vector-ops</p>
			</div>

			<p className="text-sm">Copyright {date.getFullYear()}</p>
		</footer>
	);
};

export default Footer;
