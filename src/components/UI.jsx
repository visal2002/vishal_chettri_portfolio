import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({
  children,
  className = '',
  delay = 0
}) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={{
    opacity: 0,
    y: reduce ? 0 : 24
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: 0.12
  }} transition={{
    duration: reduce ? 0 : 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }}>{children}</motion.div>;
}
export function SectionHeading({
  number,
  label,
  title,
  children
}) {
  return <Reveal className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>{children && <div className="section-intro">{children}</div>}</Reveal>;
}
export const resumeUrl = `${import.meta.env.BASE_URL}Vishal_Chettri_Technical_Business_Analyst.pdf`;
export const linkedinUrl = 'https://linkedin.com/in/vishal-chettri-3122831b1';
export const email = 'chettrivishal22@gmail.com';
