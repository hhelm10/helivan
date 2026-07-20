// next.config.mjs

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math';
import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";


/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
        ];
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        mdxRs: false,
    }
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    }
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

