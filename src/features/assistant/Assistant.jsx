import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi';
import { answer } from './answer.js';
export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi! Curious about my work? I’m Vishal’s portfolio guide. Ask me about skills, projects, or the journey so far.',
    },
  ]);
  const end = useRef(null);
  const field = useRef(null);
  const trigger = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (open) field.current?.focus();
  }, [open]);
  useEffect(() => {
    if (open)
      end.current?.scrollIntoView({
        behavior: reduced ? 'instant' : 'smooth',
        block: 'nearest',
      });
  }, [messages, open, reduced]);
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  function send(text) {
    if (!text.trim()) return;
    setMessages((current) => [
      ...current,
      {
        role: 'user',
        text: text.trim(),
      },
      {
        role: 'assistant',
        text: answer(text),
      },
    ]);
    setInput('');
  }
  return (
    <div className="chat-widget">
      <AnimatePresence>
        {open && (
          <motion.section
            id="portfolio-guide"
            className="chat-panel"
            role="dialog"
            aria-modal="false"
            aria-label="Portfolio guide"
            initial={{
              opacity: 0,
              y: reduced ? 0 : 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: reduced ? 0 : 14,
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') close();
            }}
          >
            <div className="chat-header">
              <div>
                <strong>A little help exploring?</strong>
                <p>Vishal’s portfolio guide</p>
              </div>
              <button className="icon-button" onClick={close} aria-label="Close portfolio guide">
                <FiX />
              </button>
            </div>
            <div className="chat-messages" role="log" aria-live="polite" aria-relevant="additions">
              {messages.map((message, index) => (
                <p key={index} className={`chat-message ${message.role}`}>
                  <span className="sr-only">{message.role === 'user' ? 'You: ' : 'Guide: '}</span>
                  {message.text}
                </p>
              ))}
              <div ref={end} />
            </div>
            <div className="chat-suggestions">
              {['Skills', 'Projects', 'Experience', 'Contact'].map((topic) => (
                <button key={topic} onClick={() => send(topic)}>
                  {topic}
                </button>
              ))}
            </div>
            <form
              className="chat-form"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <label className="sr-only" htmlFor="guide-question">
                Ask about Vishal
              </label>
              <input
                ref={field}
                id="guide-question"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Vishal…"
                maxLength={500}
                autoComplete="off"
              />
              <button
                className="icon-button"
                type="submit"
                aria-label="Send question"
                disabled={!input.trim()}
              >
                <FiSend />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
      <button
        ref={trigger}
        className="chat-toggle"
        aria-label={open ? 'Close portfolio guide' : 'Open portfolio guide'}
        aria-expanded={open}
        aria-controls="portfolio-guide"
        onClick={() => (open ? close() : setOpen(true))}
      >
        {open ? <FiX /> : <FiMessageCircle />}
      </button>
    </div>
  );
}
