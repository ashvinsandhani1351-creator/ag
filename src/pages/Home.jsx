import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryCards from '../components/home/CategoryCards';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import InspirationGallery from '../components/home/InspirationGallery';
import Testimonials from '../components/home/Testimonials';
import BrandStrip from '../components/home/BrandStrip';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background">
            <HeroSection />
            <BrandStrip />
            <CategoryCards />
            <FeaturedProducts />
            <WhyChooseUs />
            <InspirationGallery />
            <Testimonials />
        </div>
    );
};

export default Home;
