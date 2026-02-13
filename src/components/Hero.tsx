"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Laptop, Layout, Smartphone, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { searchVideos, PexelsVideo, searchPhotos } from "@/lib/pexels";

const SLIDER_INTERVAL = 5000;

export default function Hero() {
    const [video, setVideo] = useState<PexelsVideo | null>(null);
    const [heroImages, setHeroImages] = useState<string[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        async function fetchHeroMedia() {
            try {
                // Fetch background video
                const videos = await searchVideos("abstract technology digital background", 1);
                if (videos.length > 0) {
                    setVideo(videos[0]);
                }

                // Fetch featured hero images for slider
                const photos = await searchPhotos("modern laptop office creative agency digital product", 5);
                if (photos.length > 0) {
                    setHeroImages(photos.map(p => p.src.large2x));
                }
            } catch (error) {
                console.error("Failed to fetch hero media:", error);
            }
        }
        fetchHeroMedia();
    }, []);

    // Auto-playing slider logic
    useEffect(() => {
        if (heroImages.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % heroImages.length);
        }, SLIDER_INTERVAL);

        return () => clearInterval(timer);
    }, [heroImages]);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, [heroImages.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev - 1 + heroImages.length) % heroImages.length);
    }, [heroImages.length]);

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[85vh] flex items-center">
            {/* Background Layer */}
            <div className="absolute inset-0 -z-10 bg-slate-50">
                <AnimatePresence>
                    {video && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVideoLoaded ? 0.4 : 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 overflow-hidden"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                onCanPlay={() => setIsVideoLoaded(true)}
                                className="absolute inset-0 w-full h-full object-cover"
                                poster={video.image}
                            >
                                <source src={video.video_files.find(f => f.quality === 'hd')?.link || video.video_files[0]?.link} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white" />
                        </motion.div>
                    )}
                </AnimatePresence>

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

                    <div className="flex-1 relative w-full lg:w-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="aspect-video lg:aspect-square max-w-[600px] mx-auto bg-gradient-to-br from-primary to-slate-800 rounded-3xl overflow-hidden shadow-2xl relative group">
                                <AnimatePresence mode="wait">
                                    {heroImages.length > 0 ? (
                                        <motion.div
                                            key={currentSlide}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                            className="w-full h-full absolute inset-0"
                                        >
                                            <img
                                                src={heroImages[currentSlide]}
                                                alt={`DevDesigns Featured Work ${currentSlide + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                onLoad={() => setIsImageLoaded(true)}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                                            {/* Slide Navigation Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={(e) => { e.preventDefault(); prevSlide(); }}
                                                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                                                >
                                                    <ChevronLeft size={24} />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.preventDefault(); nextSlide(); }}
                                                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                                                >
                                                    <ChevronRight size={24} />
                                                </button>
                                            </div>

                                            {/* Label */}
                                            <div className="absolute bottom-8 left-8 right-8">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <div className="h-[2px] w-8 bg-accent" />
                                                    <span className="text-white font-bold tracking-wider uppercase text-xs">Featured Project 0{currentSlide + 1}</span>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div key="loader" className="w-full h-full bg-slate-800 animate-pulse flex items-center justify-center">
                                            <div className="w-20 h-20 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
                                        </div>
                                    )}
                                </AnimatePresence>

                                {/* Pagination Dots */}
                                <div className="absolute bottom-6 right-8 flex gap-2 z-20">
                                    {heroImages.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentSlide(i)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-accent' : 'w-2 bg-white/40'}`}
                                        />
                                    ))}
                                </div>
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
