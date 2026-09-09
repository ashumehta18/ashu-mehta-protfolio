# Ashu Mehta — Portfolio

Personal portfolio for Ashu Mehta, a B.Tech Computer Science Engineering student focused on full-stack development with the MERN stack.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Where to update content

All recruiter-facing content lives in **`src/data/portfolio.ts`**.

### Project links

Replace `githubUrl` and `liveUrl` on each project. Keep `"#"` until a real URL exists — the UI will not treat `#` as a working link.

### Resume

Set `personal.resumeUrl` to a public PDF URL or a file in `public/`, for example `/Ashu-Mehta-Resume.pdf`.

### Social profiles

Set `personal.githubUrl`, `personal.linkedinUrl`, and `personal.leetcodeUrl`.

### Certifications

Add another object to the `certifications` array. Optional fields:

- `issueDate`, `expiryDate`, `credentialId`
- `credentialUrl` — verification page
- `certificateFile` — path such as `/certificates/ibm-devops.pdf` or an image

If those fields are missing or still `"#"`, action buttons stay disabled.

## SEO / domain

Update the canonical and Open Graph URLs in `index.html` when you deploy.

## Deploy

The site is a static Vite app.

- **Vercel:** import the repo and use the Vite preset (`npm run build`, output `dist`).
- **Netlify:** same build command, publish directory `dist`.
- **GitHub Pages:** set `base` in `vite.config.ts` if the site is not at the domain root.

## Notes

- TypeScript is used to build this site and is labeled as a portfolio technology, not a resume skill.
- The contact form opens a `mailto:` draft. It does not send mail through a backend.
