import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMarketingContent from "./SEOMarketingContent";

export const metadata: Metadata = {
    title: "Data-Driven SEO & Marketing Services | DevDesigns",
    description: "Get found by your ideal customers with expert SEO and digital marketing from DevDesigns. We combine strategy and data to drive sustainable growth.",
};

export default function SEOMarketingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <SEOMarketingContent />
            <Footer />
        </main>
    );
}
