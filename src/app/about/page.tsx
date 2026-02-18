import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Us | DevDesigns",
    description: "Learn about DevDesigns, our team, our vision for digital excellence, and our commitment to innovation and craftsmanship.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <AboutContent />
            <Footer />
        </main>
    );
}
