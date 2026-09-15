import Reveal from './Reveal.jsx';

export default function SectionHeading({ number, label, title, children }) {
  return (
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-intro">{children}</div>}
    </Reveal>
  );
}
