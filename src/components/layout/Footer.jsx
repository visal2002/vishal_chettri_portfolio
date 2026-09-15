import { FiArrowUp } from 'react-icons/fi';
export default function Footer() {
  return (
    <footer className="container footer">
      <a className="wordmark" href="#home">
        Vishal Chettri<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Vishal Chettri.</p>
      <a href="#home" className="back-top">
        Back to top <FiArrowUp />
      </a>
    </footer>
  );
}
