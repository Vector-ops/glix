import removeImports from "next-remove-imports";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default removeImports(nextConfig);
