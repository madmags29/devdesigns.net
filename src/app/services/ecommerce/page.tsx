import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcommerceContent from "./EcommerceContent";

export const metadata: Metadata = {
    title: "Scalable E-commerce Solutions | DevDesigns",
    description: "Sell more with high-converting online stores from DevDesigns. We build custom e-commerce experiences that combine beautiful design with powerful backend functionality.",
};

export default function EcommercePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <EcommerceContent />
            <Footer />
        </main>
    );
}
