# Him Raj — Portfolio Website

A modern, high-performance personal portfolio website built with **Next.js 15**, **Tailwind CSS v4**, and a premium dark/light theme design system. Features an ambient cursor-tracked gradient, glassmorphism UI cards, brand icons, and a fully wired contact form.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React + React Icons |
| Theming | next-themes (dark/light toggle) |
| Contact Form | Web3Forms API |
| Language | TypeScript |

---

## ✨ Features

- **Cursor Gradient** — An ambient radial gradient that follows your mouse cursor across the entire page
- **Dark / Light Mode** — Seamless theme switching with system preference support
- **Technical Arsenal** — Glassmorphism cards with brand icons for every technology
- **Contact Form** — Fully functional form powered by Web3Forms that delivers messages directly to your inbox
- **Smooth Navigation** — Fixed header with anchor-based scroll navigation
- **Mobile Responsive** — Fully optimised for all screen sizes

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens, Tailwind config, dark mode variant
│   ├── layout.tsx           # Root layout with ThemeProvider & CursorGradient
│   └── page.tsx             # Main page composition
├── components/
│   ├── Header.tsx           # Fixed navbar with nav links and Resume download
│   ├── Hero.tsx             # Landing section with LinkedIn & GitHub CTAs
│   ├── Timeline.tsx         # Work experience section
│   ├── Matrix.tsx           # Technical Arsenal — Web & Mobile stacks
│   ├── CaseStudies.tsx      # Portfolio case studies
│   ├── Footer.tsx           # Contact form + copyright
│   ├── ThemeToggle.tsx      # Dark/light mode button
│   └── CursorGradient.tsx   # Global cursor-tracking ambient gradient
public/
└── resume.pdf               # Your resume (replace with your own)
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/himrajk8/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Configuration

### Updating Your Details

| What | Where |
|---|---|
| Name & headline | `src/components/Hero.tsx` |
| LinkedIn / GitHub URLs | `src/components/Hero.tsx` (lines 27 & 36) |
| Work experience | `src/components/Timeline.tsx` |
| Tech stack items | `src/components/Matrix.tsx` |
| Case studies | `src/components/CaseStudies.tsx` |
| Resume file | Replace `public/resume.pdf` |
| Copyright name | `src/components/Footer.tsx` |

### Contact Form

The contact form is powered by [Web3Forms](https://web3forms.com/). To use your own access key:

1. Go to [web3forms.com](https://web3forms.com/) and enter your email to get a free key.
2. Open `src/components/Footer.tsx`.
3. Replace the `access_key` value on line 14 with your own key.

---

## 📦 Build for Production

```bash
npm run build
npm start
```


