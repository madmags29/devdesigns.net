"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Laptop, Layout, Smartphone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { searchVideos, PexelsVideo } from "@/lib/pexels";

export default function Hero() {
    const [video, setVideo] = useState<PexelsVideo | null>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        async function fetchHeroMedia() {
            try {
                const videos = await searchVideos("abstract technology digital background", 1);
                if (videos.length > 0) {
                    setVideo(videos[0]);
                }
            } catch (error) {
                console.error("Failed to fetch hero media:", error);
            }
        }
        fetchHeroMedia();
    }, []);

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[85vh] flex items-center">
            {/* Background Layer */}
            <div className="absolute inset-0 -z-10 bg-slate-50">
                {video && (
                    <div className="absolute inset-0 overflow-hidden">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            onCanPlay={() => setIsVideoLoaded(true)}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-70' : 'opacity-0'}`}
                            poster={video.image}
                        >
                            <source src={video.video_files.find(f => f.quality === 'hd')?.link || video.video_files[0]?.link} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white" />
                    </div>
                )}
                {!isVideoLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-3xl shadow-2xl" />
                    </div>
                )}
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                Innovation Meets Code
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-[1.1] mb-6">
                                Crafting <span className="text-accent underline decoration-slate-200 decoration-8 underline-offset-8">Digital</span> Experiences
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                                Premium web design, robust development, and strategic digital marketing tailored for startups and enterprises.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all hover:translate-y-[-2px] shadow-xl shadow-primary/10 hover:shadow-accent/30"
                                >
                                    Start a Project <ArrowRight size={20} />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="w-full sm:w-auto bg-white text-primary border border-slate-200 px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
                                >
                                    View Portfolio <ChevronRight size={20} />
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-2">
                                    <Layout size={20} />
                                    <span className="text-sm font-medium">UI/UX</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Laptop size={20} />
                                    <span className="text-sm font-medium">Web Apps</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Smartphone size={20} />
                                    <span className="text-sm font-medium">Mobile</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-primary to-slate-800 rounded-3xl overflow-hidden shadow-2xl relative group">
                                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-all duration-300" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 group-hover:scale-110 transition-transform duration-700">
                                    <Rocket style={{ width: "300px", height: "300px" }} />
                                </div>

                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                        <div className="w-12 h-2 bg-white/30 rounded" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-20 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-accent" />
                                        <div className="w-20 h-2 bg-white/30 rounded" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Rocket({ style }: { style: React.CSSProperties }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={style}
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
            <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
        </svg>
    );
}
