import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DomainHostingContent from "./DomainHostingContent";

export const metadata: Metadata = {
    title: "Reliable Domain & Hosting Services | DevDesigns",
    description: "Secure, high-speed infrastructure for modern websites. From domain registration to managed cloud hosting, we ensure your site is always online and fast.",
};

export default function DomainHostingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <DomainHostingContent />
            <Footer />
        </main>
    );
}
