import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebDevelopmentContent from "./WebDevelopmentContent";

export const metadata: Metadata = {
    title: "Robust Web Development Services | DevDesigns",
    description: "Scalable, secure, and high-performance applications built with the latest technologies. From complex enterprise systems to elegant web apps, we deliver code that works.",
};

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <WebDevelopmentContent />
            <Footer />
        </main>
    );
}
