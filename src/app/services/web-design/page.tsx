import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebDesignContent from "./WebDesignContent";

export const metadata: Metadata = {
    title: "Premium Web Design Services | DevDesigns",
    description: "Transform your brand with stunning, user-centric web designs from DevDesigns. We create beautiful, functional websites that engage visitors and drive conversions.",
};

export default function WebDesignPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <WebDesignContent />
            <Footer />
        </main>
    );
}
