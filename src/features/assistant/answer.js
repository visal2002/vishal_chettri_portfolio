import { projects, experiences, certifications, languages } from '../../data/portfolio.js';
import { email } from '../../data/contact.js';

export function answer(question) {
  const q = question.toLowerCase();
  if (/contact|email|phone|hire|reach/.test(q))
    return `You can reach Vishal at ${email}, or call +975 17548947. He’s based in Thimphu, Bhutan. The contact form below is another way to get in touch.`;
  if (/experience|career|job|work|company|companies|intern/.test(q))
    return experiences.map((e) => `${e.title}\n${e.company} · ${e.duration}`).join('\n\n');
  if (/education|degree|school|college|university/.test(q))
    return 'Vishal holds a Bachelor of Computer Application in Data Science from Maharishi Markandeshwar (Deemed to be University). He attended Drametse Central School.';
  if (/certif|course|training/.test(q)) return certifications.join('\n');
  if (/language|speak/.test(q)) return languages.join('\n');
  if (/resume|analyzer|ats/.test(q))
    return `${projects[2].title}\n${projects[2].description}\n\nBuilt with ${projects[2].technologies.join(', ')}. You can download Vishal’s résumé from the top of the page.`;
  if (/project|built|portfolio/.test(q))
    return projects.map((p) => `${p.title}\n${p.description}`).join('\n\n');
  if (/skill|python|sql|tech|power bi|machine|\bai\b|expertise/.test(q))
    return 'Vishal works with Python (Pandas, NumPy, Scikit-learn), SQL, Power BI, Tableau, and Excel. His machine learning skills include NLP, regression, and predictive modeling. He also builds interfaces with React, JavaScript, HTML, and CSS, and designs with Figma and Canva.';
  if (/about|who|vishal|location|bhutan/.test(q))
    return 'Vishal Chettri is a data scientist and AI enthusiast based in Thimphu, Bhutan. He combines analytics, business intelligence, machine learning, and interface design. He currently works as an IT Officer at Bank of Bhutan and an AI Engineer with Omdena.';
  if (/^(hi|hello|hey)\b/.test(q))
    return 'Hi there! I can help you explore Vishal’s projects, skills, experience, education, or contact details. What would you like to know?';
  return 'I’m a quick guide to this portfolio. Try asking about Vishal’s skills, projects, experience, education, certifications, or contact details. For anything else, send him a message using the contact form.';
}
