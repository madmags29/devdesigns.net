import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start-up MVP & SaaS Development | DevDesigns",
    description: "Launch your product fast with our high-speed MVP development service. Turn ideas into functional products in weeks.",
};

export default function SaasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
