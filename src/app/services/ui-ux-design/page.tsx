import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UIUXDesignContent from "./UIUXDesignContent";

export const metadata: Metadata = {
    title: "User-Centric UI/UX Design Services | DevDesigns",
    description: "We design digital products that people love to use. Our UI/UX design process combines research and creativity to deliver intuitive, engaging interfaces.",
};

export default function UIUXDesignPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <UIUXDesignContent />
            <Footer />
        </main>
    );
}
