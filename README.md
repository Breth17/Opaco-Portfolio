# My Portfolio

Plain HTML, CSS and JavaScript. No install or build needed.

## Preview
Open the folder in VS Code (File > Open Folder), install **Live Preview** (Microsoft), open `index.html`, and click the preview button. Or just double-click `index.html`.

## Where to edit
Search for **"Edit me"** (Ctrl+Shift+F in VS Code). Everything you need to change is marked.

| File | What to change |
| --- | --- |
| `index.html` | Name, intro, About, Skills, Projects, email and profile links |
| `images/profile.svg` | Replace with your photo (update the `src` in index.html, e.g. `images/profile.jpg`) |
| `images/project1-3.svg` | Replace with your project screenshots (keep file sizes small) |
| `assets/resume.pdf` | Optional: add your resume, then uncomment the resume link in index.html |
| `style.css` | Colors and fonts are at the very top under `:root` |

## Publish (GitHub Pages)
1. Create a public GitHub repository named `portfolio`.
2. Upload the *contents* of this folder (index.html at the top level, not inside another folder).
3. Settings > Pages > Deploy from a branch > `main` / root.
4. Your link will be `username.github.io/portfolio/`.

Image paths are case-sensitive online: `Profile.jpg` and `profile.jpg` are different files.
