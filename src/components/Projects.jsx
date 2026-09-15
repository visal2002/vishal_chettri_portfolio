import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { projects } from '../data';
import { Reveal, SectionHeading } from './UI';
const categories = ['All work', 'AI & Machine Learning', 'Data Analytics'];
export default function Projects() {
  const [filter, setFilter] = useState('All work');
  const [showAll, setShowAll] = useState(false);
  const filtered = projects.filter(p => filter === 'All work' || (filter === 'Data Analytics' ? p.technologies.includes('Data Visualization') || p.technologies.includes('ARIMA') : !p.technologies.includes('Data Visualization') && !p.technologies.includes('ARIMA')));
  const visible = showAll ? filtered : filtered.slice(0, 4);
  return <section id="projects" className="section work-section"><div className="container"><SectionHeading number="02" label="SELECTED WORK" title={<>Ideas, put into <span className="serif-accent">practice.</span></>}><p>A few explorations in data, intelligence, and solving problems that matter.</p></SectionHeading><div className="project-toolbar"><div className="filters" aria-label="Filter projects">{categories.map(category => <button key={category} aria-pressed={filter === category} className={filter === category ? 'selected' : ''} onClick={() => {
            setFilter(category);
            setShowAll(false);
          }}>{category}{category === 'All work' && <span>06</span>}</button>)}</div><span className="mono project-count" aria-live="polite">{String(filtered.length).padStart(2, '0')} PROJECTS</span></div><div className="project-grid">{visible.map(project => <motion.article key={project.title} layout initial={{
          opacity: 0,
          y: 16
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.35
        }} className="project-card"><div className={`project-image project-tone-${projects.indexOf(project)}`}><img src={project.image} alt={project.title} loading="lazy" /><span className="project-number">0{projects.indexOf(project) + 1}</span><span className="project-image-label">{project.technologies.includes('Power BI') ? 'DATA & ANALYTICS' : 'APPLIED AI'}</span></div><div className="project-body"><p className="project-meta">{project.organization} <span>↗</span></p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tags">{project.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div><details className="project-details"><summary>Project highlights <FiArrowUpRight /></summary><div><p className="mono">{project.duration}</p><ul>{project.achievements.map(item => <li key={item}><FiCheck />{item}</li>)}</ul>{project.technologies.length > 4 && <p>Also built with {project.technologies.slice(4).join(', ')}.</p>}</div></details></div></motion.article>)}</div>{filtered.length > 4 && <Reveal className="more-projects"><button className="button button-outline" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show selected projects' : 'See all 6 projects'}<FiArrowDown className={showAll ? 'rotate-arrow' : ''} /></button></Reveal>}</div></section>;
}
