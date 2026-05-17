import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-transparent relative z-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#e8f5e9] mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#22c55e] to-[#4ADE80] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e] to-[#4ADE80] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-[#060f0b] rounded-full mx-auto flex items-center justify-center overflow-hidden border-2 border-[#4ADE80]/20">
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/images/profile.jpeg`}
                                    alt="Vishal Chettri"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="glass-soft p-8 rounded-2xl">
                            <p className="text-lg text-[#a5c4ab] mb-6 leading-relaxed">
                                Results-driven Data Scientist with a <span className="text-[#4ADE80] font-semibold">BCA in Data Science</span> and strong skills in Python, SQL, Power BI, and Tableau. Experienced in analytics, business process analysis, and machine learning through internships with organizations like <strong className="text-[#e8f5e9]">UNDP Bhutan</strong>, <strong className="text-[#e8f5e9]">GovTech Bhutan</strong>, and <strong className="text-[#e8f5e9]">Earth5R</strong>.
                            </p>
                            <p className="text-lg text-[#a5c4ab] mb-6 leading-relaxed">
                                Currently working as an IT Officer at <strong className="text-[#e8f5e9]">Bank of Bhutan</strong>, where I support banking systems, ensure IT operations efficiency, and contribute to data-driven decision-making and system optimization.
                            </p>
                            <p className="text-lg text-[#a5c4ab] mb-6 leading-relaxed">
                                Proven track record in projects such as Smart Resume Analyzer, Customer Churn Prediction, and Sentiment Analysis. I combine technical proficiency with analytical acumen to deliver scalable, data-driven results.
                            </p>

                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center text-[#a5c4ab] p-2 hover:bg-[#4ADE80]/5 rounded-lg transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#4ADE80]/10 flex items-center justify-center mr-4 text-[#4ADE80]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <span>Thimphu, Bhutan</span>
                                </div>
                                <div className="flex items-center text-[#a5c4ab] p-2 hover:bg-[#4ADE80]/5 rounded-lg transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#4ADE80]/10 flex items-center justify-center mr-4 text-[#4ADE80]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2 2A16 16 0 0 1 3.08 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 10 10 0 0 0 10 10 2 2 0 0 1 2 2z" /></svg>
                                    </div>
                                    <span>17548947</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
