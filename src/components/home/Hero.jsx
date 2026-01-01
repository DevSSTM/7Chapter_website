import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const BackgroundOrb = ({ color, size, initialPos, duration, delay }) => (
    <motion.div
        className={`absolute rounded-full blur-[100px] opacity-40 mix-blend-screen ${color}`}
        style={{
            width: size,
            height: size,
            ...initialPos
        }}
        animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
        }}
    />
);

const FloatingObject = ({ children, delay = 0, duration = 15, xRange = [0, 60], yRange = [0, -60], scale = [1, 1.1, 1] }) => (
    <motion.div
        className="absolute z-0 opacity-30 pointer-events-none"
        initial={{ x: xRange[0], y: yRange[0], rotate: 0, scale: scale[0] }}
        animate={{
            x: xRange,
            y: yRange,
            rotate: [0, 90, 180, 270, 360],
            scale: scale,
        }}
        transition={{
            duration,
            repeat: Infinity,
            repeatType: "mirror",
            delay,
            ease: "linear"
        }}
    >
        {children}
    </motion.div>
);

const VolumetricBeam = ({ left, delay, color = "teal" }) => (
    <motion.div
        className={`absolute top-0 h-[150%] origin-top pointer-events-none`}
        style={{
            left,
            width: '200px',
            background: `linear-gradient(to bottom, transparent, ${color === 'teal' ? 'rgba(45, 212, 191, 0.15)' : 'rgba(168, 85, 247, 0.1)'}, transparent)`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
        initial={{ opacity: 0, rotate: -20 }}
        animate={{
            opacity: [0, 0.4, 0.2, 0.5, 0],
            rotate: [-25, -15, -20, -10, -25],
            x: [-50, 50, -50]
        }}
        transition={{
            duration: 12,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
    />
);

const Particle = ({ delay }) => (
    <motion.div
        className="absolute w-1 h-1 bg-white rounded-full opacity-0"
        initial={{ y: '100vh', x: Math.random() * 100 + 'vw' }}
        animate={{
            y: '-10vh',
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
        }}
        transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay,
            ease: "linear"
        }}
    />
);

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-[#0a0518]">
            {/* Animated Background System - Highly Prominent but Backgrounded */}
            <div className="absolute inset-0 z-0">
                {/* Deep Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c0525] via-[#0a0518] to-[#042d31] opacity-100" />

                {/* Volumetric Stage Beams */}
                <VolumetricBeam left="10%" delay={0} color="teal" />
                <VolumetricBeam left="40%" delay={4} color="purple" />
                <VolumetricBeam left="70%" delay={2} color="teal" />
                <VolumetricBeam left="85%" delay={7} color="purple" />

                {/* Sparkling Particles */}
                {[...Array(20)].map((_, i) => (
                    <Particle key={i} delay={i * 1.5} />
                ))}

                {/* Enhanced Floating Abstract Objects */}
                <FloatingObject xRange={[0, 150]} yRange={[0, 80]} duration={30} scale={[1, 1.2, 1]}>
                    <div className="w-40 h-40 border-2 border-teal-500/20 rounded-2xl shadow-[0_0_50px_rgba(20,184,166,0.1)]" />
                </FloatingObject>
                <FloatingObject xRange={[0, -120]} yRange={[0, 150]} duration={35} delay={5} scale={[1, 0.8, 1.1]}>
                    <div className="w-64 h-64 border-2 border-purple-500/10 rounded-full shadow-[0_0_60px_rgba(168,85,247,0.05)]" />
                </FloatingObject>
                <FloatingObject xRange={[300, 400]} yRange={[-100, -200]} duration={25} delay={10}>
                    <div className="w-32 h-32 border-r-2 border-b-2 border-white/5 rotate-45" />
                </FloatingObject>

                {/* Background Atmosphere Orbs */}
                <BackgroundOrb
                    color="bg-teal-500/25"
                    size="700px"
                    initialPos={{ top: '-20%', left: '-10%' }}
                    duration={25}
                />
                <BackgroundOrb
                    color="bg-purple-600/15"
                    size="800px"
                    initialPos={{ bottom: '-10%', right: '-10%' }}
                    duration={30}
                    delay={2}
                />

                {/* Sophisticated High-Tech Grid */}
                <div
                    className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                        y: [0, 8, 0]
                    }}
                    transition={{
                        opacity: { duration: 1 },
                        y: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.5, 1]
                        }
                    }}
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
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0a0518] to-transparent z-10" />

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
            >
                <div className="w-8 h-12 border-2 border-white/10 rounded-full flex justify-center pt-3 backdrop-blur-md">
                    <motion.div
                        className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.8)]"
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

