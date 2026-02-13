import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story & Vision | DevDesigns",
    description: "Learn about DevDesigns, our mission to empower businesses through digital transformation, and our passion for innovation.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
