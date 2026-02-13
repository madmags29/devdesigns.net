"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { searchPhotos } from "@/lib/pexels";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Founder, BloomTech",
        content: "DevDesigns transformed our vision into a reality. Their attention to detail and technical prowess are unmatched in the industry.",
        rating: 5,
        query: "portrait professional man",
    },
    {
        name: "Sarah Chen",
        role: "CTO, NextStream",
        content: "Working with them was the best decision for our startup. The SaaS platform they built is scalable, secure, and incredibly fast.",
        rating: 5,
        query: "portrait professional woman",
    },
    {
        name: "Michael Frost",
        role: "Director, GlobalRetail",
        content: "Exceptional UI/UX design. Our conversion rates increased by 40% within the first month of launching the new e-commerce site.",
        rating: 5,
        query: "executive man portrait",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState<string[]>([]);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        async function fetchImages() {
            const fetchedImages = await Promise.all(
                testimonials.map(async (t) => {
                    const photos = await searchPhotos(t.query, 1);
                    return photos[0]?.src.medium || "";
                })
            );
            setImages(fetchedImages);
        }
        fetchImages();
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    }, []);

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6"
                    >
                        What Our <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">Clients Say</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Success stories from partners who trusted us with their digital transformation.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto px-12">
                    <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
                                    <Quote className="absolute top-8 right-8 text-accent/10 w-24 h-24 -z-0" />

                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-lg border-4 border-slate-50 shrink-0 relative z-10">
                                        {images[currentIndex] ? (
                                            <img
                                                src={images[currentIndex]}
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-slate-100 animate-pulse" />
                                        )}
                                    </div>

                                    <div className="flex-1 text-center md:text-left relative z-10">
                                        <div className="flex justify-center md:justify-start gap-1 mb-4">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={16} className="fill-accent text-accent" />
                                            ))}
                                        </div>
                                        <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-6 italic">
                                            &quot;{testimonials[currentIndex].content}&quot;
                                        </p>
                                        <div>
                                            <h4 className="text-lg font-bold text-primary">{testimonials[currentIndex].name}</h4>
                                            <p className="text-accent font-medium">{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20">
                        <button
                            onClick={() => paginate(-1)}
                            className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group"
                        >
                            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                        <button
                            onClick={() => paginate(1)}
                            className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all group"
                        >
                            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > currentIndex ? 1 : -1);
                                    setCurrentIndex(i);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-10 bg-accent" : "w-2 bg-slate-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
