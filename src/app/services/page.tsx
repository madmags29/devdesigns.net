import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
                            Solutions for Every <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">Digital Need</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            We offer a wide range of services to help you build, launch, and grow your digital presence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services component */}
            <Services />

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Process</h2>
                        <p className="text-slate-600">How we bring your ideas to life</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your goals and target audience." },
                            { step: "02", title: "Planning", desc: "Creating a roadmap and architecture for success." },
                            { step: "03", title: "Execution", desc: "Designing and building with modern standards." },
                            { step: "04", title: "Launch", desc: "Going live and gathering initial feedback." },
                        ].map((p, i) => (
                            <div key={i} className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-primary hover:text-white transition-all duration-300">
                                <div className="text-5xl font-black text-slate-200 group-hover:text-white/20 mb-6 transition-colors">{p.step}</div>
                                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                                <p className="text-slate-500 group-hover:text-slate-300 transition-colors">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Want a custom solution?</h2>
                    <p className="text-slate-300 mb-10 max-w-xl mx-auto">
                        Let&apos;s talk about your specific requirements and how we can help you achieve your goals.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent-dark transition-all"
                    >
                        Get a Free Quote <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
