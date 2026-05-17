import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formStatus.message) setFormStatus({ type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: '', message: '' });

        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
            setIsSubmitting(false);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
            setIsSubmitting(false);
            return;
        }

        try {
            const FORMSPREE_FORM_ID = 'mykyronj';
            const formDataToSend = new URLSearchParams();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('subject', formData.subject || 'Portfolio Contact Form');
            formDataToSend.append('message', formData.message);
            formDataToSend.append('_replyto', formData.email);
            formDataToSend.append('_subject', formData.subject || 'New Message from Portfolio');

            const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formDataToSend,
            });
            const responseData = await response.json();
            if (response.ok) {
                setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error(responseData.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            const mailtoLink = `mailto:chettrivishal22@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
            window.location.href = mailtoLink;
            setFormStatus({ type: 'info', message: 'Opening your email client as fallback.' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = "w-full px-4 py-3 bg-[#0a1a12]/80 border border-[#4ADE80]/10 rounded-xl text-[#e8f5e9] placeholder-[#6b9b74] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]/50 focus:border-[#4ADE80]/30 transition-all hover:border-[#4ADE80]/20";

    return (
        <section id="contact" className="py-20 bg-transparent relative z-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#e8f5e9] mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#22c55e] to-[#4ADE80] mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <h3 className="text-2xl font-semibold text-[#e8f5e9] mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {[
                                    { icon: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>, text: 'chettrivishal22@gmail.com' },
                                    { icon: <path d="M22 16.92v3a2 2 0 0 1-2 2A16 16 0 0 1 3.08 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 10 10 0 0 0 10 10 2 2 0 0 1 2 2z" />, text: '17548947' },
                                    { icon: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>, text: 'Thimphu, Bhutan' },
                                    { icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>, text: 'LinkedIn Profile', href: 'https://linkedin.com/in/vishal-chettri-3122831b1' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center group">
                                        <div className="w-12 h-12 rounded-xl bg-[#4ADE80]/8 flex items-center justify-center mr-4 group-hover:bg-[#4ADE80]/15 transition-colors border border-[#4ADE80]/15">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4ADE80]">{item.icon}</svg>
                                        </div>
                                        {item.href ? (
                                            <a href={item.href} className="text-[#a5c4ab] hover:text-[#4ADE80] transition-colors">{item.text}</a>
                                        ) : (
                                            <span className="text-[#a5c4ab] group-hover:text-[#e8f5e9] transition-colors">{item.text}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                            <h3 className="text-2xl font-semibold text-[#e8f5e9] mb-6">Send me a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name *" required className={inputClass} />
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email *" required className={inputClass} />
                                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" className={inputClass} />
                                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message *" required rows="5" className={`${inputClass} resize-none`}></textarea>
                                {formStatus.message && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                                        className={`p-3 rounded-lg ${formStatus.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : formStatus.type === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20'}`}>
                                        {formStatus.message}
                                    </motion.div>
                                )}
                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSubmitting}
                                    className="w-full button bg-[#4ADE80] hover:bg-[#22c55e] text-[#060f0b] font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-[#4ADE80]/15">
                                    {isSubmitting ? (
                                        <><svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</>
                                    ) : (
                                        <><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>Send Message</>
                                    )}
                                </motion.button>
                            </form>
                            <div className="mt-6">
                                <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    href={`${import.meta.env.BASE_URL}Vishal_Chettri_Technical_Business_Analyst.pdf`}
                                    download="VISHALCHETTRIResume.pdf"
                                    className="button outline w-full text-center flex items-center justify-center group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 group-hover:text-[#4ADE80]"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                    Download Resume
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
