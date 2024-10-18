import Footer from "@/components/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/Header";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const verdana = localFont({
	src: [
		{
			path: "./fonts/verdana-font-family/verdana.ttf",
			weight: "400",
		},
		{
			path: "./fonts/verdana-font-family/verdana-bold.ttf",
			weight: "700",
		},
	],
	variable: "--font-verdana",
});

export const metadata: Metadata = {
	title: "Glix",
	description: "Reddit stories compiled in one place",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${verdana.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<main className="flex flex-col gap-2 w-full">
						<div className="flex justify-center items-center">
							<Header />
						</div>
						<div className="flex justify-center items-center mb-24">
							{children}
						</div>
						<div className="flex justify-center items-center">
							<Footer />
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
