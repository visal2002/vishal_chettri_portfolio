import React from 'react';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Assistant';
export default function App() {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Skip to content</a><motion.div className="reading-progress" style={{
      scaleX
    }} /><Navbar /><main id="main"><Hero /><About /><Projects /><Skills /><Experience /><Contact /></main><Footer /><Chatbot /></MotionConfig>;
}
