import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Resume Knowledge Base ──────────────────────────────────────────
const resumeData = {
    name: "Vishal Chettri",
    title: "Data Analyst | Data Scientist | AI & Business Intelligence Specialist",
    location: "Thimphu, Bhutan",
    phone: "17548947",
    email: "chettrivishal22@gmail.com",
    linkedin: "linkedin.com/in/vishal-chettri-3122831b1",
    summary: "Results-driven Data Scientist with a BCA in Data Science and strong skills in Python, SQL, Power BI, and Tableau. Experienced in analytics, business process analysis, and machine learning through internships with UNDP Bhutan, GovTech Bhutan, and Earth5R. Proven track record in projects such as Smart Resume Analyzer, Customer Churn Prediction, and Sentiment Analysis.",
    education: [
        { degree: "Bachelor of Computer Application (Data Science)", school: "Maharishi Markandeshwar (Deemed to be University)" },
        { degree: "High School", school: "Drametse Central School" }
    ],
    skills: {
        programming: ["Python (Pandas, NumPy, Scikit-learn)", "SQL", "MySQL"],
        ml: ["Regression", "NLP", "Hypothesis Testing", "Predictive Modeling"],
        visualization: ["Power BI", "Excel (PivotTables, VLOOKUP)"],
        tools: ["GitHub", "Firebase", "AWS", "OCR (PyMuPDF)"],
        web: ["HTML", "CSS", "JavaScript"],
        creative: ["Canva", "Adobe Lightroom", "Adobe Rush"],
        soft: ["Analytical Thinking", "Effective Communication", "Cross-functional Collaboration", "Attention to Detail", "Team Player"]
    },
    experience: [
        { title: "Project Management Unit (PMU), Dept of Tourism", company: "UNDP Bhutan", duration: "Oct 2025 – Present", type: "Onsite", desc: "Supporting project coordination, monitoring & evaluation, documentation, and data-driven reporting aligned with UNDP's sustainable development goals." },
        { title: "UIUX & Frontend Developer", company: "Jorden DeepMind Systems", duration: "Oct 2025 – Present", type: "Hybrid", desc: "Design wireframes, prototypes, and high-fidelity UI in Figma. Build responsive interfaces using HTML, CSS, JavaScript, and React." },
        { title: "Member - EAB", company: "Evaluation Association of Bhutan", duration: "Sep 2025 – Present", type: "Hybrid", desc: "Contributing to advancement of monitoring and evaluation practices, knowledge-sharing, and data-driven decision-making." },
        { title: "Research Analyst", company: "Dragale Aviation", duration: "Jan 2025 – Jun 2025", type: "Remote", desc: "Data-driven research, authored 5+ articles using Python visualizations, increasing engagement by 15%." },
        { title: "Data Science Content Writer", company: "Earth5R", duration: "May 2024 – Jul 2024", type: "Remote", desc: "Created technical articles on data science applications in aviation." },
        { title: "ML Intern", company: "YBI Foundation", duration: "Oct 2023 – Nov 2023", type: "Remote", desc: "Developed and tested machine learning models for operational efficiency." }
    ],
    projects: [
        { name: "AI Mental Health Assistant", tech: "Python, Transformer Models, NLP, ML", desc: "Led development using MentalBERT/MentalRoBERTa for emotion detection. GovTech Bhutan & Omdena." },
        { name: "Agricultural & Livestock Data Dashboard", tech: "Power BI, Excel, SQL", desc: "Interactive Power BI dashboard for agriculture/livestock survey data with region-wise analysis." },
        { name: "Smart Resume Analyzer", tech: "Python, Gemini AI, PyMuPDF, OCR, Firebase, AWS, Streamlit", desc: "AI-powered ATS scoring tool, improved parsing accuracy by 35%. Final year project." },
        { name: "Customer Churn Prediction Model", tech: "Python, Scikit-learn, Power BI", desc: "80% accuracy, reduced churn rate by 12%. Bharat Intern." },
        { name: "Sales Forecasting Dashboard", tech: "Power BI, ARIMA, Time Series, DAX", desc: "ARIMA time-series analysis, boosted prediction accuracy by 15%." },
        { name: "Sentiment Analysis", tech: "Python, NLTK, TextBlob", desc: "Analyzed 1,000+ tweets with 80% classification accuracy. YBI Foundation." }
    ],
    certifications: ["Google Data Analytics", "IBM Python for Data Science", "edX Machine Learning (Harvard)", "Microsoft Excel (Data Analysis)", "Power BI Visualization", "Accenture SWE Simulation"],
    languages: ["English (Fluent)", "Hindi (Fluent)", "Dzongkha (Native)", "Nepali (Fluent)", "Tshangla (Fluent)"]
};

