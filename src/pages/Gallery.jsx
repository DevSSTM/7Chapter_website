import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryItem = ({ project }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (isHovered && project.images.length > 1) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % project.images.length);
            }, 3000);
        } else {
            setCurrentIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHovered, project.images.length]);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer bg-gray-900 border border-white/10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={project.images[currentIndex]}
                    alt={`${project.title} - ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                </h3>
                <p className="text-teal-400 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.category}
                </p>

                {/* Manual Controls */}
                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                            {project.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-teal-500' : 'w-1.5 bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
};

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Events', 'Marketing'];

    const projects = [
        {
            id: 1,
            title: 'Sumathi Holdings Solar Plant Opening',
            category: 'Events',
            images: [
                '/events/sumathi/FB_IMG_1767240909243.jpg',
                '/events/sumathi/FB_IMG_1767240917074.jpg',
                '/events/sumathi/FB_IMG_1767240925530.jpg',
                '/events/sumathi/FB_IMG_1767240933424.jpg',
                '/events/sumathi/FB_IMG_1767240949539.jpg',
                '/events/sumathi/FB_IMG_1767240954344.jpg'
            ]
        },
        {
            id: 2,
            title: 'The Festival of Health & Fitness 2025',
            category: 'Events',
            images: [
                '/events/calorie/FB_IMG_1767240211175.jpg',
                '/events/calorie/FB_IMG_1767240216142.jpg',
                '/events/calorie/FB_IMG_1767240222399.jpg',
                '/events/calorie/FB_IMG_1767240232666.jpg',
                '/events/calorie/FB_IMG_1767240243915.jpg',
                '/events/calorie/FB_IMG_1767240260031.jpg',
                '/events/calorie/FB_IMG_1767240303379.jpg',
                '/events/calorie/FB_IMG_1767240426194.jpg',
                '/events/calorie/FB_IMG_1767240438357.jpg',
                '/events/calorie/FB_IMG_1767240449722.jpg',
                '/events/calorie/FB_IMG_1767240480377.jpg'
            ]
        },
        {
            id: 3,
            title: 'Evbex Software Launch',
            category: 'Events',
            images: [
                '/events/evbex/FB_IMG_1767239419712.jpg',
                '/events/evbex/FB_IMG_1767239421678.jpg',
                '/events/evbex/FB_IMG_1767239750979.jpg',
                '/events/evbex/FB_IMG_1767239767509.jpg'
            ]
        },
        {
            id: 4,
            title: 'Visakha Vidyalaya Hostel Day',
            category: 'Events',
            images: [
                '/events/visakha/Visakha%20H%20-116.jpg',
                '/events/visakha/Visakha%20H%20-22-2.jpg',
                '/events/visakha/Visakha%20H%20-23-2.jpg',
                '/events/visakha/Visakha%20H%20-33.jpg',
                '/events/visakha/Visakha%20H%20-34.jpg',
                '/events/visakha/Visakha%20H%20-45.jpg',
                '/events/visakha/Visakha%20H%20-6.jpg'
            ]
        },
        {
            id: 5,
            title: 'iPower Branding Project',
            category: 'Marketing',
            images: [
                '/marketing/ipower/IMG-20260101-WA0054.jpg',
                '/marketing/ipower/IMG-20260101-WA0055.jpg',
                '/marketing/ipower/IMG-20260101-WA0056.jpg',
                '/marketing/ipower/IMG-20260101-WA0057.jpg',
                '/marketing/ipower/IMG-20260101-WA0059.jpg',
                '/marketing/ipower/IMG-20260101-WA0062.jpg'
            ]
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="pt-20 min-h-screen">
            <section className="py-20 bg-black/20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our <span className="text-teal-400">Portfolio</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
                        A showcase of our finest work across events, technology, and branding.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-teal-500 text-white shadow-lg scale-105 shadow-teal-900/20'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <GalleryItem key={project.id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;

