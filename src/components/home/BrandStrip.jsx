import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Globe, Shield } from 'lucide-react';

const certifications = [
    { text: 'ISO 9001:2015 Certified', icon: Award },
    { text: 'Made in India', icon: Globe },
    { text: 'Eco-Friendly Manufacturing', icon: Shield },
    { text: '100% Quality Guaranteed', icon: CheckCircle },
    { text: 'ISO 9001:2015 Certified', icon: Award },
    { text: 'Made in India', icon: Globe },
    { text: 'Eco-Friendly Manufacturing', icon: Shield },
    { text: '100% Quality Guaranteed', icon: CheckCircle },
];

const BrandStrip = () => {
    return (
        <div className="bg-primary border-t border-b border-white/10 py-4 overflow-hidden relative font-sans select-none">
            <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 20
                }}
                className="flex whitespace-nowrap w-max"
            >
                {certifications.map((item, index) => (
                    <div key={index} className="flex items-center mx-8 text-white/70">
                        <item.icon className="w-5 h-5 mr-3 text-accent" />
                        <span className="text-sm font-medium tracking-wider uppercase">
                            {item.text}
                        </span>
                        <span className="mx-8 text-white/20">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default BrandStrip;
