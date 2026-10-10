# Parth Sharma — Java Backend Developer Portfolio

A developer portfolio inspired by the minimal, high-contrast, editorial aesthetics of [parthh.in](https://parthh.in/). Designed to highlight backend systems engineering, REST API architecture, distributed concurrency control, and production experience.

---

## ⚡ Highlights & Features

- **Editorial Dark Aesthetic**: Near-black charcoal surfaces (`#08090d`, `#0f1118`), electric cyan accents (`#38bdf8`), typography pairings with *Outfit* and *Inter*.
- **Interactive Backend Architecture Visualization**: Real-time animated request lifecycle demonstration across Client → Spring Boot Controller & Filter Layer → Redis Distributed Lock & Cache → MongoDB Cluster.
- **Developer Command Palette (`⌘K` / `Ctrl+K`)**: Rapid navigation, direct resume downloads, email copy, and social links accessible from anywhere on the page via keyboard.
- **Dual Resume Showcase**: Dedicated download options for **Java Backend Developer (Primary)** and **Software Engineer** roles with direct ImageKit CDN hosting and cross-origin blob downloads.
- **Comprehensive Project Case Studies**: Interactive modals detailing architecture data flows, concurrency challenges (Redis Redlock), Stripe webhook idempotency, and GridFS storage mechanisms.
- **Engineering Principles**: Focus on clean code, secure authentication, API contracts, concurrency control, caching, and automated testing.
- **Direct Email Client Integration**: Smart "Copy Email" notification and one-click direct Gmail Web compose window alongside the validated contact form.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Vanilla CSS custom glassmorphism utilities
- **Motion & Interactions**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS Browser SDK (optional client-side delivery with graceful fallback)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or 20.x LTS
- npm or yarn or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/parthsharma1-art/Portfolio.git
cd Portfolio

# Install dependencies
npm install
```

### Environment Variables (Optional)

Create a `.env.local` file in the root directory based on `.env.example`:

```env
# EmailJS configuration for the contact form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Custom ImageKit CDN Resume URLs (defaults to production files if omitted)
NEXT_PUBLIC_RESUME_BACKEND_URL=https://ik.imagekit.io/xuh3db9z6/Parth_Sharma_Resume.pdf
NEXT_PUBLIC_RESUME_SWE_URL=https://ik.imagekit.io/xuh3db9z6/ParthSharma_SoftwareEngineer_Resume.pdf
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Deployment

To create an optimized production static bundle:

```bash
npm run build
```

The output will be placed in the `/out` directory ready to be served by any static hosting provider (Vercel, Netlify, Cloudflare Pages, AWS S3 / CloudFront, GitHub Pages).

### Netlify Deployment

The project includes `netlify.toml` configured for automated static deploys:
- Build command: `npm run build`
- Publish directory: `out`
- Single Page App redirect rule: `/* -> /index.html`

---

## 👤 Profile & Experience

- **Name**: Parth Sharma
- **Role**: Java Backend Developer
- **Education**: B.Tech in Computer Science & Engineering (2026 graduate)
- **Location**: Noida / Ghaziabad, Uttar Pradesh, India
- **Experience**: Backend Engineer & Backend Intern at AetherAI, Inc.
- **GitHub**: [parthsharma1-art](https://github.com/parthsharma1-art)
- **LinkedIn**: [parth-sharma-47a116292](https://linkedin.com/in/parth-sharma-47a116292/)
- **Email**: `parthsharma2640@gmail.com`

---

## 📄 License

MIT License. Designed and engineered by Parth Sharma.
