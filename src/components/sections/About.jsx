import { FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { linkedinUrl } from '../../data/contact.js';
export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading
        number="01"
        label="THE PERSON BEHIND THE DATA"
        title={
          <>
            Analytical mind.
            <br />
            <span className="serif-accent">Creative spirit.</span>
          </>
        }
      >
        <p>
          I connect the technical with the human — building things that are as useful as they are
          thoughtful.
        </p>
      </SectionHeading>
      <div className="about-grid">
        <Reveal className="portrait-card">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/profile.jpeg`}
            alt="Vishal Chettri"
            loading="lazy"
          />
          <span className="portrait-note">
            Always learning.
            <br />
            <i>Always curious.</i>
          </span>
          <div className="portrait-location">
            <FiMapPin /> Thimphu, Bhutan <span>↗</span>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          <p className="about-lead">
            I’m Vishal, a data scientist who believes the best insights lead to{' '}
            <em>real-world change.</em>
          </p>
          <p>
            With a BCA in Data Science, I bring together Python, SQL, machine learning, and business
            intelligence to make complex data approachable and actionable.
          </p>
          <p>
            My journey spans analytics and meaningful projects with UNDP Bhutan, GovTech Bhutan, and
            Earth5R. Today, I support banking systems and data-driven decisions as an IT Officer at
            Bank of Bhutan, and contribute to collaborative AI projects at Omdena.
          </p>
          <div className="about-facts">
            <div>
              <strong>Data + design</strong>
              <span>A multidisciplinary approach</span>
            </div>
            <div>
              <strong>Bhutan → beyond</strong>
              <span>Local perspective, global collaboration</span>
            </div>
          </div>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-link">
            More about my journey <FiArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
