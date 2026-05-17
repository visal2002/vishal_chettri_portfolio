import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillsData = {
        'Programming & Analytics': ['Python (Pandas, NumPy, Scikit-learn)', 'SQL', 'MySQL'],
        'Machine Learning': ['Regression', 'NLP', 'Hypothesis Testing', 'Predictive Modeling'],
        'Data Visualization': ['Power BI', 'Excel (PivotTables, VLOOKUP)'],
        'Tools': ['GitHub', 'Firebase', 'AWS', 'OCR (PyMuPDF)'],
        'Web Development': ['HTML', 'CSS', 'JavaScript'],
        'Creative & Design': ['Canva', 'Adobe Lightroom', 'Adobe Rush']
    };

    const softSkillsData = [
        'Analytical Thinking',
        'Effective Communication',
        'Cross-functional Collaboration',
        'Attention to Detail',
        'Team Player'
    ];

    const getSkillIcon = (category) => {
        const iconClass = "w-6 h-6 mr-3 text-[#4ADE80] group-hover:text-[#22c55e] transition-colors";
        switch (category) {
            case 'Programming & Analytics':
                return <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
            case 'Machine Learning':
                return <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v.17a2 2 0 0 1-.46 1.36L5.13 10.5a2 2 0 0 0-.5 1.4v.2c0 1.1.9 2 2 2h.17a2 2 0 0 1 1.36.46L10.5 18.87a2 2 0 0 0 1.4.5h.2c1.1 0 2-.9 2-2v-.17a2 2 0 0 1 .46-1.36L18.87 13.5a2 2 0 0 0 .5-1.4v-.2c0-1.1-.9-2-2-2h-.17a2 2 0 0 1-1.36-.46L13.5 5.13a2 2 0 0 0-1.4-.5H12z" /></svg>;
            case 'Data Visualization':
                return <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-6" /></svg>;
            case 'Tools':
                return <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M12 12V19" /></svg>;
            case 'Web Development':
                return <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
            case 'Creative & Design':
                return <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
            default:
                return null;
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-20 bg-transparent relative z-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#e8f5e9] mb-4">Skills & Expertise</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#22c55e] to-[#4ADE80] mx-auto rounded-full"></div>
                </motion.div>

                <div className="mb-20">
                    <h3 className="text-2xl font-semibold text-[#e8f5e9] mb-8 text-center">Technical Skills</h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                className="group card transition-all duration-300"
                            >
                                <div className="card-header border-b border-[#4ADE80]/5 bg-[#4ADE80]/3 group-hover:bg-[#4ADE80]/5 transition-colors">
                                    <div className="card-title flex items-center">
                                        {getSkillIcon(category)}
                                        <span>{category}</span>
                                    </div>
                                </div>
                                <div className="card-content pt-6">
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="badge secondary"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-[#e8f5e9] mb-8 text-center">Soft Skills</h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {softSkillsData.map((skill) => (
                            <motion.span
                                key={skill}
                                variants={itemVariants}
                                className="badge outline text-base px-6 py-2 hover:bg-[#4ADE80] hover:text-[#060f0b] hover:border-[#4ADE80] transition-all cursor-default font-medium"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
