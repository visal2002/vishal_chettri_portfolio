import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiencesData = [
        { title: 'Information Technology Officer', company: 'Bank of Bhutan, Thimphu (Onsite)', duration: 'May 2026 – Present', description: 'Responsible for managing IT infrastructure, ensuring system security, and providing technical support to optimize banking operations.', image: '/assets/images/BoB.png' },
        { title: 'AI Engineer', company: 'Omdena (Remote)', duration: 'May 2026 – Present', description: 'Contributing to collaborative AI projects focused on building real-world machine learning solutions. Working with cross-functional global teams to develop, deploy, and optimize AI models addressing impactful challenges in areas such as NLP, computer vision, and predictive analytics.', image: '/assets/images/omdena-logo.png' },
        { title: 'Project Management Unit (PMU), Department of Tourism', company: 'UNDP Bhutan (Onsite)', duration: 'Oct 2025 – Present', description: 'Supporting the Project Management Unit under the Department of Tourism in project coordination, monitoring and evaluation, documentation, and data-driven reporting. Assisting in project implementation aligned with UNDP\'s sustainable development goals and tourism sector initiatives.', image: '/assets/images/images.jpg' },
        { title: 'UIUX & Frontend Developer', company: 'Jorden DeepMind Systems (Hybrid)', duration: 'Oct 2025 – Present', description: 'Design wireframes, prototypes, and high-fidelity UI in Figma. Build responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. Translate designs into pixel-perfect, high-performance web experiences.', image: '/assets/images/JDMS logo.jpg' },
        { title: 'Member - Evaluation Association of Bhutan (EAB)', company: 'Evaluation Association of Bhutan (Hybrid)', duration: 'Sep 2025 – Present', description: 'Actively engaged as a professional member of the Evaluation Association of Bhutan, contributing to the advancement of monitoring and evaluation (M&E) practices within the region.', image: '/assets/images/EAB.png' },
        { title: 'Research Analyst', company: 'Dragale Aviation (Remote)', duration: 'Jan 2025 – Jun 2025', description: 'Conducted data-driven research and analysis to support aviation operations and business decisions. Authored 5+ data-driven articles using Python visualizations, increasing engagement by 15%.', image: '/assets/images/dragaleaviation_logo.jpg' },
        { title: 'Enumerator', company: 'Tarayana Foundation (Onsite)', duration: 'Dec 2024', description: 'I worked as an Enumerator for the Payment for Ecosystem Services (PES) project implemented by Tarayana Foundation in Phuentsholing, where I conducted field-based land surveys and collected detailed household and land-use data across watershed communities. I was responsible for ensuring accurate and reliable data collection using structured survey tools, followed by data cleaning, validation, and analysis to support ecosystem service valuation and project planning. My role also involved mapping land ownership and usage patterns, collaborating with local stakeholders to verify information, and contributing to data-driven decision-making for sustainable water resource management and environmental conservation under the PES initiative.', image: '/assets/images/Tarayana.png' },
        { title: 'Data Science Content Writer', company: 'Earth5R (Remote)', duration: 'May 2024 – Jul 2024', description: 'Developed clear and engaging content on data science applications in aviation, focusing on analytics, predictive modeling, and operational optimization.', image: '/assets/images/earth5r.png' },
        { title: 'ML Intern', company: 'YBI Foundation (Remote)', duration: 'Oct 2023 – Nov 2023', description: 'Developed and tested machine learning models to enhance operational efficiency and data-driven decision-making in aviation.', image: '/assets/images/ybi.webp' },
    ];

    const certificationsData = ['Google Data Analytics', 'IBM Python for Data Science', 'edX Machine Learning (Harvard)', 'Microsoft Excel (Data Analysis)', 'Power BI Visualization', 'Accenture SWE Simulation'];
    const languagesData = ['English (Fluent)', 'Hindi (Fluent)', 'Dzongkha (Native)', 'Nepali (Fluent)', 'Tshangla (Fluent)'];

    return (
        <section id="experience" className="py-20 bg-transparent relative z-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#e8f5e9] mb-4">Experience & Education</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#22c55e] to-[#4ADE80] mx-auto rounded-full"></div>
                </motion.div>

                {/* Experience Timeline */}
                <div className="mb-20">
                    <h3 className="text-2xl font-semibold text-[#e8f5e9] mb-10 text-center">Professional Experience</h3>
                    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#4ADE80]/30 before:to-transparent">
                        {experiencesData.map((exp, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#4ADE80]/20 bg-[#060f0b] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-[#4ADE80]/60 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-[#0a1a12]/80 hover:bg-[#0a1a12] border border-[#4ADE80]/10 shadow-xl transition-all duration-300 hover:border-[#4ADE80]/25 hover:shadow-[#4ADE80]/5">
                                    <div className="flex flex-col sm:flex-row gap-4 mb-3">
                                        {exp.image && (
                                            <div className="flex-shrink-0 sm:mt-1">
                                                <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-green-400 to-red-500 shadow-lg shadow-[#4ADE80]/10">
                                                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                                                        <img src={exp.image} alt={`${exp.company} logo`} className="w-9 h-9 object-contain" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex-grow min-w-0">
                                            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-1 gap-2">
                                                <h4 className="font-bold text-[#e8f5e9] text-lg leading-tight">{exp.title}</h4>
                                                <span className="text-xs font-mono text-[#4ADE80]/70 px-2 py-1 bg-[#4ADE80]/8 rounded-full shrink-0">{exp.duration}</span>
                                            </div>
                                            <div className="text-sm font-medium text-[#4ADE80]">{exp.company}</div>
                                        </div>
                                    </div>
                                    <p className="text-[#a5c4ab] text-sm leading-relaxed">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="mb-20">
                    <h3 className="text-2xl font-semibold text-[#e8f5e9] mb-8 text-center">Education</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-6">
                            <div className="flex items-start">
                                <div className="p-3 bg-[#4ADE80]/10 rounded-lg mr-4 text-[#4ADE80]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6" /><path d="M20 10a2 2 0 0 0-2-2v-4c0-1.1.9-2 2-2s2 .9 2 2v4" /><rect x="2" y="10" width="20" height="6" rx="2" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#e8f5e9]">Bachelor of Computer Application (Data Science)</h4>
                                    <p className="text-[#4ADE80]/70">Maharishi Markandeshwar (Deemed to be University)</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-6">
                            <div className="flex items-start">
                                <div className="p-3 bg-[#4ADE80]/10 rounded-lg mr-4 text-[#4ADE80]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M9 13v8" /><path d="M15 9v12" /><path d="M21 5v16" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#e8f5e9]">High School</h4>
                                    <p className="text-[#4ADE80]/70">Drametse Central School</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Certifications & Languages */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="min-w-0">
                        <h3 className="text-2xl font-semibold text-[#e8f5e9] mb-8 text-center">Certifications</h3>
                        <div className="space-y-4">
                            {certificationsData.map((cert, index) => (
                                <motion.div key={cert} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center p-4 rounded-xl glass-soft hover:glass transition-all duration-500 group">
                                    <div className="w-10 h-10 rounded-full bg-[#4ADE80]/8 flex items-center justify-center mr-4 group-hover:bg-[#4ADE80]/15 transition-colors border border-[#4ADE80]/15 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <span className="text-[#a5c4ab] font-medium group-hover:text-[#e8f5e9] transition-colors">{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-2xl font-semibold text-[#e8f5e9] mb-8 text-center">Languages</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {languagesData.map((lang, index) => (
                                <motion.span key={lang} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="badge outline text-sm px-5 py-2.5 cursor-default">
                                    {lang}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
