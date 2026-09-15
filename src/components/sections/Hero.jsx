import { FiArrowDown, FiArrowUpRight, FiBarChart2, FiMapPin } from 'react-icons/fi';
import { SiPython, SiMysql, SiTensorflow } from 'react-icons/si';
import Reveal from '../ui/Reveal.jsx';
import { resumeUrl } from '../../data/contact.js';
import DataGlobe from '../visuals/DataGlobe.jsx';
export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> DATA SCIENCE. HUMAN IMPACT.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Making data
              <br />
              mean <span className="serif-accent">more.</span>
              <span className="hero-asterisk" aria-hidden="true">
                ✳
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-name">
              Hi, I’m Vishal Chettri{' '}
              <span className="small-wave" aria-hidden="true">
                ↗
              </span>
            </p>
            <p className="hero-description">
              A data scientist & AI enthusiast turning complex information into clear insights and
              thoughtful digital experiences.
            </p>
          </Reveal>
          <Reveal className="hero-actions" delay={0.24}>
            <a className="button button-primary" href="#projects">
              Explore my work <FiArrowUpRight />
            </a>
            <a className="text-link" href={resumeUrl} download>
              Download résumé <FiArrowDown />
            </a>
          </Reveal>
          <Reveal className="hero-location" delay={0.3}>
            <FiMapPin />
            <span>Based in Thimphu, Bhutan</span>
            <span className="location-divider" />
            <span>Thinking globally.</span>
          </Reveal>
        </div>
        <Reveal className="hero-visual" delay={0.15}>
          <div className="visual-coordinate">27.4728° N · 89.6393° E</div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <DataGlobe />
          <div className="float-label label-python">
            <SiPython />
            <span>Python</span>
            <span className="label-dot" />
          </div>
          <div className="float-label label-insights">
            <FiBarChart2 />
            <span>Data → Insights</span>
          </div>
          <div className="float-label label-ml">
            <span className="orange-spark">✳</span>
            <span>Machine learning</span>
          </div>
          <div className="visual-caption">
            <span className="status-dot" /> CONNECTING THE DOTS
          </div>
          <span className="visual-plus plus-one">+</span>
          <span className="visual-plus plus-two">+</span>
        </Reveal>
      </div>
      <div className="hero-bottom">
        <a href="#about" className="scroll-link">
          <span className="scroll-circle">
            <FiArrowDown />
          </span>{' '}
          A little curiosity goes a long way
        </a>
        <span className="mono">SCROLL TO EXPLORE</span>
      </div>
      <div className="tool-strip">
        <span className="tool-strip-label">MY EVERYDAY TOOLKIT</span>
        <div>
          <SiPython /> Python
        </div>
        <div>
          <SiMysql /> SQL
        </div>
        <div>
          <FiBarChart2 /> Power BI
        </div>
        <div>
          <SiTensorflow /> Machine Learning
        </div>
        <div>
          <span className="tableau-symbol">✣</span> Tableau
        </div>
      </div>
    </section>
  );
}
