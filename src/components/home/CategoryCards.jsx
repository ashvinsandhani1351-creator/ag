import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
    { id: 'floor', name: 'Floor Tiles', image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=800&auto=format&fit=crop' },
    { id: 'wall', name: 'Wall Tiles', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop' },
    { id: 'bathroom', name: 'Bathroom Tiles', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop' },
    { id: 'kitchen', name: 'Kitchen Tiles', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop' },
    { id: 'outdoor', name: 'Outdoor Tiles', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop' },
    { id: 'designer', name: 'Designer Tiles', image: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=800&auto=format&fit=crop' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CategoryCards = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
                    >
                        Shop by Category
                    </motion.h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {categories.map((category) => (
                        <motion.div key={category.id} variants={cardVariants} className="group relative rounded-xl overflow-hidden cursor-pointer h-80 shadow-md">
                            <Link to={`/products?category=${category.id}`}>
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-10 transition-opacity duration-300 group-hover:from-primary/80"></div>

                                <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex items-end justify-between">
                                    <h3 className="text-2xl font-serif font-semibold text-white group-hover:text-accent transition-colors">
                                        {category.name}
                                    </h3>
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 backdrop-blur-sm">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CategoryCards;
