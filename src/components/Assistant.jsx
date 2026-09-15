import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi';
import { projects, experiences, certifications, languages } from '../data';
import { email } from './UI';
function answer(question) {
  const q = question.toLowerCase();
  if (/contact|email|phone|hire|reach/.test(q)) return `You can reach Vishal at ${email}, or call +975 17548947. He’s based in Thimphu, Bhutan. The contact form below is another way to get in touch.`;
  if (/experience|career|job|work|company|companies|intern/.test(q)) return experiences.map(e => `${e.title}\n${e.company} · ${e.duration}`).join('\n\n');
  if (/education|degree|school|college|university/.test(q)) return 'Vishal holds a Bachelor of Computer Application in Data Science from Maharishi Markandeshwar (Deemed to be University). He attended Drametse Central School.';
  if (/certif|course|training/.test(q)) return certifications.join('\n');
  if (/language|speak/.test(q)) return languages.join('\n');
  if (/resume|analyzer|ats/.test(q)) return `${projects[2].title}\n${projects[2].description}\n\nBuilt with ${projects[2].technologies.join(', ')}. You can download Vishal’s résumé from the top of the page.`;
  if (/project|built|portfolio/.test(q)) return projects.map(p => `${p.title}\n${p.description}`).join('\n\n');
  if (/skill|python|sql|tech|power bi|machine|\bai\b|expertise/.test(q)) return 'Vishal works with Python (Pandas, NumPy, Scikit-learn), SQL, Power BI, Tableau, and Excel. His machine learning skills include NLP, regression, and predictive modeling. He also builds interfaces with React, JavaScript, HTML, and CSS, and designs with Figma and Canva.';
  if (/about|who|vishal|location|bhutan/.test(q)) return 'Vishal Chettri is a data scientist and AI enthusiast based in Thimphu, Bhutan. He combines analytics, business intelligence, machine learning, and interface design. He currently works as an IT Officer at Bank of Bhutan and an AI Engineer with Omdena.';
  if (/^(hi|hello|hey)\b/.test(q)) return 'Hi there! I can help you explore Vishal’s projects, skills, experience, education, or contact details. What would you like to know?';
  return 'I’m a quick guide to this portfolio. Try asking about Vishal’s skills, projects, experience, education, certifications, or contact details. For anything else, send him a message using the contact form.';
}
export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{
    role: 'assistant',
    text: 'Hi! Curious about my work? I’m Vishal’s portfolio guide. Ask me about skills, projects, or the journey so far.'
  }]);
  const end = useRef(null);
  const field = useRef(null);
  const trigger = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (open) field.current?.focus();
  }, [open]);
  useEffect(() => {
    if (open) end.current?.scrollIntoView({
      behavior: reduced ? 'instant' : 'smooth',
      block: 'nearest'
    });
  }, [messages, open, reduced]);
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  function send(text) {
    if (!text.trim()) return;
    setMessages(current => [...current, {
      role: 'user',
      text: text.trim()
    }, {
      role: 'assistant',
      text: answer(text)
    }]);
    setInput('');
  }
  return <div className="chat-widget"><AnimatePresence>{open && <motion.section id="portfolio-guide" className="chat-panel" role="dialog" aria-modal="false" aria-label="Portfolio guide" initial={{
        opacity: 0,
        y: reduced ? 0 : 14
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: reduced ? 0 : 14
      }} onKeyDown={e => {
        if (e.key === 'Escape') close();
      }}><div className="chat-header"><div><strong>A little help exploring?</strong><p>Vishal’s portfolio guide</p></div><button className="icon-button" onClick={close} aria-label="Close portfolio guide"><FiX /></button></div><div className="chat-messages" role="log" aria-live="polite" aria-relevant="additions">{messages.map((message, index) => <p key={index} className={`chat-message ${message.role}`}><span className="sr-only">{message.role === 'user' ? 'You: ' : 'Guide: '}</span>{message.text}</p>)}<div ref={end} /></div><div className="chat-suggestions">{['Skills', 'Projects', 'Experience', 'Contact'].map(topic => <button key={topic} onClick={() => send(topic)}>{topic}</button>)}</div><form className="chat-form" onSubmit={e => {
          e.preventDefault();
          send(input);
        }}><label className="sr-only" htmlFor="guide-question">Ask about Vishal</label><input ref={field} id="guide-question" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about Vishal…" maxLength={500} autoComplete="off" /><button className="icon-button" type="submit" aria-label="Send question" disabled={!input.trim()}><FiSend /></button></form></motion.section>}</AnimatePresence><button ref={trigger} className="chat-toggle" aria-label={open ? 'Close portfolio guide' : 'Open portfolio guide'} aria-expanded={open} aria-controls="portfolio-guide" onClick={() => open ? close() : setOpen(true)}>{open ? <FiX /> : <FiMessageCircle />}</button></div>;
}
