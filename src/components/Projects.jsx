import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectsData = [
        {
            title: 'AI Mental Health Assistant',
            organization: 'GovTech Bhutan & Omdena',
            duration: 'May 2025 – June 2025',
            description: 'Led development of an AI-powered mental health assistant using transformer models (MentalBERT, MentalRoBERTa) for emotion detection and mental health condition classification.',
            technologies: ['Python', 'Transformer Models', 'NLP', 'Machine Learning'],
            achievements: ['Fine-tuned state-of-the-art models', 'Real-time AI support system', 'Personalized recommendations'],
            image: `${import.meta.env.BASE_URL}assets/images/ai-mental-health.webp`
        },
        {
            title: 'Agricultural & Livestock Data Dashboard',
            organization: 'Personal Project',
            duration: 'May 2025 – June 2025',
            description: 'Developed interactive Power BI dashboard for agriculture and livestock survey data visualization with region-wise analysis capabilities.',
            technologies: ['Power BI', 'Excel', 'SQL', 'Data Visualization'],
            achievements: ['Interactive KPIs and charts', 'Map visualizations', 'Multilingual data labels'],
            image: `${import.meta.env.BASE_URL}assets/images/agricultural-dashboard.png`
        },
        {
            title: 'Smart Resume Analyzer',
            organization: 'Final Year College Project',
            duration: 'Jan 2025 – April 2025',
            description: 'Built AI-powered tool with Gemini AI for ATS scoring, improving parsing accuracy by 35% with automated text extraction and quality scoring.',
            technologies: ['Python', 'Gemini AI', 'PyMuPDF', 'OCR', 'Firebase', 'AWS', 'Streamlit'],
            achievements: ['35% improved parsing accuracy', 'Real-time feedback system', 'Cloud storage integration'],
            image: `${import.meta.env.BASE_URL}assets/images/smart-resume-analyzer.webp`
        },
        {
            title: 'Customer Churn Prediction Model',
            organization: 'Bharat Intern',
            duration: 'Aug 2024 – Dec 2024',
            description: 'Achieved 80% accuracy using Scikit-learn and reduced churn rate by 12% through Power BI insights and predictive modeling.',
            technologies: ['Python', 'Scikit-learn', 'Power BI', 'Machine Learning'],
            achievements: ['80% model accuracy', '12% churn rate reduction', 'Automated alerts system'],
            image: `${import.meta.env.BASE_URL}assets/images/customer-churn.png`
        },
        {
            title: 'Sales Forecasting Dashboard',
            organization: 'Semester Project',
            duration: 'May 2024 – July 2024',
            description: 'Applied ARIMA time-series analysis boosting prediction accuracy by 15% with interactive Power BI dashboards.',
            technologies: ['Power BI', 'ARIMA', 'Time Series Analysis', 'DAX'],
            achievements: ['15% improved accuracy', 'Interactive dashboards', 'Automated reporting'],
            image: `${import.meta.env.BASE_URL}assets/images/sales-analysis.webp`
        },
        {
            title: 'Sentiment Analysis',
            organization: 'YBI Foundation',
            duration: 'Oct 2023 – Nov 2023',
            description: 'Scraped and analyzed 1,000+ tweets with 80% sentiment classification accuracy using NLTK and TextBlob.',
            technologies: ['Python', 'NLTK', 'TextBlob', 'Data Scraping'],
            achievements: ['80% classification accuracy', '1,000+ tweets analyzed', 'Keyword frequency analysis'],
            image: `${import.meta.env.BASE_URL}assets/images/sentiment-analysis.jpeg`
        }
    ];

    return (
        <section id="projects" className="py-20 bg-transparent relative z-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#e8f5e9] mb-4">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#22c55e] to-[#4ADE80] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card group flex flex-col h-full overflow-hidden"
                        >
                            <div className="relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-[#060f0b]/30 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-[#112e1c] flex items-center justify-center text-[#6b9b74]">
                                        No Image
                                    </div>
                                )}
                            </div>

                            <div className="card-content flex flex-col flex-grow pt-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-[#e8f5e9] mb-1 group-hover:text-[#4ADE80] transition-colors">{project.title}</h3>
                                    <div className="text-xs text-[#4ADE80]/70 font-mono mb-3">
                                        {project.organization} • {project.duration}
                                    </div>
                                    <p className="text-[#a5c4ab] text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.slice(0, 4).map(tech => (
                                                <span key={tech} className="text-xs px-2.5 py-1 bg-[#4ADE80]/8 text-[#a5c4ab] rounded-full border border-[#4ADE80]/15">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="text-xs px-2.5 py-1 bg-[#4ADE80]/8 text-[#6b9b74] rounded-full border border-[#4ADE80]/15">
                                                    +{project.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="border-t border-[#4ADE80]/10 pt-4">
                                        <h4 className="font-semibold text-xs text-[#6b9b74] uppercase tracking-wider mb-2">Key Achievements</h4>
                                        <ul className="space-y-1">
                                            {project.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start text-xs text-[#a5c4ab]">
                                                    <span className="w-1.5 h-1.5 bg-[#4ADE80] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
