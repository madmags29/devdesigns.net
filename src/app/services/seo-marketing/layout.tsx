import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO & Digital Marketing Strategies | DevDesigns",
    description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies and comprehensive digital marketing.",
};

export default function SEOMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
