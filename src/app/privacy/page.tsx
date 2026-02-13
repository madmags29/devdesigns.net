import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                            Privacy <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">Policy</span>
                        </h1>
                        <p className="text-lg text-slate-600">
                            Last Updated: February 13, 2026
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto prose prose-slate prose-lg lg:prose-xl">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    At DevDesigns, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Information Collection</h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Name and contact information (email address, phone number)</li>
                                    <li>Business details and project requirements</li>
                                    <li>Communications and correspondence records</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Information</h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Respond to your comments, questions, and requests</li>
                                    <li>Send you technical notices, updates, and administrative messages</li>
                                    <li>Communicate with you about products, services, offers, and events</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at hello@devdesigns.net.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <div className="mt-4 font-medium text-primary">
                                    Email: hello@devdesigns.net<br />
                                    Address: Faridbad, Haryana, India
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
