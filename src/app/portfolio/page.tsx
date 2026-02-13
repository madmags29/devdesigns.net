import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
                            Our <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">Portfolio</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Explore our latest projects and see how we help our clients succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Portfolio component */}
            <Portfolio />

            {/* FAQ or Testimonials could go here */}

            <Footer />
        </main>
    );
}
