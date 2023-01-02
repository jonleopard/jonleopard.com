//const withTwin = require('./with-twin.mjs')
import withTwin from './withTwin.js'
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = withTwin({
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    async redirects() {
        return [
            {
                source: "/dotfile-management-with-gnu-stow",
                destination: "/blog/dotfile-management-with-gnu-stow",
                permanent: true,
            },
        ];
    },
});

export default nextConfig;
