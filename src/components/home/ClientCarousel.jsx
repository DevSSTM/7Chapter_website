import React from 'react';

const ClientCarousel = () => {
    const logos = [
        { name: 'Abix FM', url: 'https://abixfm.com/wp-content/uploads/2023/07/Logo.png' },
        { name: 'caloriecounter', url: 'https://caloriecounter.lk/logo.png' },
        { name: 'Sumathi Holdings', url: '/logos/sumathi.png' },
        { name: 'Sumathi Energy', url: '/logos/sumathi energy.webp' },
        { name: 'Vertex', url: '/logos/logo-vertex-cropped.webp' },
        { name: 'IWS Holdings', url: '/logos/IWS Holdings.jpg' },
    ];

    return (
        <section className="py-10 bg-slate-900 border-y border-slate-800 overflow-hidden">
            <div className="container mx-auto px-6 mb-6 text-center">
                <p className="text-white/80 font-bold text-sm uppercase tracking-widest">Trusted by Industry Leaders</p>
            </div>

            <div className="relative w-full flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
                    {logos.concat(logos).map((logo, index) => (
                        <div
                            key={index}
                            className="w-40 md:w-52 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity filter grayscale invert hover:filter-none hover:brightness-100"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default ClientCarousel;
