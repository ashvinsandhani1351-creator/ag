import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 'p1',
        name: 'Statuary Classic Marble',
        size: '600x1200mm',
        price: '$45 - $60 / sq.m',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
        tag: 'Bestseller'
    },
    {
        id: 'p2',
        name: 'Onyx Blue Polished',
        size: '800x800mm',
        price: '$55 - $75 / sq.m',
        image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=800&auto=format&fit=crop',
        tag: 'New'
    },
    {
        id: 'p3',
        name: 'Terrazzo White Matte',
        size: '600x600mm',
        price: '$30 - $40 / sq.m',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'p4',
        name: 'Rustic Wood Plank',
        size: '200x1200mm',
        price: '$40 - $55 / sq.m',
        image: 'https://images.unsplash.com/photo-1620640375902-6014e6d42654?q=80&w=800&auto=format&fit=crop',
        tag: 'Trending'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeaturedProducts = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
                        >
                            Featured Collections
                        </motion.h2>
                        <div className="w-24 h-1 bg-accent rounded-full"></div>
                    </div>
                    <Link to="/products" className="hidden md:flex items-center text-primary font-medium hover:text-accent transition-colors">
                        View All Products <span className="ml-2">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden bg-gray-200">
                                {product.tag && (
                                    <div className="absolute top-4 left-4 z-20 bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-sm shadow-sm">
                                        {product.tag}
                                    </div>
                                )}

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                    <Link to={`/products/${product.id}`} className="bg-white text-primary font-medium py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white flex items-center">
                                        <Maximize2 className="w-4 h-4 mr-2" /> View Details
                                    </Link>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-5 flex flex-col items-start relative">
                                <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors bg-white rounded-full p-2 shadow-sm z-20 tooltip" aria-label="Add to Wishlist">
                                    <Heart className="w-4 h-4" />
                                </button>
                                <div className="text-xs text-gray-500 mb-1">{product.size}</div>
                                <h3 className="text-lg font-serif font-bold text-primary mb-4 line-clamp-1 group-hover:text-accent transition-colors">
                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                </h3>
                                <Link to="/contact" className="w-full text-center bg-primary text-white py-2 rounded-md font-medium hover:bg-accent transition-colors text-sm">
                                    Get Quote
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 md:hidden flex justify-center">
                    <Link to="/products" className="btn-outline w-full text-center">
                        View All Products
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default FeaturedProducts;
