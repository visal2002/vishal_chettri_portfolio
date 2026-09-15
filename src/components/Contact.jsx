import React, { useState } from 'react';
import { FiArrowUpRight, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Reveal, email, linkedinUrl } from './UI';
export default function Contact() {
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  async function submit(event) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!['name', 'email', 'message'].every(key => data.get(key)?.trim())) {
      setStatus({
        type: 'error',
        message: 'Please add your name, email, and message.'
      });
      return;
    }
    setSending(true);
    setStatus({
      type: '',
      message: ''
    });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch('https://formspree.io/f/mykyronj', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        },
        signal: controller.signal
      });
      if (!response.ok) throw new Error('Unable to send');
      setStatus({
        type: 'success',
        message: 'Message sent. Thanks for reaching out — I’ll be in touch!'
      });
      form.reset();
    } catch {
      setStatus({
        type: 'error',
        message: 'Your message couldn’t be sent. Please try again or email me directly. Your draft is still here.'
      });
    } finally {
      clearTimeout(timeout);
      setSending(false);
    }
  }
  return <section id="contact" className="section container contact-section"><Reveal className="contact-copy"><p className="eyebrow"><span>05 /</span> GOOD THINGS START WITH A CONVERSATION</p><h2>Have something<br />in <span className="serif-accent">mind?</span><span className="contact-star" aria-hidden="true">✳</span></h2><p>A project, a possibility, or just a hello.<br />I’d love to hear what you’re thinking.</p><a className="contact-email" href={`mailto:${email}`}>{email}<FiArrowUpRight /></a><div className="contact-links"><a href={linkedinUrl} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a><a href="tel:+97517548947"><FiPhone /> +975 17548947</a></div><span className="contact-location"><FiMapPin /> Thimphu, Bhutan</span></Reveal><Reveal className="contact-form-wrap" delay={0.1}><form onSubmit={submit} className="contact-form"><div className="form-row"><label htmlFor="name">Your name<input id="name" name="name" placeholder="Alex Smith" autoComplete="name" required maxLength={120} /></label><label htmlFor="email">Email address<input id="email" name="email" type="email" placeholder="alex@example.com" autoComplete="email" required maxLength={254} /></label></div><label htmlFor="subject">What’s on your mind? <span>(optional)</span><input id="subject" name="subject" placeholder="A project, an opportunity, a good idea…" maxLength={200} /></label><label htmlFor="message">Your message<textarea id="message" name="message" placeholder="Tell me a little about it…" rows={4} required maxLength={5000} /></label><input type="text" name="_gotcha" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" /><button type="submit" className="button button-primary" disabled={sending}>{sending ? 'Sending your message…' : 'Send message'}<FiArrowUpRight /></button><p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p>{status.type === 'error' && <a className="text-link" href={`mailto:${email}`}><FiMail /> Email me directly</a>}</form></Reveal></section>;
}
