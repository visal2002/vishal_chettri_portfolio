import { useState } from 'react';
import { FiArrowDown, FiAward, FiBookOpen } from 'react-icons/fi';
import { experiences, certifications, languages } from '../../data/portfolio.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeading
          number="04"
          label="THE JOURNEY SO FAR"
          title={
            <>
              Learning by <span className="serif-accent">doing.</span>
            </>
          }
        >
          <p>
            Different teams. New perspectives.
            <br />A shared drive to make an impact.
          </p>
        </SectionHeading>
        <div className="experience-list">
          {experiences.slice(0, expanded ? experiences.length : 4).map((exp, index) => (
            <Reveal key={exp.title} className="experience-row">
              <div className="experience-date">
                <span className={`timeline-dot ${index === 0 ? 'current' : ''}`} />
                {exp.duration}
              </div>
              <img src={exp.image} alt="" loading="lazy" />
              <div className="experience-info">
                <p>{exp.company}</p>
                <h3>{exp.title}</h3>
                <details>
                  <summary>
                    About this role <span>+</span>
                  </summary>
                  <p>{exp.description}</p>
                </details>
              </div>
            </Reveal>
          ))}
        </div>
        <button className="text-link experience-toggle" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show recent experience' : `View all ${experiences.length} experiences`}
          <FiArrowDown className={expanded ? 'rotate-arrow' : ''} />
        </button>
        <div className="credentials-grid">
          <Reveal className="credential">
            <FiBookOpen />
            <p className="eyebrow">EDUCATION</p>
            <h3>BCA in Data Science</h3>
            <p>
              Maharishi Markandeshwar
              <br />
              (Deemed to be University)
            </p>
            <p className="education-secondary">High school · Drametse Central School</p>
          </Reveal>
          <Reveal className="credential">
            <FiAward />
            <p className="eyebrow">ALWAYS LEARNING</p>
            <h3>Certifications & growth</h3>
            <div className="tags">
              {certifications.map((cert) => (
                <span key={cert}>{cert}</span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="languages">
          <span className="eyebrow">LET’S FIND A COMMON LANGUAGE</span>
          <p>{languages.join(' · ')}</p>
        </div>
      </div>
    </section>
  );
}
