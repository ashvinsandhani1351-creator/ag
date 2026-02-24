import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { number: '20+', label: 'Years of Excellence', icon: Award },
        { number: '1000+', label: 'Design Variations', icon: CheckCircle },
        { number: '50+', label: 'Countries Exported', icon: Globe },
        { number: '10k+', label: 'Happy Customers', icon: Users },
    ];

    return (
        <div className="bg-background min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            Our Story of <span className="text-accent">Elegance</span>
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                            Founded in the heart of India's ceramic hub, Morbi Tiles began with a singular vision: to bring world-class surface solutions to discerning spaces globally. What started as a modest manufacturing unit has evolved into a symbol of quality, innovation, and architectural beauty.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                            We blend traditional craftsmanship with cutting-edge technology, ensuring each tile tells a story of perfection. Our commitment goes beyond aesthetics—we create surfaces built to withstand the test of time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
                            alt="Morbi Tiles Factory and Showroom"
                            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                        />
                    </motion.div>
                </div>

                {/* Stats Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 mb-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-accent mb-4">
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl font-serif font-bold text-primary mb-2">{stat.number}</h3>
                                <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary text-white p-12 rounded-2xl shadow-lg relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-accent/30 transition-colors"></div>
                        <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Our Vision</h2>
                        <p className="text-gray-300 text-lg leading-relaxed relative z-10 font-light">
                            To be the global benchmark in ceramic surface innovation, inspiring architects, designers, and homeowners to create spaces that resonate with timeless luxury and sustainable design.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border text-primary p-12 rounded-2xl shadow-sm relative overflow-hidden group hover:border-accent transition-colors"
                    >
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 group-hover:bg-accent/20 transition-colors"></div>
                        <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Our Mission</h2>
                        <p className="text-gray-600 text-lg leading-relaxed relative z-10 font-light">
                            To constantly push the boundaries of tile manufacturing technology while maintaining an unwavering commitment to quality, environmental responsibility, and unparalleled customer satisfaction.
                        </p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;
