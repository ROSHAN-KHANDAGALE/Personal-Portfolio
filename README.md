# Roshan Khandagale — Developer Portfolio

A modern, responsive personal portfolio website built with **React**. Features a dark/light mode toggle, smooth scroll animations, project filtering, and a fully working contact form powered by EmailJS.

---

## 🔗 Live Demo

> Replace this with your deployed URL once hosted.

---

## ✨ Features

- **Dark / Light mode** toggle with instant CSS variable switching
- **Scroll-reveal animations** via `IntersectionObserver` — no animation libraries needed
- **Project filtering** — filter by AI/GenAI, Backend, or Full Stack
- **Dynamic stats** — years of experience, project count, and cert count computed automatically from data
- **Working contact form** — sends real emails via EmailJS (no backend required)
- **Responsive design** — mobile-first with a hamburger menu
- **Resume download** — links directly to your CV PDF
- **SVG icons** — crisp GitHub, LinkedIn, and Email icons (no icon library dependency)
- **CSS Modules** — scoped styles per component, zero global conflicts

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Styling | CSS Modules + CSS Variables |
| Fonts | Syne (display) + Space Mono (mono) via Google Fonts |
| Email | EmailJS (client-side, no backend) |
| Deployment | Netlify / Vercel / GitHub Pages |

---

## 📁 Project Structure

```
└── 📁portfolio
    └── 📁public
        ├── favicon.ico
        ├── index.html
        ├── logo192.png
        ├── logo512.png
        ├── manifest.json
        ├── robots.txt
    └── 📁src
        └── 📁components
            └── 📁About
                ├── About.jsx
                ├── About.module.css
            └── 📁Contact
                ├── Contact.jsx
                ├── Contact.module.css
            └── 📁Education
                ├── Education.jsx
                ├── Education.module.css
            └── 📁Experience
                ├── Experience.jsx
                ├── Experience.module.css
            └── 📁Footer
                ├── Footer.jsx
                ├── Footer.module.css
            └── 📁Hero
                ├── Hero.jsx
                ├── Hero.module.css
            └── 📁Icons
                ├── Icons.jsx
            └── 📁Navbar
                ├── Navbar.jsx
                ├── Navbar.module.css
            └── 📁Projects
                ├── Projects.jsx
                ├── Projects.module.css
            └── 📁Skills
                ├── Skills.jsx
                ├── Skills.module.css
        └── 📁data
            ├── index.js
        └── 📁hooks
            ├── useReveal.js
            ├── Usestats.js
        └── 📁styles
            ├── global.css
        └── 📁utils
            ├── emailjs.js
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        ├── setupTests.js
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18 or higher** — check with `node -v`
- npm v9+ — check with `npm -v`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ROSHAN-KHANDAGALE/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables (see EmailJS Setup below)
cp .env.example .env

# 4. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build      # Outputs to /dist
npm run preview    # Preview the production build locally
```

---

## 📧 EmailJS Setup (Contact Form)

The contact form sends emails directly from the browser — no backend or server needed.

### Step 1 — Create a free account

Sign up at [emailjs.com](https://www.emailjs.com) — free tier includes **200 emails/month**.

### Step 2 — Add an Email Service

1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail** → connect `your@gmail.com`
3. Name it `portfolio_service`
4. Copy the **Service ID** (e.g. `service_xxxxxxx`)

### Step 3 — Create an Email Template

1. Dashboard → **Email Templates** → **Create New Template**
2. Set these fields:

| Field | Value |
|---|---|
| **To Email** | `roshan.khandagale07@gmail.com` |
| **From Name** | `{{from_name}}` |
| **Reply To** | `{{reply_to}}` |
| **Subject** | `[Portfolio] {{subject}} — from {{from_name}}` |

3. In the HTML body, use these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Copy the **Template ID** (e.g. `template_xxxxxxx`)

### Step 4 — Get your Public Key

Dashboard → **Account** → **API Keys** → copy your **Public Key**

### Step 5 — Add keys to `.env`

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

> ⚠️ **Always restart the dev server after editing `.env`**

> ⚠️ **Never commit `.env` to Git** — it's already in `.gitignore`.

---

## 📄 Adding Your Resume

1. Place your CV PDF inside the `public/` folder:
   ```
   public/Roshan_Khandagale_CV.pdf
   ```
2. The **↓ Resume** button in the navbar will automatically download it.

To update your CV later — just replace the file. No code changes needed.

---

## ✏️ Updating Content

**All portfolio content lives in one file: `src/data/index.js`**

| What to update | Where in `data/index.js` |
|---|---|
| Skills | `SKILLS` array |
| Projects | `PROJECTS` array |
| Work experience | `EXPERIENCE` array |
| Education | `EDUCATION` array |
| Certifications | `CERTIFICATIONS` array |
| Contact links | `CONTACT_LINKS` array |

### Adding a new project

```js
// src/data/index.js → PROJECTS array
{
  num: "05",
  badge: null,            // or "New", "Featured", etc.
  category: ["backend"],  // "ai", "backend", "fullstack" — used by filter buttons
  title: "My New Project",
  desc: "Short description of what it does and why it matters.",
  tech: ["Python", "FastAPI", "Redis"],
  github: "https://github.com/ROSHAN-KHANDAGALE/my-new-project",
},
```

The project count in the Hero stats updates automatically.

### Adding a new job

```js
// src/data/index.js → EXPERIENCE array
{
  company: "New Company Pvt. Ltd.",
  role: "Senior Backend Engineer",
  period: "01/2026 – Present",
  startDate: "2026-01-01",   // ISO format — used for years of experience calculation
  endDate: null,              // null = Present
  location: "Mumbai, MH",
  points: [
    "Did something impactful...",
    "Built something scalable...",
  ],
},
```

Years of experience in the Hero stats recalculates automatically from the earliest `startDate`.

---

## 🌐 Deployment

### Netlify (recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or connect your GitHub repo in the Netlify dashboard — it auto-deploys on every push.

**Add environment variables in Netlify:**
Site Settings → Environment Variables → add your three `REACT_APP_EMAILJS_*` keys.

### Vercel

```bash
npm install -g vercel
vercel --prod
```

Add env vars under Project Settings → Environment Variables in the Vercel dashboard.

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```



---

## 🎨 Customising the Theme

All colours are CSS variables in `src/styles/global.css`:

```css
:root {
  --accent:  #00dc82;   /* Primary green — change this to your preferred accent */
  --accent2: #00a8ff;   /* Blue — used for links and tech tags */
  --bg:      #0a0a0f;   /* Page background */
  --text:    #e8e8f0;   /* Primary text */
}
```

Both dark and light themes are defined there — edit both `[data-theme="light"]` and `:root` blocks.

---

## 📦 Dependencies

### Production

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3.1 | UI framework |
| `react-dom` | ^18.3.1 | DOM renderer |

> EmailJS is loaded via CDN at runtime — not a bundle dependency.

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contact

**Roshan Ajay Khandagale**

- Email: [roshan.khandagale07@gmail.com](mailto:roshan.khandagale07@gmail.com)
- LinkedIn: [linkedin.com/in/roshan-khandagale](https://linkedin.com/in/roshan-khandagale)
- GitHub: [github.com/ROSHAN-KHANDAGALE](https://github.com/ROSHAN-KHANDAGALE)