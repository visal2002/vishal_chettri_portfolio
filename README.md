# Vishal Chettri — Portfolio

A React portfolio featuring project filters, an expandable experience timeline, an animated data globe, a contact form, and a local portfolio guide.

[View the live portfolio](https://visal2002.github.io/vishal_chettri_portfolio/)

## Development

Use Node.js 24 and npm. Run these commands from this folder:

```sh
npm ci
npm run dev
```

The development server runs at `http://localhost:3000` (or the next available port).

| Command                | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the development server                    |
| `npm run build`        | Build the site into `dist/`                     |
| `npm run preview`      | Preview the production build                    |
| `npm run format`       | Format source, configuration, and documentation |
| `npm run format:check` | Check formatting without changing files         |

## Project structure

```text
.github/workflows/deploy.yml   GitHub Pages deployment
public/
  assets/images/              Project images, portraits, and organization logos
  favicon.svg
  Vishal_Chettri_Technical_Business_Analyst.pdf
src/
  components/
    layout/                   Navigation and footer
    sections/                 Hero, About, Projects, Skills, Experience, Contact
    ui/                       Shared Reveal and SectionHeading components
    visuals/                  Canvas data globe
  data/
    contact.js                Contact links, resume URL, and form endpoint
    portfolio.js              Projects, experience, certifications, and languages
  features/assistant/
    Assistant.jsx             Portfolio guide interface and conversation state
    answer.js                 Local answers based on portfolio data
  styles/main.css             Site styles and responsive layouts
  App.jsx                     Page composition and reading progress
  main.jsx                    React entry point
index.html                    Page metadata and root element
```

Vite builds the app, Tailwind CSS supplies its base styles and utilities, Framer Motion handles transitions, and React Icons supplies icons. This is a JavaScript project; `jsconfig.json` configures editor support.

## Updating content

- Edit projects and work experience in `src/data/portfolio.js`.
- Edit contact details and the Formspree endpoint in `src/data/contact.js`.
- Edit section content in `src/components/sections/` and appearance in `src/styles/main.css`.
- Keep public asset URLs relative to `import.meta.env.BASE_URL` so they work locally and under the GitHub Pages repository path.
- The portfolio guide generates answers locally. The contact form sends submissions to Formspree; testing a real submission sends a message to the configured recipient.

## Deployment

### GitHub Pages

In repository **Settings > Pages**, choose **GitHub Actions** as the publishing source. Pages must be enabled and supported by the repository's visibility and GitHub plan.

Push to `main` or `master`, or run **Actions > Deploy to GitHub Pages > Run workflow**. The workflow installs locked dependencies, builds the app, uploads `dist/`, and deploys it. It sets `VITE_BASE_PATH` from the Pages configuration, including support for a custom domain.

### Netlify

The optional `netlify.toml` runs `npm run build` with Node.js 24 and publishes `dist/`. The default base path is `/`.

## Repository conventions

- Commit source files and `package-lock.json`.
- Keep generated `dist/`, dependencies, local environment files, and editor files out of Git.
- Store only assets used by the site in `public/`: Vite copies everything there into the published build.
- Run `npm run format:check` and `npm run build` before committing changes.
