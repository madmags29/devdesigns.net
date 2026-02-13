import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get in Touch | DevDesigns",
    description: "Have a project in mind? Contact DevDesigns today for a free consultation and let's build something amazing together.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
