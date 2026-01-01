import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Instagram, Facebook, Linkedin, Twitter, Home, User, Briefcase, Image, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import WhatsAppButton from './WhatsAppButton';
import Loader from './Loader';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className={`
                flex items-center justify-between pl-8 pr-3 py-3 rounded-full transition-all duration-500
                ${scrolled ? 'bg-midnight-start/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20' : 'bg-white/5 backdrop-blur-md border border-white/10'}
                w-full max-w-3xl
            `}>
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                    <img src="/logos/website-logo.png" alt="7Chapters" className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter invert brightness-0 invert" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-2">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-5 py-2 rounded-full text-base font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Contact Button */}
                <div className="hidden md:block shrink-0">
                    <Button to="/contact" variant="primary" className="!px-8 !py-3 !text-base !font-semibold shadow-lg shadow-black/20 hover:shadow-black/40 !bg-white !text-secondary hover:!bg-gray-100 border-none">
                        Contact Us
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col space-y-2 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`p-4 rounded-xl transition-all duration-300 ${location.pathname === link.path ? 'bg-gray-100 text-black font-bold' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="p-4 rounded-xl bg-black text-white font-medium text-center mt-2 hover:bg-gray-800 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-black/20 text-gray-300 pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-heading font-bold text-white">7CHAPTERS</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevating brands through premium events, innovative IT solutions, and strategic marketing.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link to="/services" className="hover:text-white transition-colors">Event Management</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">IT Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Marketing & Branding</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/gallery" className="hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Connect</h4>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-secondary transition-all text-gray-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-secondary transition-all text-gray-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-secondary transition-all text-gray-300">
                                <Linkedin size={18} />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">hello@7chapters.com</p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} 7Chapters (Pvt) Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoaderComplete = React.useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
            <AnimatePresence>
                {isLoading && <Loader key="loader" onComplete={handleLoaderComplete} />}
            </AnimatePresence>
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default Layout;
