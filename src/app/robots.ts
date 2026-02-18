import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://devdesigns-f93mytdl8-majid-khans-projects-678992a4.vercel.app/sitemap.xml',
    };
}
