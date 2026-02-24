import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop"
                    alt="Luxury Tile Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto mt-16">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    Transform Your Space with Premium Morbi Tiles
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl drop-shadow-md font-light"
                >
                    Discover luxury surfaces directly from the top tiles company in Morbi. As a leading gujarat tiles factory, we offer an exquisite collection from classic marble to modern full body tiles.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/collections" className="btn-primary w-full sm:w-auto text-lg text-center">
                        Explore Collections
                    </Link>
                    <Link to="/products" className="btn-outline border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto text-lg text-center">
                        View Catalog
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.button
                onClick={scrollToNext}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-10 hover:text-accent transition-colors"
                aria-label="Scroll down"
            >
                <ChevronDown className="w-10 h-10" />
            </motion.button>
        </section>
    );
};

export default HeroSection;
