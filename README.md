# ABDIRAHIIM MOHAMD NUUR — Portfolio

A responsive student developer portfolio built with React, TypeScript, and Vite.

**Live portfolio:** https://student-developer-portfolio-vm1sqi.v2.appdeploy.ai/

## Run locally

1. Install Node.js 20 or newer.
2. In this folder, run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Run `npm run build` to create the production site in `dist/`.

## Update the portfolio

- Edit the page content in `src/App.tsx`.
- Edit colors, spacing, and responsive rules in `src/index.css`.
- Replace the photos in `public/resources/` while keeping the current filenames, or update the image paths in `src/App.tsx`.
- Project, education, and contact details are intentionally labeled as placeholders until real information is supplied.
- The contact form validates entries but does not send messages until a form service is configured.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever changes reach the `main` branch. In the GitHub repository settings, enable Pages with **GitHub Actions** as the build and deployment source.
