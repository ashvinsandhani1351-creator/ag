import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link to="/" className="text-2xl font-serif font-bold tracking-widest text-white mb-6 inline-block">
                            MORBI <span className="text-accent">TILES</span>
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed font-light">
                            As a premier tiles company in Morbi, we bring you world-class luxury surfaces from the heart of the India ceramic tiles market. Whether you're looking for vitrified tiles, full body tiles, or a reliable gujarat tiles factory, Morbi Tiles is your trusted partner.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-serif font-medium mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-accent transition-colors">All Products</Link></li>
                            <li><Link to="/collections" className="text-gray-300 hover:text-accent transition-colors">Collections</Link></li>
                            <li><Link to="/blog" className="text-gray-300 hover:text-accent transition-colors">Our Blog</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-xl font-serif font-medium mb-6">Categories</h4>
                        <ul className="space-y-4">
                            <li><Link to="/products?category=floor" className="text-gray-300 hover:text-accent transition-colors">Floor Tiles</Link></li>
                            <li><Link to="/products?category=wall" className="text-gray-300 hover:text-accent transition-colors">Wall Tiles</Link></li>
                            <li><Link to="/products?category=bathroom" className="text-gray-300 hover:text-accent transition-colors">Bathroom Tiles</Link></li>
                            <li><Link to="/products?category=kitchen" className="text-gray-300 hover:text-accent transition-colors">Kitchen Tiles</Link></li>
                            <li><Link to="/products?category=outdoor" className="text-gray-300 hover:text-accent transition-colors">Outdoor Tiles</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-serif font-medium mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">Morbi Tiles, Old Ghuntu Road, Near Ghuntu Village, Morbi, Gujarat</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                <span className="text-gray-300">+91 82380 444 15</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                <span className="text-gray-300">info@morbitiles.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Morbi Tiles. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 space-x-4 text-sm text-gray-400">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
