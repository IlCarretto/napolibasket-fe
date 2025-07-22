/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "napolibasket.it",
            },
            {
                hostname: "backendcdn.vivaticket.it"
            }
        ]
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
