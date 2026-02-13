import { Metadata } from "next";

export const metadata: Metadata = {
    title: "User-Centric UI/UX Design | DevDesigns",
    description: "We design intuitive interfaces and seamless user experiences that delight users and drive business results.",
};

export default function UIUXLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
