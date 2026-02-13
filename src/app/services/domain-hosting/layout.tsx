import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Domain & Hosting Services | DevDesigns",
    description: "Reliable domain registration and high-performance hosting solutions. Secure, fast, and scalable infrastructure for your digital presence.",
};

export default function DomainHostingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
