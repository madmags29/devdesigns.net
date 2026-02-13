import Link from "next/link";
import { Rocket, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white">
                                <Rocket size={24} />
                            </div>
                            <span className="text-xl font-heading font-bold text-white">
                                Dev<span className="text-accent">Designs</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering brands with cutting-edge web design and digital solutions. Your vision, our expertise.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                                >
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-heading font-semibold text-lg mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="#services" className="hover:text-accent transition-colors">Web Development</Link></li>
                            <li><Link href="#services" className="hover:text-accent transition-colors">UI/UX Design</Link></li>
                            <li><Link href="#services" className="hover:text-accent transition-colors">E-commerce Solutions</Link></li>
                            <li><Link href="#services" className="hover:text-accent transition-colors">SEO Optimization</Link></li>
                            <li><Link href="#services" className="hover:text-accent transition-colors">API Integration</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="#portfolio" className="hover:text-accent transition-colors">Our Portfolio</Link></li>
                            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-heading font-semibold text-lg mb-6">Contact info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="text-accent shrink-0" size={20} />
                                <span>hello@devdesigns.net</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="text-accent shrink-0" size={20} />
                                <span>+91 9354741675</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-accent shrink-0" size={20} />
                                <span>Faridbad, Haryana, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm">© {new Date().getFullYear()} DevDesigns. All rights reserved.</p>
                    <div className="flex gap-6 text-sm">
                        <Link href="#" className="hover:text-white">Privacy</Link>
                        <Link href="#" className="hover:text-white">Terms</Link>
                        <Link href="#" className="hover:text-white">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
