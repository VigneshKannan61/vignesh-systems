# Design System: Vignesh Kannan Personal Brand

## 1. Aesthetic Direction
- **Style:** Premium, minimal, editorial technology aesthetic.
- **Tone:** Professional, reliable, discreet, and refined. Suitable for high-ticket MedSpa practice owners and decision makers.
- **Restraint:** No neon glows, no excessive gradients, no chaotic glassmorphism, no generic startup badges or animated floating shapes.

---

## 2. Color Palette & Design Tokens

| Token Name | Hex Value | Role / Usage | Contrast Ratio on `#09090B` |
| :--- | :--- | :--- | :--- |
| `--color-bg` | `#09090B` | Primary page background | Base |
| `--color-surface` | `#121216` | Secondary page section background / header | Base layer |
| `--color-card` | `#151519` | Interactive cards, step containers, FAQ items | Base layer |
| `--color-border` | `#27272A` | Subtle dividers, card borders, interactive borders | Subtle delimiter |
| `--color-border-hover`| `#3F3F46` | Hover state for interactive cards and buttons | Clear feedback |
| `--color-text-primary`| `#F4F4F5` | Primary headings, titles, prominent text | ~16.8:1 (AAA) |
| `--color-text-secondary`| `#A1A1AA` | Body copy, supporting descriptions, metadata | ~7.3:1 (AAA) |
| `--color-accent-gold` | `#C5A059` | Primary CTAs, key accent highlights, step numbers | ~7.2:1 (AAA) |
| `--color-accent-hover`| `#D6B570` | Hover state for accent buttons and links | Enhanced contrast |

### Color Rules:
- Gold (`#C5A059`) is reserved strictly for primary calls-to-action, active indicators, and critical accent highlights. Never use gold as extensive background fills or on large blocks of body copy.
- Backgrounds remain deep, neutral charcoal-black to emphasize readability and high contrast.

---

## 3. Typography

### Font Families
- **Headings & Accents:** `Manrope`, sans-serif (Weights: 600 SemiBold, 700 Bold)
- **Body & Captions:** `Inter`, sans-serif (Weights: 400 Regular, 500 Medium)

### Type Hierarchy
- **Display / Hero Heading:** `clamp(2.25rem, 5vw, 3.25rem)` / Line-height: `1.15` / Weight: `700` (Manrope)
- **Section Heading (H2):** `clamp(1.75rem, 3.5vw, 2.25rem)` / Line-height: `1.2` / Weight: `700` (Manrope)
- **Card / Subsection Heading (H3):** `1.25rem` (20px) / Line-height: `1.3` / Weight: `600` (Manrope)
- **Body Large / Hero Lead:** `1.125rem` (18px) / Line-height: `1.6` / Weight: `400` (Inter)
- **Body Base:** `1.0rem` (16px) / Line-height: `1.6` / Weight: `400` (Inter)
- **Caption / Metadata / Eyebrow:** `0.875rem` (14px) / Line-height: `1.4` / Weight: `500` (Inter), letter-spacing: `0.05em` uppercase

---

## 4. Spacing, Grid & Layout Rules

- **Maximum Content Width:** `1120px` (`max-width: 1120px; margin: 0 auto; padding: 0 1.5rem;`)
- **Section Spacing (Vertical):** 
  - Desktop: `96px - 120px` (`padding: 6rem 0` to `7.5rem 0`)
  - Tablet/Mobile: `64px - 80px` (`padding: 4rem 0` to `5rem 0`)
- **Container Gutters:** `1.5rem` (24px) on desktop, `1.0rem` (16px) on mobile (< 640px).

---

## 5. Card Consistency Rules (MANDATORY)

To prevent visual imbalance and maintain a clean editorial structure, all cards within the same card collection must strictly obey:

1. **Equal Visual Height:**
   - Use CSS Grid (`display: grid; grid-template-columns: repeat(..., 1fr);`) or Flexbox with `align-items: stretch` so all sibling cards render at identical height.
2. **Standardized Content Length:**
   - **Section 03 (What I Build):** Exactly 4 service cards. Description length targeted to **20–25 words** per card.
   - **Section 04 (How It Works):** Exactly 4 workflow steps. Description length targeted to **15–20 words** per card.
3. **Identical Internal Geometry:**
   - Padding: `2rem` (32px) uniform padding on desktop, `1.5rem` (24px) on mobile.
   - Corner radius: `8px` (`border-radius: 8px`).
   - Border: `1px solid var(--color-border)`.
   - Heading placement: Consistent margin-bottom (`1rem`).
   - Icon / Badge treatment: Fixed height and width (`40px x 40px` or `48px x 48px`) with uniform alignment.

---

## 6. Interactive & Component States

### Primary Button ("Book a Discovery Call")
- Background: `var(--color-accent-gold)` (`#C5A059`)
- Text: `#09090B` (Bold, 600 weight)
- Border radius: `6px`
- Padding: `0.875rem 1.75rem`
- Hover state: Background `#D6B570`, subtle translateY(`-1px`), no jarring transition.
- Focus visible: `2px solid #F4F4F5`, outline-offset `2px`.

### Secondary Button ("See How It Works")
- Background: Transparent
- Text: `var(--color-text-primary)` (`#F4F4F5`)
- Border: `1px solid var(--color-border)`
- Border radius: `6px`
- Padding: `0.875rem 1.75rem`
- Hover state: Background `var(--color-surface)`, border `var(--color-border-hover)`.

### Form & Accordion (FAQ)
- FAQ items: Clean bordered disclosure panel (`<details>` / `<summary>` or accessible button toggles).
- Icons: Minimal chevron with clean rotation on open.
- Transition: Smooth height / opacity expansion.

---

## 7. Responsive Strategy & Breakpoints

- **Desktop (1024px+):** 
  - Section 03 (What I Build): 2x2 grid or 4-column grid (depending on container width). 
  - Section 04 (How It Works): Single horizontal 4-column row with chronological progression.
- **Tablet (768px – 1023px):**
  - Section 03: 2x2 grid.
  - Section 04: 2x2 grid or sequenced flow.
- **Mobile (< 768px):**
  - All cards stack into single columns with zero horizontal overflow (`100% width`).
  - Spacing adjusted proportionally.
