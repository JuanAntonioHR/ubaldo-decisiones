/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'sanluispotosi.quadratin.com.mx',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'images-na.ssl-images-amazon.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'i.blogs.es',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'www.caritas.org.mx',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'i0.wp.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'mapsicologos.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'media.semprefamilia.com.br',
                port: '',
            },
        ]
    },
};

export default nextConfig;