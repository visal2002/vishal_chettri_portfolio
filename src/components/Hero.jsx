import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ scrollToSection }) => {
    const [text, setText] = useState('');
    const fullText = "Data Analyst | Data Scientist | AI & Business Intelligence Specialist";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) {
                clearInterval(typingInterval);
            }
        }, 50);
        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden w-full max-w-[100vw]">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/5 via-transparent to-[#22c55e]/3 z-0"></div>

            {/* Floating orbs */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4ADE80]/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 20, 0], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22c55e]/8 rounded-full blur-3xl"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#e8f5e9] mb-6 tracking-tight">
                            VISHAL <span className="text-[#4ADE80]">CHETTRI</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-[#a5c4ab] mb-8 min-h-[4rem] md:min-h-[2rem] md:h-8 font-mono"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {text}
                        <span className="animate-pulse text-[#4ADE80]">|</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="text-base sm:text-lg text-[#a5c4ab] max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Results-driven Data Scientist with expertise in <span className="text-[#e8f5e9] font-semibold">Python, SQL, Machine Learning</span>, and <span className="text-[#e8f5e9] font-semibold">Business Intelligence</span>,
                        specializing in transforming complex data into actionable insights for strategic decision-making.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="button bg-[#4ADE80] hover:bg-[#22c55e] text-[#060f0b] font-bold shadow-lg shadow-[#4ADE80]/20 hover:shadow-[#4ADE80]/40 transition-all transform hover:-translate-y-1"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="button outline border-[#4ADE80]/30 text-[#a5c4ab] hover:text-[#e8f5e9] hover:border-[#4ADE80]"
                        >
                            Contact Me →
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#4ADE80]/50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
