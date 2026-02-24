import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User } from 'lucide-react';

export const blogPosts = [
    {
        id: 'how-to-clean-black-spots',
        title: 'How to Clean Black Spots on Tiles: A Complete Guide',
        excerpt: 'Discover the most effective methods to remove stubborn black spots and mould from your bathroom and kitchen tiles, restoring their original shine effortlessly.',
        date: 'Feb 12, 2026',
        author: 'Morbi Design Team',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
        category: 'Maintenance'
    },
    {
        id: 'bathroom-tile-colour-trends',
        title: 'Top Bathroom Tile Trends: Best Colour Ideas with Grey & Beige',
        excerpt: 'Explore the latest 2026 bathroom tile trends. Learn how combining neutral tones like grey and beige can create a spa-like, luxurious retreat in your home.',
        date: 'Feb 05, 2026',
        author: 'Interior Experts',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
        category: 'Design Trends'
    },
    {
        id: 'kitchen-tiles-vastu',
        title: 'Kitchen Tile Colours as Per Vastu: Right Shades for Walls & Floors',
        excerpt: 'Balance the energy in your home by choosing the right kitchen tile colours according to Vastu Shastra principles. Discover the best shades for positivity and prosperity.',
        date: 'Jan 28, 2026',
        author: 'Vastu Consultant',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
        category: 'Guides'
    },
    {
        id: 'best-tiles-company-in-morbi',
        title: 'The Ultimate Guide to Finding the Best Tiles Company in Morbi',
        excerpt: 'Looking for a reliable gujarat tiles factory? Learn what makes Morbi the ceramic capital of India and how to find the top tiles company in Morbi for your project.',
        date: 'Feb 20, 2026',
        author: 'Industry Insider',
        image: 'https://images.unsplash.com/photo-1620640375902-6014e6d42654?q=80&w=800&auto=format&fit=crop',
        category: 'Industry Insights'
    },
    {
        id: 'morbi-vitrified-tiles-market',
        title: 'Understanding the Morbi Vitrified Tiles Market: Full Body to Subway Tiles',
        excerpt: 'Explore the vast india ceramic tiles market. From sourcing from a full body tiles manufacturer in morbi to the latest subway tiles, get the complete overview.',
        date: 'Feb 22, 2026',
        author: 'Design Analyst',
        image: 'https://images.unsplash.com/photo-1502005097973-bf520fb7ae9b?q=80&w=800&auto=format&fit=crop',
        category: 'Product Guide'
    }
];

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen pt-24 pb-20">
            {/* Page Header */}
            <div className="bg-primary text-white py-16 text-center mb-16 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-serif font-bold mb-4"
                >
                    Design Inspiration & Guides
                </motion.h1>
                <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                    Stay updated with the latest trends, maintenance tips, and expert advice for transforming your spaces.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-4 left-4 z-20 bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-sm shadow-sm">
                                    {post.category}
                                </div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="text-gray-600 font-light mb-6 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-accent font-medium hover:text-primary transition-colors mt-auto">
                                    Read Article <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
