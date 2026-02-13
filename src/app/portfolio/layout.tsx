import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work & Success Stories | DevDesigns",
    description: "Explore the DevDesigns portfolio and see how we've helped our clients succeed with top-tier digital solutions.",
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
