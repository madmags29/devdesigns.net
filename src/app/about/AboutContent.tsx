"use client";

import { Users, Rocket, Target, Zap, Shield, Heart } from "lucide-react";
import { searchPhotos } from "@/lib/pexels";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutContent() {
    const [images, setImages] = useState<{ hero: string | null, innovation: string | null }>({ hero: null, innovation: null });

    useEffect(() => {
        async function loadImages() {
            const hero = await searchPhotos("modern office collaboration", 1);
            const innovation = await searchPhotos("digital technology abstract", 1);
            setImages({
                hero: hero.length > 0 ? hero[0].src.large2x : null,
                innovation: innovation.length > 0 ? innovation[0].src.large2x : null
            });
        }
        loadImages();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                {images.hero && (
                    <div className="absolute inset-0 z-0">
                        <img
                            src={images.hero}
                            alt="Innovation at DevDesigns"
                            className="w-full h-full object-cover opacity-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
                    </div>
                )}
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-heading font-bold text-primary mb-8 leading-tight"
                        >
                            Defining the Future of <br />
                            <span className="text-accent underline decoration-slate-200 decoration-8 underline-offset-8 italic px-2">Digital Excellence</span>
                        </motion.h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                            We aren&apos;t just another agency. We are your strategic partners in the digital era, dedicated to craftsmenship and innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: "Elite Projects", value: "120+" },
                            { label: "Global Clients", value: "45+" },
                            { label: "Team Experts", value: "15+" },
                            { label: "ROI Delivered", value: "$2M+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-5xl md:text-6xl font-black text-accent mb-3 transition-transform group-hover:scale-110 duration-500">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story & Vision Section */}
            <section className="py-32 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
                                Our Vision for <span className="text-accent italic">Tomorrow</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    At DevDesigns, we believe that great design is &quot;innovation meeting code.&quot; We are a team of passionate creators, engineers, and strategists dedicated to helping brands thrive in the digital age. We saw a world where &quot;good enough&quot; was becoming the norm, and we decided to challenge that.
                                </p>
                                <p>
                                    Our journey began in Faridabad, with a small team of visionaries. Today, we serve clients globally, bringing a blend of Indian ingenuity and international standards to every line of code we write.
                                </p>
                            </div>
                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Target, title: "Precision", desc: "Every pixel serving a strategic purpose." },
                                    { icon: Zap, title: "Velocity", desc: "Rapid deployment without quality loss." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                                        <item.icon className="text-accent shrink-0" size={28} />
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-3 transition-transform group-hover:rotate-1 duration-500 scale-[0.98]"></div>
                            <img
                                src={images.innovation || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"}
                                alt="Digital Innovation"
                                className="relative z-10 rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Our Core Values</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                            The principles that guide every decision we make and every project we undertake.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Integrity", desc: "Transparent processes and honest communication at every step." },
                            { icon: Heart, title: "Passion", desc: "We love what we do, and that energy is poured into your brand." },
                            { icon: Rocket, title: "Innovation", desc: "Constantly evolving our stack and methodology for your success." },
                            { icon: Users, title: "Empathy", desc: "Understanding your users as deeply as you understand your business." }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
