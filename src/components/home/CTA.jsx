import React from 'react';
import Button from '../ui/Button';

const CTA = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-black to-gray-900 border border-gray-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-gray-400/20">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">Ready to Elevate Your Brand?</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 font-medium">
                            Whether you need a spectacular event, robust IT infrastructure, or a compelling marketing strategy, we are here to make it happen.
                        </p>
                        <Button to="/contact" variant="primary" className="!bg-white !text-black hover:!bg-gray-200 shadow-lg border-none font-bold">
                            Get in Touch Today
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
