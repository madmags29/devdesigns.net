"use client";

import { Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { searchPhotos } from "@/lib/pexels";

export default function SaasDevelopmentContent() {
    const [heroImage, setHeroImage] = useState<string | null>(null);
    const [detailImage, setDetailImage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchImages() {
            try {
                const photos = await searchPhotos("software technology blue", 2);
                if (photos.length > 0) setHeroImage(photos[0].src.large2x);
                if (photos.length > 1) setDetailImage(photos[1].src.large2x);
            } catch (error) {
                console.error("Failed to fetch service images:", error);
            }
        }
        fetchImages();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    {heroImage && (
                        <>
                            <img
                                src={heroImage}
                                alt="SaaS Development Hero"
                                className="absolute inset-0 w-full h-full object-cover opacity-70 animate-fade-in"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-slate-50/60 to-white" />
                        </>
                    ) || <div className="absolute inset-0 bg-slate-50" />}
                </div>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 text-shadow-sm">
                                Start-up <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">MVP Development</span>
                            </h1>
                            <p className="text-xl text-slate-800 leading-relaxed mb-10 font-medium">
                                Launch your product fast with our high-speed MVP development service. We help founders turn ideas into functional, testable products in weeks, not months.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg"
                            >
                                Launch Your MVP <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                                From Idea to Market Validation
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Building a startup is about speed and learning. We focus on core features that provide value to your users, allowing you to validate your assumptions and iterate quickly based on real feedback.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Rapid Prototyping & Design",
                                    "Core Feature Development",
                                    "User Feedback Integration",
                                    "Scalable Tech Foundations",
                                    "Launch & Scaling Strategy"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-accent shrink-0" size={24} />
                                        <span className="text-lg font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="bg-accent/5 rounded-3xl overflow-hidden aspect-square flex items-center justify-center relative shadow-2xl border border-slate-100">
                                {detailImage ? (
                                    <img
                                        src={detailImage}
                                        alt="Tech Process"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <Cpu size={120} className="text-accent animate-pulse" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs group-hover:-translate-y-2 transition-transform">
                                <p className="text-sm font-bold text-primary italic">
                                    &quot;DevDesigns helped us go from concept to a live product in just 6 weeks. We secured our seed funding thanks to the MVP they built.&quot;
                                </p>
                                <p className="text-xs text-slate-400 mt-2">— David Miller, Founder of PayNext</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
