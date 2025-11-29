# 🚀 Implementation Plan — Lea Matyi Luxury Redesign

## Sprint Breakdown (4 týždne)

### WEEK 1: Design System Foundation
**Goal:** Vytvoriť solidný základ pre všetky komponenty

#### Day 1-2: Config & Setup
- [ ] Update `tailwind.config.ts` s luxury color palette
- [ ] Install fonts (Fraunces, Geist)
- [ ] Setup Framer Motion
- [ ] Create design tokens file (`src/lib/design-tokens.ts`)
- [ ] Configure `globals.css` s custom properties

#### Day 3-4: Base Components
- [ ] Magnetic Button component
- [ ] Premium Card with shimmer
- [ ] Typography components (Heading, Text)
- [ ] Container/Section wrappers

#### Day 5: Animation Library
- [ ] Text reveal variants
- [ ] Scroll-triggered animations
- [ ] Parallax helpers
- [ ] Page transition wrapper

---

### WEEK 2: Hero & Visual Impact
**Goal:** First impression — návštevník musí "WOW"

#### Day 1-2: Cinematic Hero
- [ ] Video background implementation
- [ ] Gradient overlays
- [ ] Animated headline reveal
- [ ] Scroll indicator
- [ ] Mobile fallback (static image)

#### Day 3-4: Portfolio Gallery
- [ ] Masonry layout algorithm
- [ ] Image optimization (next/image)
- [ ] Hover overlay animations
- [ ] Lightbox/modal pre detail view
- [ ] Filter by technique (optional)

#### Day 5: Navigation
- [ ] Transparent → solid on scroll
- [ ] Mobile hamburger menu
- [ ] Logo animation
- [ ] Smooth scroll to sections

---

### WEEK 3: Course Sales Engine
**Goal:** Conversion-optimized course presentation

#### Day 1-2: Course Cards
- [ ] Premium card design
- [ ] Featured badge
- [ ] Trust signals (reviews, student count)
- [ ] Hover animations
- [ ] Responsive grid

#### Day 3: Course Detail Page
- [ ] Hero section (course-specific)
- [ ] Sticky CTA bar (scroll-triggered)
- [ ] Curriculum accordion
- [ ] Instructor bio section
- [ ] FAQ accordion

#### Day 4: Supporting Components
- [ ] Before/After slider
- [ ] Testimonial carousel
- [ ] Video embed component
- [ ] Price calculator (payment plans)

#### Day 5: Forms & CTA
- [ ] Enrollment form
- [ ] Newsletter signup
- [ ] Contact form
- [ ] Form validation + animations

---

### WEEK 4: Polish & Performance
**Goal:** Production-ready, optimized, tested

#### Day 1-2: Animations & Transitions
- [ ] Page transitions (Framer Motion)
- [ ] Loading states
- [ ] Skeleton screens
- [ ] Error states
- [ ] Success animations

#### Day 3: Performance
- [ ] Image optimization audit
- [ ] Lazy loading
- [ ] Code splitting
- [ ] Lighthouse score > 90
- [ ] Mobile performance

#### Day 4: Accessibility & SEO
- [ ] Keyboard navigation
- [ ] ARIA labels
- [ ] Focus states
- [ ] Color contrast check
- [ ] Meta tags & OG images
- [ ] Structured data (JSON-LD)

#### Day 5: Testing & Deploy
- [ ] Cross-browser testing
- [ ] Mobile testing (iOS/Android)
- [ ] A/B test setup (button colors)
- [ ] Analytics integration
- [ ] Deploy to production

---

