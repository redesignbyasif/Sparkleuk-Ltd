# Sparkleuk Ltd — Official Brand Identity & Business Homepage

A custom-designed, zero-to-one brand identity and mobile-first business website created for **Sparkleuk Ltd** — a veteran‑founded, cleaner‑led UK property cleaning and **fully qualified in‑house PAT testing** specialist serving nationwide.

---

## 1. Business Overview & Positioning

- **Company Name:** Sparkleuk Ltd
- **Leadership & Ethos:** Veteran‑founded and cleaner‑led — built on military‑grade integrity, trust, punctuality, and pricing transparency.
- **Core Cleaning Services:** Domestic weekly/fortnightly cleaning, commercial & office cleaning, one‑off/spring cleans, full deep cleans, oven restoration, and specialist property turnarounds for homes, offices, landlords, HMOs, and holiday lets.
- **Unique Dual-Service Differentiator:** **Fully Qualified In‑House PAT Testing** (Portable Appliance Testing, electrical safety inspections, appliance pass/fail labelling, and formal compliance certificates for landlords, letting agents, HMOs, holiday lets, and businesses).
- **Armed Forces Commitment:** Proudly donating **2.5% of every job’s profits to Help for Heroes**.
- **Service Coverage:** Nationwide across the UK with vetted, insured, local service delivery and fair, transparent pricing with no hidden fees.

---

## 2. Custom Brand Identity System

### Logo Suite (`assets/logo/`)
Designed around a chamfered architectural shield combining a **military precision chevron** (veteran‑founded discipline & leadership) rising into a **4‑point sparkle emblem** (spotless property standards & electrical PAT precision):
- `sparkleuk-logo-dark.svg` / `.png` — Primary horizontal lockup for light surfaces
- `sparkleuk-logo-light.svg` / `.png` — Light horizontal lockup for dark headers/footers
- `sparkleuk-icon.svg` / `.png` & `favicon-32.png` — Standalone shield‑sparkle emblem & browser icon
- `sparkleuk-crest.svg` / `.png` — Stacked workwear uniform embroidery crest

### Brand Colour Palette
| Role | Colour Name | HEX |
| :--- | :--- | :--- |
| **Primary Brand** | Regimental Deep Forest Pine | `#142822` |
| **Deep Ground / Heading Ink** | Obsidian Pine | `#0E1B17` |
| **Secondary Brand** | Mineral Spruce | `#224037` |
| **Accent / Primary CTA** | Sovereign Burnished Brass | `#E0A334` |
| **Compliance Verification** | Verification Emerald | `#1E7A56` |
| **Primary Background** | Crisp Porcelain Chalk | `#F8F8F5` |
| **Secondary Surface** | Warm Architectural Limestone | `#EFEFE9` |
| **Body Copy** | Slate Charcoal | `#374540` |

### Typography
Self-hosted WOFF2 static web fonts (`assets/fonts/`) for instant rendering and zero external font latency:
- **Headings & UI Display:** `Manrope` (600, 700, 800)
- **Body & Specification Copy:** `Inter` (400, 500, 600, 700)

---

## 3. Project Structure

```text
Sparkleuk-Ltd/
├── index.html                  # Complete semantic single-page business homepage
├── css/
│   └── style.css               # Mobile-first CSS architecture & custom design tokens
├── js/
│   └── script.js               # Vanilla JS navigation, service filter, FAQ & quote configurator
├── assets/
│   ├── fonts/                  # Self-hosted Manrope & Inter WOFF2 font files
│   ├── icons/                  # Custom vector UI icons
│   ├── images/                 # Optimised WebP & JPEG bespoke photography with branded uniforms
│   └── logo/                   # SVG & PNG brand logo suite (light, dark, icon, uniform crest)
├── .nojekyll                   # Ensures clean static asset serving on GitHub Pages
└── README.md                   # Project documentation
```

---

## 4. GitHub Pages Compatibility

- Pure static HTML5, CSS3, and Vanilla JavaScript — zero build step or server dependencies required.
- All asset paths (`assets/...`, `css/...`, `js/...`, `../assets/fonts/...`) are strictly relative so the site works seamlessly at both root domains and GitHub Pages subdirectory URLs (`/Sparkleuk-Ltd/`).
- Includes `<meta name="robots" content="noindex, nofollow">` for safe client demo review.
