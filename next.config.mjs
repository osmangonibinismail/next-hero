/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.themealdb.com',
                port: "",
                pathname: "/**"
            }
        ]
    },
    redirects : async () => {
        return [
            {
                source: '/about',
                destination: '/post',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
