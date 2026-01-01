import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Monitor, Megaphone, ArrowRight, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const ServiceCard = ({ icon: Icon, title, description, delay, color }) => {
    // Simplified color variants for Midnight Rain theme
    const colorVariants = {
        purple: "hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/20 border-white/10",
        blue: "hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-900/20 border-white/10",
        pink: "hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-900/20 border-white/10",
    };

    const iconBgVariants = {
        purple: "group-hover:text-purple-400 text-purple-300",
        blue: "group-hover:text-teal-400 text-teal-300",
        pink: "group-hover:text-pink-400 text-pink-300",
    };

    const titleVariants = {
        purple: "group-hover:text-purple-300",
        blue: "group-hover:text-teal-300",
        pink: "group-hover:text-pink-300",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 ${colorVariants[color]}`}
        >
            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-500 border border-white/10`}>
                <Icon className={`w-7 h-7 transition-colors duration-300 ${iconBgVariants[color]}`} />
            </div>
            <h3 className={`text-xl font-bold mb-3 text-white transition-colors ${titleVariants[color]}`}>{title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
                {description}
            </p>
            <div className={`flex items-center text-sm font-semibold text-teal-400 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-white`}>
                Learn More <ChevronRight size={16} className="ml-1" />
            </div>
        </motion.div>
    );
};

const ServicesSummary = () => {
    const services = [
        {
            icon: Calendar,
            title: "Event Management",
            description: "From corporate gatherings to grand celebrations, we orchestrate every detail to perfection.",
            delay: 0.2,
            color: "purple"
        },
        {
            icon: Monitor,
            title: "IT Solutions",
            description: "Custom software, web development, and digital infrastructure to power your business growth.",
            delay: 0.4,
            color: "blue"
        },
        {
            icon: Megaphone,
            title: "Marketing & Branding",
            description: "Strategic campaigns and creative branding that resonate with your audience and drive results.",
            delay: 0.6,
            color: "pink"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-teal-400 font-medium tracking-widest mb-2 uppercase text-sm">Our Expertise</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">Comprehensive Solutions</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button to="/services" variant="outline" className="!text-white !border-white/20 hover:!bg-white/10 hover:!text-white">View All Services</Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSummary;
