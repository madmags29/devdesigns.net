import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                            Terms of <span className="text-accent underline decoration-slate-200 decoration-4 underline-offset-4">Service</span>
                        </h1>
                        <p className="text-lg text-slate-600">
                            Effective Date: February 13, 2026
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto prose prose-slate prose-lg lg:prose-xl">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Services Offered</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    DevDesigns provides web development, UI/UX design, digital marketing, and other specialized digital services. The specific scope of work for any project will be outlined in a separate agreement or proposal.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">3. Intellectual Property</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Unless otherwise agreed in writing, all source code, designs, and other materials created by DevDesigns during the course of a project remain the property of DevDesigns until full payment has been received. Upon final payment, ownership rights as specified in the project agreement will be transferred to the client.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">4. Client Responsibilities</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Clients are responsible for providing necessary content, feedback, and approvals in a timely manner. Delays in providing requested materials may impact project timelines and costs.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    DevDesigns shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Governing Law</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Information</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    For any questions regarding these Terms, please contact us at hello@devdesigns.net.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
