import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Professional Web Design Services | DevDesigns",
    description: "Transform your brand with stunning, user-centric designs. We create websites that are as beautiful as they are functional.",
};

export default function WebDesignLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
