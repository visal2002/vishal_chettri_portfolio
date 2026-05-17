import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarBackground from './components/StarBackground';
import Snowfall from './components/Snowfall';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const PortfolioHome = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden bg-[#060f0b] relative z-0 text-[#a5c4ab] font-inter selection:bg-[#4ADE80]/20 selection:text-[#e8f5e9]">
        <StarBackground />
        <div className="grid-background"></div>
        <Snowfall count={40} />

        <Routes>
          <Route path="/" element={<PortfolioHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
