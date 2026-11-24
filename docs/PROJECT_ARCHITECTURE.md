# Project Architecture: Vignesh Kannan — AI Receptionist & Lead Automation

## 1. Overview & Vision
This project is a clean, lightweight, single-page landing page representing the personal brand and consulting service of **Vignesh Kannan**. 
Vignesh is an independent AI automation specialist helping US-based medical spas (MedSpas) handle missed inbound calls and respond promptly to potential patient inquiries.

The architectural focus is on **performance, simplicity, rock-solid accessibility, and zero technical bloat**.

---

## 2. Technology Stack

- **Core Markup:** Semantic HTML5
- **Styling:** Modular CSS3 (Custom Properties / Design Tokens, Flexbox, CSS Grid)
- **Scripting:** Vanilla JavaScript (ES6+), zero external runtime dependencies/frameworks
- **Typography:** Google Fonts (`Manrope` for Headings, `Inter` for Body Text) loaded via preconnect and standard `display=swap`
- **Iconography:** Lightweight inline SVG / Lucide icons (only semantic, relevant icons; no decorative noise)
- **Deployment & Hosting:** Cloudflare Pages (Free tier, static edge distribution, zero server maintenance)

---

## 3. Directory & File Structure

```text
vignesh-personal-website/
├── index.html                   # Core single-page markup (5 strictly defined sections)
├── assets/
│   ├── images/                  # Visual assets (headshots, flow diagrams)
│   │   ├── founder-placeholder.png
│   │   └── founder-placeholder copy.png
│   ├── icons/                   # SVG icons (if externalized)
│   └── documents/               # Downloadable or legal resources (if needed)
├── css/
│   ├── style.css                # Base tokens, typography, layout, section styles
│   └── responsive.css           # Breakpoint media queries (mobile-first / responsive adjustments)
├── js/
│   └── main.js                  # Accessible mobile menu, accordion toggles, smooth scroll
├── docs/
│   ├── PROJECT_ARCHITECTURE.md  # System architecture, stack choices, operational guidelines
│   ├── DESIGN_SYSTEM.md         # Tokens, typography scales, card symmetry, styling rules
│   ├── CONTENT_STRUCTURE.md     # Exact copy outline, section definitions, AI-slop prevention rules
│   └── IMPLEMENTATION_REPORT.md # Phase 1 delivery summary and sign-off
└── README.md                    # Project overview, development setup, build/deploy instructions
```

---

## 4. Architectural Principles & Performance Targets

1. **Lightweight Static Delivery:** No runtime bundlers, Node.js servers, hydration cycles, or complex frameworks required. 
2. **Sub-second Loading:** Target Lighthouse Performance score ≥ 95 on mobile and desktop.
3. **Semantic & Accessible (WCAG 2.1 AA):**
   - Correct landmark regions (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
   - Accessible color contrast ratios (text vs. background ≥ 4.5:1).
   - Keyboard accessible interactive elements (focus rings, ARIA tags for disclosure/FAQ accordions).
4. **Zero AI Slop & Bloat:**
   - No generic multi-color gradient blobs or floating particle scripts.
   - No SaaS dashboard mockups or fake analytics graphics.
   - Clean, purposeful visual hierarchy that conveys trust to US MedSpa owners.
5. **Strict Personal Brand Alignment:**
   - First-person singular perspective throughout ("I", "my", "me").
   - Clear identity as an independent technical specialist, not an agency or SaaS platform.
