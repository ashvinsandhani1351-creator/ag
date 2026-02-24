import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, Search, Maximize2, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Dummy product data
const validImages = [
    'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596395804576-9d62d6ea5643?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620640375902-6014e6d42654?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502005097973-bf520fb7ae9b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518177579132-ceec599b4ae6?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop'
];

const allProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: `p${i + 1}`,
    name: i % 3 === 0 ? 'Statuary Classic Marble' : i % 2 === 0 ? 'Onyx Blue Polished' : 'Rustic Wood Plank',
    category: i % 4 === 0 ? 'wall' : i % 3 === 0 ? 'bathroom' : 'floor',
    size: i % 2 === 0 ? '600x1200mm' : '800x800mm',
    finish: i % 3 === 0 ? 'glossy' : 'matte',
    color: i % 2 === 0 ? 'white' : 'grey',
    image: validImages[i % validImages.length]
}));

const Products = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleProducts, setVisibleProducts] = useState(allProducts.slice(0, 8));

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCategory = queryParams.get('category') || 'all';

    const [filters, setFilters] = useState({
        category: initialCategory,
        size: 'all',
        finish: 'all',
        color: 'all',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFilterChange = (type, value) => {
        setFilters({ ...filters, [type]: value });
    };

    const loadMore = () => {
        const currentLength = visibleProducts.length;
        const more = allProducts.slice(currentLength, currentLength + 4);
        setVisibleProducts([...visibleProducts, ...more]);
    };

    return (
        <div className="bg-background min-h-screen pt-24 pb-20">
            {/* Page Header */}
            <div className="bg-primary text-white py-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-serif font-bold mb-4"
                >
                    Our Collections
                </motion.h1>
                <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                <p className="text-gray-300 max-w-2xl mx-auto px-4 text-lg font-light">
                    Discover our extensive range of premium surface materials, thoughtfully curated for exceptional spaces.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden flex justify-between items-center mb-4">
                        <button
                            onClick={() => setIsFilterOpen(true)}
                            className="flex items-center space-x-2 text-primary border border-primary/20 px-4 py-2 rounded-md font-medium"
                        >
                            <Filter className="w-5 h-5" />
                            <span>Filters</span>
                        </button>
                        <div className="text-gray-500 font-medium">{visibleProducts.length} Results</div>
                    </div>

                    {/* Sidebar Filters */}
                    <div className={`
            fixed inset-0 z-50 bg-white p-6 overflow-y-auto w-full max-w-sm transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-1/4 lg:bg-transparent lg:p-0 lg:z-0 lg:block
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
                        <div className="flex justify-between items-center lg:hidden mb-6">
                            <h2 className="text-2xl font-serif font-bold text-primary">Filters</h2>
                            <button onClick={() => setIsFilterOpen(false)} className="text-gray-500 hover:text-red-500">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="space-y-8 sticky top-32">
                            {/* Search */}
                            <div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                                </div>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="text-lg font-serif font-bold text-primary mb-4 pb-2 border-b border-gray-200">Category</h3>
                                <div className="space-y-3">
                                    {['all', 'floor', 'wall', 'bathroom', 'kitchen', 'outdoor'].map(cat => (
                                        <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={filters.category === cat}
                                                onChange={() => handleFilterChange('category', cat)}
                                                className="form-radio text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                                            />
                                            <span className="text-gray-700 capitalize group-hover:text-accent transition-colors">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Size */}
                            <div>
                                <h3 className="text-lg font-serif font-bold text-primary mb-4 pb-2 border-b border-gray-200">Size</h3>
                                <div className="space-y-3">
                                    {['all', '300x300mm', '600x600mm', '800x800mm', '600x1200mm'].map(size => (
                                        <label key={size} className="flex items-center space-x-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="size"
                                                checked={filters.size === size}
                                                onChange={() => handleFilterChange('size', size)}
                                                className="form-radio text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                                            />
                                            <span className="text-gray-700 capitalize group-hover:text-accent transition-colors">{size}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Finish */}
                            <div>
                                <h3 className="text-lg font-serif font-bold text-primary mb-4 pb-2 border-b border-gray-200">Finish</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['all', 'glossy', 'matte', 'satin', 'rustic'].map(finish => (
                                        <button
                                            key={finish}
                                            onClick={() => handleFilterChange('finish', finish)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filters.finish === finish
                                                ? 'bg-primary text-white shadow-md'
                                                : 'bg-white border border-gray-300 text-gray-700 hover:border-primary'
                                                }`}
                                        >
                                            <span className="capitalize">{finish}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Overlay for mobile filter */}
                    {isFilterOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                            onClick={() => setIsFilterOpen(false)}
                        ></div>
                    )}

                    {/* Product Grid */}
                    <div className="lg:w-3/4">
                        <div className="hidden lg:flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-serif font-bold text-primary">All Products</h2>
                            <div className="text-gray-500 font-medium">Showing {visibleProducts.length} of {allProducts.length} Results</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {visibleProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/20"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                            <Link to={`/products/${product.id}`} className="bg-white text-primary font-medium py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white flex items-center">
                                                <Maximize2 className="w-4 h-4 mr-2" /> View
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-5 flex flex-col items-start relative">
                                        <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-20" aria-label="Add to Wishlist">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                        <div className="text-xs font-semibold tracking-wider text-accent mb-1 uppercase bg-accent/10 py-1 px-2 rounded-sm inline-block">{product.finish}</div>
                                        <div className="text-xs text-gray-500 mb-2">{product.size}</div>
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

                        {/* Load More */}
                        {visibleProducts.length < allProducts.length && (
                            <div className="mt-12 flex justify-center">
                                <button
                                    onClick={loadMore}
                                    className="btn-outline border-2 border-gray-300 text-gray-600 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                    Load More Products
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Products;
