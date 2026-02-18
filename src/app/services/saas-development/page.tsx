import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SaasDevelopmentContent from "./SaasDevelopmentContent";

export const metadata: Metadata = {
    title: "SaaS & MVP Development Services | DevDesigns",
    description: "Launch your product fast with our high-speed MVP development service. We help founders turn ideas into functional, testable products in weeks.",
};

export default function SaasDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <SaasDevelopmentContent />
            <Footer />
        </main>
    );
}
