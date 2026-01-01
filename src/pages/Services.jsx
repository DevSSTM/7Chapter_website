import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Monitor, Megaphone, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const ServiceSection = ({ title, description, icon: Icon, items, reversed, brochureLink, isProminent }) => {
    return (
        <section className={`py-20 ${reversed ? 'bg-white/5' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6">
                <div className={`flex flex-col md:flex-row items-center gap-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                                <Icon className="text-teal-400 w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">{title}</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">{description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {items.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-teal-500 w-5 h-5 flex-shrink-0" />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button to="/contact" variant="outline" className="!text-white !border-white/20 hover:!bg-white/10 hover:!text-white">Request Quote</Button>
                                {brochureLink && (
                                    <Button
                                        to={brochureLink}
                                        variant={isProminent ? 'primary' : 'outline'}
                                        className={isProminent
                                            ? "!bg-teal-500 !text-white hover:!bg-teal-600 !border-0"
                                            : "!text-white !border-white/20 hover:!bg-white/10 hover:!text-white"
                                        }
                                    >
                                        Download Brochure
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl group shadow-black/30 border border-white/10"
                        >
                            <div className="absolute inset-0 bg-midnight-start/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                            <img
                                src={
                                    title === 'Event Management' ? 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop' :
                                        title === 'IT Solutions' ? 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' :
                                            'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop'
                                }
                                alt={title}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    return (
        <div className="pt-20">
            <section className="py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">Our <span className="text-teal-400">Services</span></h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Comprehensive solutions tailored to elevate your brand and business.
                    </p>
                </div>
            </section>

            <ServiceSection
                title="Event Management"
                description="We create immersive experiences that leave a lasting impression. From intimate corporate gatherings to large-scale festivals, our team handles every detail with precision and creativity."
                icon={Calendar}
                items={['Corporate Events', 'Weddings & Private Parties', 'Brand Activations', 'Stage, Sound & Lighting', 'Exhibitions', 'Virtual Events']}
                reversed={false}
                brochureLink="#"
            />

            <ServiceSection
                title="IT Solutions"
                description="Empowering your business with cutting-edge technology. We build robust, scalable, and secure digital solutions that drive efficiency and growth."
                icon={Monitor}
                items={['Custom Software Development', 'Web & Mobile Apps', 'ERP Systems', 'IT Support & Maintenance', 'Cloud Solutions']}
                reversed={true}
                brochureLink="#"
                isProminent={true}
            />

            <ServiceSection
                title="Marketing & Branding"
                description="Building brands that stand out. Our strategic approach combines creativity with data-driven insights to connect you with your target audience."
                icon={Megaphone}
                items={['Social Media Management', 'Brand Identity Design', 'Digital Advertising', 'Content Creation', 'SEO & SEM', 'Public Relations']}
                reversed={false}
                brochureLink="#"
            />

            <section className="py-20 text-center bg-white/5 backdrop-blur-sm border-t border-white/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Need a Custom Solution?</h2>
                    <Button to="/contact" variant="primary" className="!bg-teal-500 !text-white hover:!bg-teal-600">Contact Us Today</Button>
                </div>
            </section>
        </div>
    );
};

export default Services;
