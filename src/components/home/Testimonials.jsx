import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="bg-white/5 p-8 rounded-2xl border border-white/5 relative"
    >
        <Quote className="absolute top-6 right-6 text-accent/20 w-10 h-10" />
        <p className="text-gray-300 mb-6 italic leading-relaxed">"{quote}"</p>
        <div>
            <h4 className="font-bold text-white">{author}</h4>
            <p className="text-accent text-sm">{role}</p>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const testimonials = [
        {
            quote: "7Chapters transformed our annual corporate gala into an unforgettable experience. The attention to detail was impeccable.",
            author: "Sarah Jenkins",
            role: "Marketing Director, TechCorp",
            delay: 0.2
        },
        {
            quote: "Their IT team developed a custom ERP solution that streamlined our operations by 40%. Highly recommended for complex projects.",
            author: "David Chen",
            role: "CEO, FutureSystems",
            delay: 0.4
        },
        {
            quote: "The rebranding campaign they executed gave us a fresh, modern identity that resonated perfectly with our target market.",
            author: "Elena Rodriguez",
            role: "Founder, LuxeStyle",
            delay: 0.6
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-medium tracking-widest mb-2 uppercase text-sm">Testimonials</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold">What Our Clients Say</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <TestimonialCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
