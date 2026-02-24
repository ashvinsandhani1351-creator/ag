import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Palette, Award } from 'lucide-react';

const features = [
    {
        icon: ShieldCheck,
        title: 'Premium Quality',
        description: 'All our tiles meet international quality standards for durability and finish.'
    },
    {
        icon: Truck,
        title: 'Fast Delivery',
        description: 'We ensure safe and timely delivery to your doorstep across the country.'
    },
    {
        icon: Palette,
        title: '1000+ Designs',
        description: 'Vast collection of colors, textures, and patterns to suit every interior.'
    },
    {
        icon: Award,
        title: 'Trusted Brand',
        description: 'Over 20 years of excellence in providing top-tier ceramic solutions.'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
                    >
                        Why Choose Us
                    </motion.h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-accent">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