// ─── Simple keyword-based Q&A engine ────────────────────────────────
function getAnswer(question) {
    const q = question.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|greetings|howdy|good (morning|afternoon|evening))/.test(q)) {
        return `Hello! 👋 I'm Vishal's portfolio assistant. I know all about his skills, experience, projects, and education. What would you like to know?`;
    }

    // Who / about
    if (/who (is|are)|about (vishal|him|you)|tell me about|introduce/.test(q)) {
        return `${resumeData.name} is a ${resumeData.title} based in ${resumeData.location}. ${resumeData.summary}`;
    }

    // Contact info
    if (/contact|email|phone|reach|hire|get in touch/.test(q)) {
        return `📧 Email: ${resumeData.email}\n📱 Phone: ${resumeData.phone}\n📍 Location: ${resumeData.location}\n🔗 LinkedIn: ${resumeData.linkedin}`;
    }

    // Skills
    if (/skill|tech|stack|programming|tools?|what (can|does) (he|vishal) (know|use)|expertise/.test(q)) {
        const allSkills = [
            `💻 Programming: ${resumeData.skills.programming.join(', ')}`,
            `🤖 ML: ${resumeData.skills.ml.join(', ')}`,
            `📊 Visualization: ${resumeData.skills.visualization.join(', ')}`,
            `🔧 Tools: ${resumeData.skills.tools.join(', ')}`,
            `🌐 Web: ${resumeData.skills.web.join(', ')}`,
            `🎨 Creative: ${resumeData.skills.creative.join(', ')}`
        ];
        return `Here are Vishal's technical skills:\n\n${allSkills.join('\n')}`;
    }

    // Python specific
    if (/python/.test(q)) {
        return `Vishal is proficient in Python with expertise in Pandas, NumPy, Scikit-learn, NLTK, TextBlob, PyMuPDF, and Streamlit. He's used Python across multiple projects including the Smart Resume Analyzer, Customer Churn Prediction, and Sentiment Analysis.`;
    }

    // Power BI
    if (/power\s*bi|dashboard|visualization/.test(q)) {
        return `Vishal is skilled in Power BI and data visualization. He's built interactive dashboards including the Agricultural & Livestock Data Dashboard and Sales Forecasting Dashboard using ARIMA, DAX, and interactive KPIs.`;
    }

    // Machine Learning
    if (/machine learning|ml|ai|artificial intelligence|deep learning/.test(q)) {
        return `Vishal has experience in Machine Learning including Regression, NLP, Hypothesis Testing, and Predictive Modeling. Key ML projects: AI Mental Health Assistant (transformer models), Customer Churn Prediction (80% accuracy), and Sentiment Analysis (NLTK/TextBlob).`;
    }

    // Experience / work
    if (/experience|work|career|job|intern|company|companies|where (has|did|does) (he|vishal) work/.test(q)) {
        const expList = resumeData.experience.map(e => `• ${e.title} at ${e.company} (${e.duration})`).join('\n');
        return `Here's Vishal's professional experience:\n\n${expList}`;
    }

    // UNDP
    if (/undp|united nations/.test(q)) {
        const undp = resumeData.experience[0];
        return `At ${undp.company}: ${undp.title} (${undp.duration})\n\n${undp.desc}`;
    }

    // Projects
    if (/project|portfolio|built|created|developed|made/.test(q)) {
        const projList = resumeData.projects.map(p => `• ${p.name}: ${p.desc}`).join('\n\n');
        return `Here are Vishal's key projects:\n\n${projList}`;
    }

    // Resume analyzer
    if (/resume|analyzer|ats/.test(q)) {
        const proj = resumeData.projects[2];
        return `${proj.name}: ${proj.desc}\nTech: ${proj.tech}`;
    }

    // Education
    if (/education|degree|university|college|school|study|studied|qualification/.test(q)) {
        const eduList = resumeData.education.map(e => `🎓 ${e.degree} — ${e.school}`).join('\n');
        return `Vishal's education:\n\n${eduList}`;
    }

    // Certifications
    if (/certif|course|training|google|ibm|harvard|edx/.test(q)) {
        return `Vishal's certifications:\n\n${resumeData.certifications.map(c => `✅ ${c}`).join('\n')}`;
    }

    // Languages
    if (/language|speak|fluent|dzongkha|nepali|hindi|tshangla/.test(q)) {
        return `Vishal speaks ${resumeData.languages.length} languages:\n\n${resumeData.languages.map(l => `🗣️ ${l}`).join('\n')}`;
    }

    // Location
    if (/location|where|based|live|from|bhutan|thimphu/.test(q)) {
        return `Vishal is based in ${resumeData.location}. He's originally from Bhutan and speaks Dzongkha (Native), English, Hindi, Nepali, and Tshangla fluently.`;
    }

    // Soft skills
    if (/soft skill|teamwork|communication|leadership/.test(q)) {
        return `Vishal's soft skills: ${resumeData.skills.soft.join(', ')}`;
    }

    // Thanks
    if (/thank|thanks|thx/.test(q)) {
        return `You're welcome! Feel free to ask anything else about Vishal, or contact him directly at ${resumeData.email} 😊`;
    }

    // Help / what can you do
    if (/help|what can you|what do you know|capabilities/.test(q)) {
        return `I can answer questions about Vishal's:\n\n• 👤 Background & summary\n• 💼 Work experience\n• 🛠️ Technical skills\n• 📂 Projects\n• 🎓 Education\n• 📜 Certifications\n• 🗣️ Languages\n• 📞 Contact information\n\nJust ask away!`;
    }

    // Fallback
    return `I'm not sure about that, but I can help with questions about Vishal's skills, experience, projects, education, certifications, or contact info. You can also reach him directly at ${resumeData.email}!`;
}

