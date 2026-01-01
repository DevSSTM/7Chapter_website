import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Award } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="flex gap-4 group"
    >
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-vibrant-purple/10 flex items-center justify-center group-hover:bg-vibrant-purple/20 transition-colors duration-300">
            <Icon className="text-vibrant-purple w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
            <h4 className="text-xl font-bold mb-2 group-hover:text-vibrant-pink transition-colors duration-300">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team collaboration"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 p-6 bg-white/95 backdrop-blur-md rounded-xl border border-gray-200 max-w-xs shadow-xl">
                                <p className="text-4xl font-bold text-black mb-1">10+</p>
                                <p className="text-sm font-bold text-gray-800">Years of Excellence in delivering premium solutions.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-gray-500 font-bold tracking-widest mb-2 uppercase text-sm">Why Choose Us</h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-text">We Deliver Excellence, Every Time.</h3>

                        <div className="space-y-8">
                            <FeatureItem
                                icon={ShieldCheck}
                                title="Reliability & Trust"
                                description="We build lasting partnerships through transparent communication and consistent delivery of high-quality results."
                                delay={0.2}
                            />
                            <FeatureItem
                                icon={Zap}
                                title="Innovative Approach"
                                description="Leveraging the latest technologies and creative trends to keep your brand ahead of the curve."
                                delay={0.3}
                            />
                            <FeatureItem
                                icon={Users}
                                title="Expert Team"
                                description="A diverse team of specialists in events, IT, and marketing working together to achieve your goals."
                                delay={0.4}
                            />
                            <FeatureItem
                                icon={Award}
                                title="Premium Quality"
                                description="Uncompromising attention to detail and a commitment to luxury standards in everything we do."
                                delay={0.5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
