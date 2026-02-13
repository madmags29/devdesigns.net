"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: data.message });
                setFormState({ name: "", email: "", subject: "", message: "" });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong.' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
                                Let&apos;s Build Something <br />
                                <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">Incredible Together</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-12 max-w-lg">
                                Have a project in mind? We&apos;d love to hear from you. Fill out the form or reach out via our contact details.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm border border-slate-100 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Email Us</h4>
                                        <p className="text-slate-600">hello@devdesigns.net</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm border border-slate-100 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Call Us</h4>
                                        <p className="text-slate-600">+91 9354741675</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm border border-slate-100 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Visit Us</h4>
                                        <p className="text-slate-600">Faridbad, Haryana, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-2xl text-sm font-medium ${submitStatus.type === 'success'
                                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                            : 'bg-red-50 text-red-700 border border-red-100'
                                        }`}
                                >
                                    {submitStatus.message}
                                </motion.div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary px-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        disabled={isSubmitting}
                                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all text-primary placeholder:text-slate-400 disabled:opacity-50"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary px-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        disabled={isSubmitting}
                                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all text-primary placeholder:text-slate-400 disabled:opacity-50"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary px-1">Subject</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="How can we help?"
                                    disabled={isSubmitting}
                                    className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all text-primary placeholder:text-slate-400 disabled:opacity-50"
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary px-1">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    disabled={isSubmitting}
                                    className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-accent transition-all text-primary placeholder:text-slate-400 resize-none disabled:opacity-50"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-accent transition-all hover:translate-y-[-2px] shadow-lg shadow-primary/10 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
