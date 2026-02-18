import { Organization, WebSite, Service, WithContext } from 'schema-dts';

export default function JsonLd() {
    const organization: WithContext<Organization> = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DevDesigns',
        url: 'https://www.devdesigns.net',
        logo: 'https://www.devdesigns.net/logo.svg',
        sameAs: [
            // Add social media links here
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '', // Add phone if available
            contactType: 'customer service',
        },
    };

    const website: WithContext<WebSite> = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'DevDesigns',
        url: 'https://www.devdesigns.net',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify([organization, website]),
            }}
        />
    );
}
