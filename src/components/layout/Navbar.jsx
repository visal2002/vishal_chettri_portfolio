import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { resumeUrl } from '../../data/contact.js';
const links = [
  ['about', 'About'],
  ['projects', 'Work'],
  ['skills', 'Expertise'],
  ['experience', 'Experience'],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        rootMargin: '-15% 0px -55% 0px',
      },
    );
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a
          href="#home"
          className="wordmark"
          aria-label="Vishal Chettri home"
          onClick={() => setOpen(false)}
        >
          Vishal Chettri<span>.</span>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`} id="navigation">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="mobile-resume" href={resumeUrl} download>
            Download résumé <FiArrowUpRight />
          </a>
        </div>
        <a href="#contact" className="nav-contact" onClick={() => setOpen(false)}>
          Let’s talk <FiArrowUpRight />
        </a>
        <button
          className="menu-toggle icon-button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
}
