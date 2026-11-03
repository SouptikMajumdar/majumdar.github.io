# Souptik Majumdar — academic portfolio

A responsive, static portfolio ready for GitHub Pages. No installation, build process, or API keys are needed. All site paths are relative, so it works at either a personal domain or a project URL.

## Preview

Open `index.html` in your browser, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a public GitHub repository called `YOUR-USERNAME.github.io` (replace `YOUR-USERNAME` with your GitHub username).
2. Upload the **contents of this folder**, with `index.html`, `styles.css`, `script.js`, and `assets/` at the repository root. Do not upload the enclosing `portfolio` folder or the ZIP itself.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, and save.
5. GitHub will display the published address. The first deployment can take up to 10 minutes.

You can also use a repository named `portfolio`; its address will be `https://YOUR-USERNAME.github.io/portfolio/`.

Official guide: https://docs.github.com/en/pages/quickstart

## Edit your site

- Text, publication information, and links: `index.html`.
- Colors, fonts, spacing, and responsive layout: `styles.css`.
- Portrait: replace `assets/portrait.jpg`.
- CV: replace `assets/Souptik-Majumdar-CV.pdf`.
- No JavaScript is required to read or navigate the site. `script.js` only highlights the current section and updates the copyright year.
- The site uses Times New Roman throughout, with Times and the system serif font as fallbacks. No external fonts are loaded.

## Content notes

The supplied CV is the source for experience and ongoing research. CARD and DreamTeam are marked under review as stated in that CV. No acceptance, performance results, or missing public paper links have been invented. Add public paper or code links when available.

The public research-group profile supplied the portrait and verified Scholar link. The Bosch paper uses its actual published title, “Attention Is All You Need For Mixture-of-Depths Routing,” rather than the shortened description in the CV.

Sources:
- https://www.collaborative-ai.org/people/majumdar/
- https://arxiv.org/abs/2412.20875
- https://doi.org/10.1007/978-3-031-12419-8_9
- https://www2.informatik.uni-stuttgart.de/cgi-bin/NCSTRL/NCSTRL_view.pl?engl=1&id=MSTR-2025-19&inst=FAK&mod=0

Design direction: an original academic portfolio inspired by the sidebar and research-first structure of http://ruhdorfer.me/.
