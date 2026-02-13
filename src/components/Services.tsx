"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Layout, Search, Globe, Settings, Cpu, Zap, Server } from "lucide-react";
import { useEffect, useState } from "react";
import { searchPhotos } from "@/lib/pexels";

const services = [
    {
        title: "Web Design",
        description: "Beautiful, intuitive designs focused on user experience and brand identity.",
        icon: Layout,
        color: "bg-blue-500",
        href: "/services/web-design",
        query: "web design modern",
    },
    {
        title: "Web Development",
        description: "Robust, scalable websites built with modern frameworks like Next.js and React.",
        icon: Code,
        color: "bg-indigo-500",
        href: "/services/web-development",
        query: "coding software development",
    },
    {
        title: "UI/UX Design",
        description: "User-centric interfaces that are accessible, engaging, and convert visitors.",
        icon: Zap,
        color: "bg-emerald-500",
        href: "/services/ui-ux-design",
        query: "ux design interface",
    },
    {
        title: "SaaS Development",
        description: "Custom MVP development for startups looking to launch quickly and efficiently.",
        icon: Cpu,
        color: "bg-purple-500",
        href: "/services/saas-development",
        query: "saas technology cloud",
    },
    {
        title: "E-commerce",
        description: "High-performing online stores designed to drive sales and scale your business.",
        icon: Globe,
        color: "bg-rose-500",
        href: "/services/ecommerce",
        query: "ecommerce shopping cart",
    },
    {
        title: "SEO Marketing",
        description: "Strategic search engine optimization to boost visibility and organic traffic.",
        icon: Search,
        color: "bg-orange-500",
        href: "/services/seo-marketing",
        query: "seo marketing analytics",
    },
    {
        title: "Domain & Hosting",
        description: "Reliable domain registration and high-performance managed hosting solutions.",
        icon: Server,
        color: "bg-cyan-500",
        href: "/services/domain-hosting",
        query: "server room technology",
    },
];

export default function Services() {
    const [images, setImages] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        async function fetchImages() {
            const newImages: { [key: string]: string } = {};
            await Promise.all(
                services.map(async (service) => {
                    try {
                        const photos = await searchPhotos(service.query, 1);
                        if (photos.length > 0) {
                            newImages[service.title] = photos[0].src.medium;
                        }
                    } catch (error) {
                        console.error(`Failed to fetch image for ${service.title}:`, error);
                    }
                })
            );
            setImages(newImages);
        }
        fetchImages();
    }, []);

    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6"
                    >
                        Digital Services Designed <br />
                        <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">for Excellence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        We provide comprehensive digital solutions to help your business thrive in the modern web landscape.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all hover:translate-y-[-5px] overflow-hidden relative"
                        >
                            <Link href={service.href} className="block relative z-10">
                                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform relative overflow-hidden shadow-lg`}>
                                    {images[service.title] && (
                                        <img
                                            src={images[service.title]}
                                            alt={service.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-primary/20" />
                                    <service.icon size={28} className="relative z-10 drop-shadow-md" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-primary mb-4">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Learn More <Settings size={16} className="animate-spin-slow group-hover:rotate-90 transition-all" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
