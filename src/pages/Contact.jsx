import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', city: '', message: '' });
    };

    return (
        <div className="bg-background min-h-screen pt-24 pb-20">
            {/* Page Header */}
            <div className="bg-primary text-white py-16 text-center mb-16 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-serif font-bold mb-4"
                >
                    Contact Us
                </motion.h1>
                <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                    Have a question about our collections or need a bulk quotation? Our team of experts is ready to assist you.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">

                    {/* Left Side: Contact Form */}
                    <div className="w-full lg:w-3/5 p-8 md:p-12">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-2">Get In Touch</h2>
                        <p className="text-gray-500 mb-8">Fill out the form below and we'll reply within 24 hours.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder="+91 82380 444 15"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City/Location</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder="Mumbai"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us about your project requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2 text-lg py-3 px-8"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Map & Details */}
                    <div className="w-full lg:w-2/5 bg-gray-50 flex flex-col">
                        <div className="h-64 lg:h-1/2 w-full bg-gray-200 relative overflow-hidden group">
                            {/* Google Maps Embed Placeholder - Using an iframe for real maps */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.40539167232!2d70.8340156!3d22.8258525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598dbc5dca6d09%3A0xc6cb5a3fa1e31de3!2sMorbi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Morbi Tiles Location"
                                className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            ></iframe>
                        </div>

                        <div className="p-8 md:p-12 lg:h-1/2 flex flex-col justify-center bg-primary text-white">
                            <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-1">Corporate Office</h4>
                                        <p className="text-gray-100 leading-relaxed font-light">
                                            Morbi Tiles<br />
                                            Old Ghuntu Road<br />
                                            Near Ghuntu Village, Morbi, Gujarat
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-1">Phone</h4>
                                        <p className="text-gray-100 font-light">+91 82380 444 15</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-1">Email</h4>
                                        <p className="text-gray-100 font-light cursor-pointer hover:text-accent transition-colors">info@morbitiles.com<br />sales@morbitiles.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-1">Working Hours</h4>
                                        <p className="text-gray-100 font-light">Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
