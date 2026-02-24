import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Package, Truck, ShieldCheck, Heart } from 'lucide-react';
import FeaturedProducts from '../components/home/FeaturedProducts';

const ProductDetail = () => {
    const { id } = useParams();

    // Dummy data
    const product = {
        name: 'Statuary Classic Marble',
        sku: 'MOR-STT-1200',
        price: '$45 - $60 / sq.m',
        description: 'Experience the timeless beauty of natural marble with our Statuary Classic. Featuring distinctive gray veining on a pristine white background, this premium vitrified tile brings unparalleled luxury to any space. Perfect for high-end residential and commercial applications.',
        images: [
            'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop'
        ],
        sizes: ['600x600mm', '800x800mm', '600x1200mm'],
        finishes: ['Glossy', 'Matte', 'Satin', 'High-Gloss'],
        specs: {
            Material: 'Glazed Vitrified Tile (GVT)',
            Thickness: '9mm',
            Weight: '20kg / Box',
            TilesPerBox: '4 Pieces',
            CoverageArea: '1.44 sq.m / Box',
            WaterAbsorption: '< 0.05%',
            SurfaceQuality: 'Zero Defect'
        },
        applications: ['Living Room', 'Bedroom', 'Corporate Office', 'Bathroom Wall', 'Boutique Showroom']
    };

    const [activeImage, setActiveImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
    const [selectedFinish, setSelectedFinish] = useState(product.finishes[0]);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="bg-background min-h-screen pt-24 pb-20">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 md:px-8 mb-8">
                <div className="flex items-center text-sm text-gray-500 font-medium">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-primary truncate">{product.name}</span>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 mb-20">
                    {/* Image Gallery */}
                    <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
                        {/* Main Image */}
                        <div className="flex-1 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm relative aspect-square md:aspect-auto md:h-[600px]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    src={product.images[activeImage]}
                                    alt={`${product.name} - View ${activeImage + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full text-gray-500 hover:text-red-500 hover:shadow-md transition-all z-10">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 pb-2 md:pb-0 md:h-[600px] no-scrollbar">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-primary shadow-sm' : 'border-transparent opacity-50 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                            {product.name}
                        </h1>
                        <div className="text-sm text-gray-500 font-medium mb-6 flex items-center space-x-4">
                            <span>SKU: <span className="text-primary">{product.sku}</span></span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="text-green-600 flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> In Stock</span>
                        </div>

                        {/* Selectors */}
                        <div className="space-y-6 mb-8">
                            {/* Size */}
                            <div>
                                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Available Sizes</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${selectedSize === size
                                                ? 'bg-primary text-white shadow-md ring-2 ring-primary ring-offset-2'
                                                : 'bg-white border text-gray-700 hover:border-primary'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Finish */}
                            <div>
                                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Surface Finish</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.finishes.map(finish => (
                                        <button
                                            key={finish}
                                            onClick={() => setSelectedFinish(finish)}
                                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedFinish === finish
                                                ? 'bg-accent text-white shadow-md'
                                                : 'bg-white border text-gray-700 hover:border-accent hover:text-accent'
                                                }`}
                                        >
                                            {finish}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 pt-6 border-t border-gray-200">
                            <Link to="/contact" className="btn-primary flex-1 flex items-center justify-center text-lg">
                                Get Quote <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <button className="btn-outline flex-1 flex items-center justify-center text-lg border-2">
                                Request Sample
                            </button>
                        </div>

                        {/* Value Props */}
                        <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm mt-auto">
                            <div className="flex items-start space-x-3">
                                <Truck className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-primary">Fast Delivery</h4>
                                    <p className="text-xs text-gray-500 mt-1">Ships within 48 hours</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <ShieldCheck className="w-5 h-5 text-accent mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-primary">10 Yr Warranty</h4>
                                    <p className="text-xs text-gray-500 mt-1">Guaranteed durability</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-20">
                    <div className="flex border-b border-gray-200 overflow-x-auto no-scrollbar">
                        {['description', 'specifications', 'applications'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 py-4 px-6 text-center font-medium font-serif text-lg whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-gray-500 hover:text-gray-800'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-8 md:p-12 min-h-[300px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'description' && (
                                <motion.div
                                    key="desc"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">Product Overview</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Designed with advanced digital printing technology, each tile offers a unique pattern variant, collectively creating a stunningly realistic natural stone effect when laid together. The surface is highly resistant to scratches, stains, and moisture, making maintenance effortless while retaining its brilliant finish for decades.
                                    </p>
                                </motion.div>
                            )}

                            {activeTab === 'specifications' && (
                                <motion.div
                                    key="specs"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-6">Technical Specifications</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                        {Object.entries(product.specs).map(([key, value]) => (
                                            <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                                                <span className="text-gray-500 font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                                <span className="text-primary font-semibold text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'applications' && (
                                <motion.div
                                    key="apps"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-6">Recommended Applications</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {product.applications.map((app, idx) => (
                                            <div key={idx} className="flex items-center space-x-3 bg-background p-4 rounded-lg">
                                                <Package className="w-5 h-5 text-accent" />
                                                <span className="text-primary font-medium">{app}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Related Products Placeholder */}
                <div className="mb-20 -mx-4 md:-mx-8">
                    <FeaturedProducts />
                </div>
            </div>
        </div>
    );
};

// Simple stand-in check circle icon since it's not imported at top
const CheckCircle = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
)

export default ProductDetail;