## File Structure (Clean Architecture)

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with fonts
│   ├── page.tsx                   # Homepage
│   ├── courses/
│   │   ├── page.tsx              # Course grid
│   │   └── [slug]/
│   │       └── page.tsx          # Course detail
│   └── globals.css
│
├── components/
│   ├── hero/
│   │   ├── CinematicHero.tsx
│   │   └── ScrollIndicator.tsx
│   ├── gallery/
│   │   ├── MasonryGallery.tsx
│   │   └── ImageModal.tsx
│   ├── courses/
│   │   ├── CourseCard.tsx
│   │   ├── CourseGrid.tsx
│   │   ├── StickyCTA.tsx
│   │   └── Curriculum.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/                       # Shadcn components (customized)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   ├── effects/
│   │   ├── ParallaxImage.tsx
│   │   ├── ShimmerCard.tsx
│   │   └── MagneticButton.tsx
│   └── content/
│       ├── Heading.tsx
│       └── Text.tsx
│
├── lib/
│   ├── animations.ts             # Framer Motion variants
│   ├── design-tokens.ts          # Colors, spacing, etc.
│   ├── utils.ts                  # Helpers
│   └── hooks/
│       ├── useScrollProgress.ts
│       └── useMagneticEffect.ts
│
├── data/
│   ├── courses.json              # Course data
│   └── scraped-data.json
│
└── styles/
    └── animations.css            # Custom keyframes
```

---

## Git Workflow

### Branch Strategy
```bash
main                              # Production
  └── feature/luxury-design-system  # Current branch
      ├── feat/design-tokens        # Sub-tasks
      ├── feat/hero-section
      ├── feat/course-cards
      └── feat/animations
```

### Commit Convention
```
feat: Add cinematic hero component
fix: Correct button hover state
style: Update color palette to luxury theme
perf: Optimize hero video loading
docs: Add animation library documentation
```

---

## Priority Tasks (Next 3 Hours)

### 1. Update Tailwind Config ⚡
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: { espresso, taupe, cream, ... },
      fontFamily: { heading, body },
      animation: { shimmer, float },
    }
  }
}
```

### 2. Install Dependencies
```bash
npm install framer-motion
npm install @fontsource/fraunces @fontsource/geist-sans
npx shadcn-ui@latest add button card accordion
```

### 3. Create Animation Library
```typescript
// lib/animations.ts
export const textReveal = { ... }
export const cardHover = { ... }
export const parallaxConfig = { ... }
```

### 4. Build Magnetic Button
```tsx
// components/ui/magnetic-button.tsx
// First interactive component to test motion system
```

---

## Success Criteria (Definition of Done)

### Visual
- ✅ Design matches Vogue/Aesop luxury feel
- ✅ No default Bootstrap/SaaS look
- ✅ Custom animations on every page
- ✅ High-quality images (no pixelation)

### Technical
- ✅ Lighthouse Performance > 90
- ✅ Mobile-responsive (works on iPhone SE to iPad Pro)
- ✅ Accessible (WCAG AA)
- ✅ No console errors

### Business
- ✅ Clear CTA on every page
- ✅ Course enrollment < 3 clicks
- ✅ Trust signals visible
- ✅ Analytics tracking working

---

## Notes for Developers

1. **Never compromise on performance for animations.**  
   Use `will-change` sparingly, prefer GPU-accelerated properties (transform, opacity).

2. **Test on real devices.**  
   Simulators lie. Borrow an iPhone 12 and Samsung Galaxy.

3. **Accessibility is non-negotiable.**  
   If you can't tab to it, fix it. If it doesn't have alt text, add it.

4. **Mobile-first, always.**  
   Start with 375px width, then scale up. Not the reverse.

---

## Questions for Lea (Stakeholder)

- [ ] Video content: Máte 10-15s slow-motion video eyebrow work?
- [ ] Photos: Potrebujeme high-res portrait (editorial style) + 30-50 eyebrow close-ups
- [ ] Copy: Potrebujeme review quotes od studentov (5-10)
- [ ] Pricing: Zobrazovať payment plans (€83/month) alebo len full price?
- [ ] Enrollment: Stripe alebo iný payment gateway?

---

**Let's build something legendary.** 💎



