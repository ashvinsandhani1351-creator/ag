import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
    { id: 2, url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 3, url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 4, url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
];

const InspirationGallery = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
                        >
                            Get Inspired
                        </motion.h2>
                        <div className="w-24 h-1 bg-accent rounded-full"></div>
                        <p className="mt-4 text-gray-500 max-w-lg">
                            Explore how our premium tiles can transform your living spaces into stunning architectural masterpieces.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 auto-rows-[250px] gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative overflow-hidden group rounded-xl ${img.colSpan} ${img.rowSpan}`}
                        >
                            <img
                                src={img.url}
                                alt={`Inspiration ${img.id}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                <Link to="/products" className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    See Product
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InspirationGallery;
