import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-midnight-start/50 to-midnight-end/50 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
                    alt="Event Background"
                    className="w-full h-full object-cover opacity-5 grayscale"
                />
                {/* Subtle Ash Accents */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl mix-blend-multiply"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl delay-1000 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-teal-400 font-bold tracking-widest mb-4 uppercase text-sm md:text-base">
                        Event Management &bull; IT Solutions &bull; Marketing
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight text-white">
                        Crafting <span className="text-purple-400">Experiences</span><br />
                        That Define <span className="text-teal-400">Excellence</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        We merge creativity with technology to deliver premium events, cutting-edge software, and impactful branding strategies.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Button to="/contact" variant="primary" className="!bg-teal-500 !text-white !border-none hover:!bg-teal-600 hover:!shadow-lg shadow-teal-900/20">
                            Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button to="/services" variant="outline" className="!text-white !border-white/20 hover:!bg-white/10 hover:!text-white font-semibold">
                            Explore Services
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-slate-600 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
