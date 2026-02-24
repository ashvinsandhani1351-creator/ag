import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ArrowUp, MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen relative font-sans">
            <Navbar />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/918238044415"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center transform hover:-translate-y-1"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </a>

            {/* Scroll to Top Button */}
            <button
                className={`fixed bottom-24 right-6 z-40 bg-primary/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-primary transition-all duration-300 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                onClick={scrollTop}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Layout;
