import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Award, Users, Rocket } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
                            Our Story of <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">Innovation</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Founded in 2024, DevDesigns was born out of a passion for creating digital experiences that leave a lasting impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">50+</div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Projects Done</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">30+</div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">5+</div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">99%</div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Our Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To empower businesses through digital transformation, providing them with the tools and strategies
                                they need to scale and succeed in an ever-evolving digital world.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "User-centric design focus",
                                    "Performance-driven development",
                                    "Strategic digital marketing",
                                    "Unwavering client support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-accent" size={20} />
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-8 rounded-3xl space-y-4">
                                < Award className="text-accent" size={32} />
                                <h4 className="font-bold text-primary">Quality First</h4>
                                <p className="text-sm text-slate-500">We never compromise on the quality of our code or design.</p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl space-y-4 mt-8">
                                < Users className="text-accent" size={32} />
                                <h4 className="font-bold text-primary">Client Focused</h4>
                                <p className="text-sm text-slate-500">Your success is our success. We build for your growth.</p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl space-y-4">
                                < Rocket className="text-accent" size={32} />
                                <h4 className="font-bold text-primary">Agile Process</h4>
                                <p className="text-sm text-slate-500">Rapid development and iterative feedback loops.</p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl space-y-4 mt-8">
                                <CheckCircle2 className="text-accent" size={32} />
                                <h4 className="font-bold text-primary">Proven Results</h4>
                                <p className="text-sm text-slate-500">Data-backed strategies that drive conversion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
