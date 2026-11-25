# Sparkleuk Ltd — Official Website

A refreshing, human‑crafted, mobile‑first business website built for **Sparkleuk Ltd** — a veteran‑founded and cleaner‑led UK property cleaning and **fully qualified in‑house PAT testing** company serving nationwide.

---

## 1. Brand & Colour System

Built directly around the official **Sparkleuk Ltd** shield logo (`Cleaning • PAT Testing • Safety`):

| Role | Colour | HEX |
| :--- | :--- | :--- |
| **Shield Primary Navy** | Official Shield Navy | `#051E42` |
| **Wordmark & Heading Navy** | Official Wordmark Navy | `#04183B` |
| **Footer Deep Navy** | Midnight Admiralty | `#03132B` |
| **Primary Accent** | Official Checkmark Aqua‑Teal | `#2ECBC8` |
| **Accessible Link Teal** | Deep Coastal Teal | `#0D7A78` |
| **Light Surface** | Refreshing Sky Mist | `#F3F7FB` |
| **Pledge Tint** | Soft Aqua Wash | `#EEF8F9` |

### Logo Assets (`assets/logo/`)
- `sparkleuk-logo.png` — Official Sparkleuk Ltd logo with background cleanly removed for crisp white header/light surfaces
- `sparkleuk-logo-light.png` — Official Sparkleuk Ltd transparent logo adapted for dark navy footer & navy workwear T‑shirts
- `sparkleuk-icon.png` & `favicon-32.png` — Official shield icon & browser favicon

### Typography (`assets/fonts/`)
Self‑hosted `.woff2` static web fonts:
- **Headings:** `Montserrat` (600, 700, 800)
- **Body Copy:** `Inter` (400, 500, 600, 700)

---

## 2. Project Structure

```text
Sparkleuk-Ltd/
├── index.html                  # Complete single-page business homepage
├── css/
│   └── style.css               # Mobile-first CSS system using official logo colour tokens
├── js/
│   └── script.js               # Vanilla JS mobile menu, service filter, FAQs & quote builder
├── assets/
│   ├── fonts/                  # Self-hosted Montserrat & Inter WOFF2 web fonts
│   ├── icons/                  # Custom Navy & Aqua-Teal SVG icons
│   ├── images/                 # Full-bleed hero & worker photography (WebP + JPEG)
│   └── logo/                   # Official transparent Sparkleuk Ltd logo assets
├── .nojekyll                   # Clean static serving on GitHub Pages
└── README.md                   # Documentation
```

---

## 3. GitHub Pages Ready

- Pure HTML5, CSS3, and Vanilla JavaScript — zero external runtime dependencies.
- Relative asset paths throughout (`assets/...`, `css/...`, `js/...`, `../assets/fonts/...`).
- Includes `<meta name="robots" content="noindex, nofollow">` for client preview safety.
