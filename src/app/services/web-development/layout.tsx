import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expert Web Development Services | DevDesigns",
    description: "Performance-driven development using modern technologies. We build robust, scalable, and secure web applications.",
};

export default function WebDevelopmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
