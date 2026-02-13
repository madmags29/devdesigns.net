import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
                            Contact <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">Us</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            We&apos;re here to answer any questions you may have and help you get started on your next project.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact component */}
            <Contact />

            <Footer />
        </main>
    );
}
