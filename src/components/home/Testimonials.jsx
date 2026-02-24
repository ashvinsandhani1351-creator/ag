import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Rahul Sharma',
        role: 'Homeowner',
        rating: 5,
        text: 'The absolute best selection of tiles. We completely transformed our bathroom using their statuary marble collection. The quality is simply unmatched.',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Priya Patel',
        role: 'Interior Designer',
        rating: 5,
        text: 'As a designer, I always look for unique textures and reliable suppliers. Morbi Tiles always delivers. Their customer service is fantastic, and my clients love the results.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Amit Kumar',
        role: 'Contractor',
        rating: 4,
        text: 'Great pricing and prompt delivery. Having consistent tile dimensions makes my team\'s job easier. Highly recommend their floor tiles for large commercial projects.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold mb-4"
                    >
                        What Our Customers Say
                    </motion.h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-20 px-2 sm:px-0 sm:-mx-12">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all backdrop-blur-sm"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all backdrop-blur-sm"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="overflow-hidden px-8 md:px-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center text-center"
                            >
                                <Quote className="text-accent/40 w-16 h-16 mb-6" />
                                <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8 max-w-3xl">
                                    "{testimonials[currentIndex].text}"
                                </p>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-accent fill-accent' : 'text-gray-500'}`}
                                        />
                                    ))}
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                                    />
                                    <div className="text-left">
                                        <h4 className="font-serif font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                        <p className="text-sm text-gray-300">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex justify-center mt-12 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 rounded-full h-2 ${currentIndex === index ? 'w-8 bg-accent' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
