import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#060f0b]/80 backdrop-blur-md text-[#e8f5e9] py-12 relative z-1 border-t border-[#4ADE80]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk'] text-[#4ADE80]">Vishal Chettri</h3>
                    <p className="text-[#a5c4ab] mb-6">Data Analyst | Data Scientist | AI & Business Intelligence Specialist</p>
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="#" className="p-2 rounded-full bg-[#4ADE80]/8 text-[#a5c4ab] hover:text-[#060f0b] hover:bg-[#4ADE80] transition-all transform hover:-translate-y-1 border border-[#4ADE80]/15 hover:border-[#4ADE80]" title="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.5 0 4.1-2.3 4.1-5.7 0-1.1-.2-2.3-1.1-3.4 0 0-1.4 0-2.8 1.3a9.9 9.9 0 0 0-5.6 0c-1.4-1.3-2.8-1.3-2.8-1.3-.9 1.1-1.1 2.3-1.1 3.4 0 3.4.6 5.7 4.1 5.7a4.8 4.8 0 0 0-1 3.2v4" /><path d="M9 18c-4.5 1.2-4.5-2-5-3" /></svg>
                        </a>
                        <a href="https://linkedin.com/in/vishal-chettri-3122831b1" className="p-2 rounded-full bg-[#4ADE80]/8 text-[#a5c4ab] hover:text-[#060f0b] hover:bg-[#4ADE80] transition-all transform hover:-translate-y-1 border border-[#4ADE80]/15 hover:border-[#4ADE80]" title="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="mailto:chettrivishal22@gmail.com" className="p-2 rounded-full bg-[#4ADE80]/8 text-[#a5c4ab] hover:text-[#060f0b] hover:bg-[#4ADE80] transition-all transform hover:-translate-y-1 border border-[#4ADE80]/15 hover:border-[#4ADE80]" title="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </a>
                    </div>
                    <p className="text-[#6b9b74] text-sm">© 2026 Vishal Chettri. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
