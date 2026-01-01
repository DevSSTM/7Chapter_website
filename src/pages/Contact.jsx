import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Users, Laptop } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        eventDate: '',
        guestCount: '',
        projectType: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({
                name: '', email: '', phone: '', subject: '', message: '',
                eventDate: '', guestCount: '', projectType: ''
            });
        }, 2000);
    };

    const inputClasses = "w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-600";
    const labelClasses = "block text-sm text-gray-400 mb-2 font-medium";

    return (
        <div className="min-h-screen bg-primary pt-20">
            {/* Header Section */}
            <section className="relative py-20 bg-primary overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-primary z-0"></div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-heading font-bold mb-6"
                    >
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Ready to start your next project? Whether it's a grand event, a digital transformation, or a brand overhaul, we're here to make it happen.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                            <h3 className="text-2xl font-bold mb-8 font-heading">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Headquarters</p>
                                        <p className="font-medium text-lg">123 Business Avenue, Tech District<br />Colombo 03, Sri Lanka</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Phone</p>
                                        <p className="font-medium text-lg">+94 11 234 5678</p>
                                        <p className="text-gray-400">+94 77 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Email</p>
                                        <p className="font-medium text-lg">hello@7chapters.com</p>
                                        <p className="text-gray-400">support@7chapters.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder or Additional Info */}
                        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/5">
                            <h4 className="text-xl font-bold mb-4">Office Hours</h4>
                            <div className="flex justify-between text-gray-400 border-b border-white/10 pb-2 mb-2">
                                <span>Monday - Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Saturday</span>
                                <span>9:00 AM - 1:00 PM</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Dynamic Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl"
                    >
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                                <p className="text-gray-400 text-lg mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-accent hover:text-white font-medium transition-colors border-b border-accent hover:border-white pb-1"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClasses}>Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={inputClasses}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={inputClasses}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClasses}>Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="+94 77 123 4567"
                                    />
                                </div>

                                <div>
                                    <label className={labelClasses}>I'm interested in...</label>
                                    <div className="relative">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className={`${inputClasses} appearance-none cursor-pointer`}
                                        >
                                            <option value="" className="bg-gray-900 text-gray-400">Select a service</option>
                                            <option value="Event Management" className="bg-gray-900">Event Management</option>
                                            <option value="IT Solutions" className="bg-gray-900">IT Solutions</option>
                                            <option value="Marketing" className="bg-gray-900">Marketing & Branding</option>
                                            <option value="Other" className="bg-gray-900">Other Inquiry</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Dynamic Fields */}
                                <AnimatePresence mode='wait'>
                                    {formData.subject === 'Event Management' && (
                                        <motion.div
                                            key="event-management"
                                            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                        >
                                            <div>
                                                <label className={labelClasses}><Calendar className="inline w-4 h-4 mr-1 mb-1" /> Event Date</label>
                                                <input
                                                    type="date"
                                                    name="eventDate"
                                                    value={formData.eventDate}
                                                    onChange={handleChange}
                                                    className={inputClasses}
                                                />
                                            </div>
                                            <div>
                                                <label className={labelClasses}><Users className="inline w-4 h-4 mr-1 mb-1" /> Estimated Guests</label>
                                                <input
                                                    type="number"
                                                    name="guestCount"
                                                    value={formData.guestCount}
                                                    onChange={handleChange}
                                                    className={inputClasses}
                                                    placeholder="e.g. 150"
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {formData.subject === 'IT Solutions' && (
                                        <motion.div
                                            key="it-solutions"
                                            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <label className={labelClasses}><Laptop className="inline w-4 h-4 mr-1 mb-1" /> Project Type</label>
                                            <select
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                className={`${inputClasses} appearance-none cursor-pointer`}
                                            >
                                                <option value="" className="bg-gray-900">Select type</option>
                                                <option value="Web Development" className="bg-gray-900">Web Development</option>
                                                <option value="Mobile App" className="bg-gray-900">Mobile App</option>
                                                <option value="Software System" className="bg-gray-900">Software System</option>
                                                <option value="UI/UX Design" className="bg-gray-900">UI/UX Design</option>
                                            </select>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div>
                                    <label className={labelClasses}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className={inputClasses}
                                        placeholder="Tell us more about your requirements..."
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full py-4 text-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Send Message <Send className="ml-2 w-5 h-5" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
