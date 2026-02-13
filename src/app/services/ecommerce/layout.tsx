import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Scalable E-commerce Solutions | DevDesigns",
    description: "Sell more online with powerful e-commerce platforms. We build conversion-focused stores for your business growth.",
};

export default function EcommerceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
