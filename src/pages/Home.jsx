import React from 'react';
import Hero from '../components/home/Hero';
import ClientCarousel from '../components/home/ClientCarousel';
import ServicesSummary from '../components/home/ServicesSummary';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <ClientCarousel />
            <ServicesSummary />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </>
    );
};

export default Home;
