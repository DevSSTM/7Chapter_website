import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-black/50">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-bold mb-6"
                    >
                        About <span className="text-accent">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        We are a collective of visionaries, strategists, and creators dedicated to redefining excellence in events, technology, and branding.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Our Story"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-accent font-medium tracking-widest mb-2 uppercase text-sm">Our Story</h2>
                            <h3 className="text-3xl font-heading font-bold mb-6">From Passion to Profession</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Founded with a simple yet ambitious goal: to bridge the gap between creativity and technology. 7Chapters started as a small team of enthusiasts and has grown into a full-service agency trusted by leading brands.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                We believe that every brand has a unique story, and our mission is to tell that story through immersive events, robust digital solutions, and compelling marketing strategies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-primary p-8 rounded-2xl border border-white/10 text-center"
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="text-accent w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-400 text-sm">
                                To empower businesses with innovative solutions that drive growth and create meaningful connections.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-primary p-8 rounded-2xl border border-white/10 text-center"
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Eye className="text-accent w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-400 text-sm">
                                To be the global partner of choice for brands seeking excellence in events, IT, and marketing.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-primary p-8 rounded-2xl border border-white/10 text-center"
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="text-accent w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Our Values</h3>
                            <p className="text-gray-400 text-sm">
                                Integrity, Innovation, Excellence, and Client-Centricity are at the heart of everything we do.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
