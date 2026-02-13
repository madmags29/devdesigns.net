"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { searchPhotos } from "@/lib/pexels";

const initialProjects = [
    {
        title: "E-commerce Redesign",
        category: "Web Design & Development",
        query: "ecommerce website design",
        image: null as string | null,
        link: "#",
        color: "from-blue-600 to-indigo-700",
    },
    {
        title: "SaaS Dashboard",
        category: "UI/UX Design",
        query: "saas dashboard tech",
        image: null as string | null,
        link: "#",
        color: "from-indigo-600 to-purple-700",
    },
    {
        title: "Mobile Banking App",
        category: "Product Design",
        query: "mobile finance app",
        image: null as string | null,
        link: "#",
        color: "from-emerald-600 to-teal-700",
    },
    {
        title: "Real Estate Portal",
        category: "Full Stack Dev",
        query: "modern luxury house",
        image: null as string | null,
        link: "#",
        color: "from-rose-600 to-pink-700",
    },
];

export default function Portfolio() {
    const [projects, setProjects] = useState(initialProjects);

    useEffect(() => {
        async function fetchProjectImages() {
            const updatedProjects = await Promise.all(
                initialProjects.map(async (project) => {
                    try {
                        const photos = await searchPhotos(project.query, 1);
                        return {
                            ...project,
                            image: photos[0]?.src.large || null,
                        };
                    } catch (error) {
                        console.error(`Failed to fetch image for ${project.title}:`, error);
                        return project;
                    }
                })
            );
            setProjects(updatedProjects);
        }
        fetchProjectImages();
    }, []);

    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6"
                        >
                            Selected <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">Work</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600"
                        >
                            A showcase of our recent projects where design thinking meets technical excellence.
                        </motion.p>
                    </div>
                    <Link href="#" className="group flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
                        View All Projects <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} mb-6`}>
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <span className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl">
                                        View Case Study <ExternalLink size={18} />
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-sm font-bold text-accent uppercase tracking-wider mb-2 block">{project.category}</span>
                                    <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