// ─── Component ──────────────────────────────────────────────────────
const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chatInput, setChatInput] = useState("");
    const [chatHistory, setChatHistory] = useState([
        { sender: "bot", message: "Hi! 👋 I'm Vishal's portfolio assistant. Ask me anything about his skills, experience, projects, or education!" }
    ]);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    const toggleChatbot = () => setIsOpen(prev => !prev);

    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        const userMsg = chatInput.trim();
        setChatHistory(prev => [...prev, { sender: "user", message: userMsg }]);
        setChatInput("");

        // Simulate typing delay
        setTimeout(() => {
            const answer = getAnswer(userMsg);
            setChatHistory(prev => [...prev, { sender: "bot", message: answer }]);
        }, 400 + Math.random() * 400);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 45 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleChatbot}
                        className="w-14 h-14 bg-[#4ADE80] rounded-full flex items-center justify-center shadow-lg shadow-[#4ADE80]/30 hover:shadow-[#4ADE80]/50 transition-shadow focus:outline-none"
                        aria-label="Open Chatbot"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#060f0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        <span className="absolute top-0 right-0 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e]"></span>
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.section
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-80 sm:w-96 h-[30rem] flex flex-col glass border border-[#4ADE80]/15 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 bg-[#060f0b]/80 border-b border-[#4ADE80]/10">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-[#4ADE80] flex items-center justify-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#060f0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" /></svg>
                                </div>
                                <div>
                                    <h2 className="font-bold text-[#e8f5e9] text-sm">Portfolio Assistant</h2>
                                    <p className="text-[#4ADE80] text-xs">Ask about Vishal's resume</p>
                                </div>
                            </div>
                            <button onClick={toggleChatbot} aria-label="Close Chatbot" className="text-[#6b9b74] hover:text-[#e8f5e9] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        {/* Chat History */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#060f0b]/50">
                            {chatHistory.map((chat, idx) => (
                                <div key={idx} className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`px-4 py-2.5 rounded-2xl max-w-[85%] text-sm whitespace-pre-line ${chat.sender === "user"
                                        ? "bg-[#4ADE80] text-[#060f0b] rounded-br-sm font-medium"
                                        : "bg-[#0a1a12] text-[#a5c4ab] rounded-bl-sm border border-[#4ADE80]/10"
                                    }`}>
                                        {chat.message}
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Quick suggestions */}
                        {chatHistory.length <= 1 && (
                            <div className="px-4 py-2 flex flex-wrap gap-1.5 bg-[#060f0b]/50 border-t border-[#4ADE80]/5">
                                {['Skills', 'Experience', 'Projects', 'Education', 'Contact'].map(q => (
                                    <button key={q} onClick={() => { setChatInput(q); }} className="text-xs px-3 py-1.5 rounded-full border border-[#4ADE80]/20 text-[#4ADE80] hover:bg-[#4ADE80]/10 transition-colors">
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-3 bg-[#060f0b]/80 border-t border-[#4ADE80]/10">
                            <form onSubmit={handleChatSubmit} className="flex gap-2">
                                <input
                                    type="text"
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                    className="flex-1 px-4 py-2 rounded-full border border-[#4ADE80]/15 bg-[#0a1a12] text-[#e8f5e9] text-sm focus:outline-none focus:border-[#4ADE80]/40 focus:ring-1 focus:ring-[#4ADE80]/30 placeholder-[#6b9b74]"
                                    placeholder="Ask about Vishal..."
                                    autoComplete="off"
                                />
                                <button
                                    type="submit"
                                    className="w-10 h-10 bg-[#4ADE80] text-[#060f0b] rounded-full flex items-center justify-center hover:bg-[#22c55e] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!chatInput.trim()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                </button>
                            </form>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
