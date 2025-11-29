# 🎨 Lea Matyi — Luxury Design System Specification
## World-Class PMU Education Platform

**Creative Direction by:** Senior UI/UX Design Team  
**Date:** November 2025  
**Stack:** Next.js 15 + Tailwind CSS + Shadcn UI + Framer Motion

---

## 🌟 Design Philosophy: "Silent Luxury Meets Editorial Precision"

**Brand Essence:** Lea Matyi nie je len PMU artist — je to **chirurg krásy**, **architekt tváre**. Dizajn musí komunikovať: presnosť, exkluzivitu, umeleckú citlivosť.

**Mood Board References:**
- Vogue's fashion editorials (čistota, dramatické tieny)
- Aesop's website (typografia, priestor)
- Apple's product pages (motion design, single-focus storytelling)
- High-end architecture portfolios (masonry layouts, material feel)

---

## 🎨 1. Color Palette: "Skin & Earth"

### Primary Colors
```css
--espresso: #2B1810       /* Deep brown, grounding */
--taupe: #8B7355           /* Warm neutral */
--cream: #F5EDE0           /* Soft background */
--ivory: #FFFEF9           /* Pure canvas */
```

### Accent Colors
```css
--bronze: #B87D4B          /* Luxury highlight */
--gold: #D4AF37            /* Premium touch (use sparingly) */
--charcoal: #1A1A1A        /* Typography */
--soft-pink: #F4E4DA       /* Subtle warmth for cards */
```

### Usage Rules
- **Espresso:** Navigation, footer, premium sections
- **Cream/Ivory:** Main background (90% of the site)
- **Bronze:** CTA buttons, hover states, section dividers
- **Gold:** Only for badges ("Bestseller", "Pro"), trust signals
- **Charcoal:** Body text (NOT pure black — too harsh)

### Gradients
```css
--hero-gradient: linear-gradient(135deg, #2B1810 0%, #4A3228 100%);
--card-shimmer: linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent);
```

---

## ✍️ 2. Typography System: Editorial Hierarchy

### Font Stack
```typescript
// tailwind.config.ts
fontFamily: {
  heading: ['Fraunces', 'Playfair Display', 'serif'],    // Bold, elegant
  body: ['Geist', 'Inter', 'system-ui'],                  // Clean, readable
  mono: ['JetBrains Mono', 'monospace'],                  // Course curriculum
}
```

### Type Scale (Fluid Typography)
```css
/* Headings */
--text-display: clamp(3.5rem, 8vw, 7rem);    /* Hero only */
--text-h1: clamp(2.5rem, 5vw, 4rem);         /* Page titles */
--text-h2: clamp(2rem, 4vw, 3rem);           /* Section headers */
--text-h3: clamp(1.5rem, 3vw, 2rem);         /* Card titles */

/* Body */
--text-body-lg: 1.25rem;                     /* Intro paragraphs */
--text-body: 1rem;                           /* Standard */
--text-caption: 0.875rem;                    /* Metadata */
```

### Character & Leading
- **Headings:** `font-weight: 600-700` | `line-height: 1.1` | `letter-spacing: -0.02em`
- **Body:** `font-weight: 400` | `line-height: 1.7` | `letter-spacing: 0`
- **CTA Buttons:** `font-weight: 500` | `text-transform: uppercase` | `letter-spacing: 0.05em`

---

## 🏗️ 3. Component Architecture: Shadcn Elevated

### 3.1 Hero Section: "Cinematic Reveal"

**Concept:** Full-viewport opening s video background (slow-motion eyebrow work). Text overlay s dramatickým fade-in.

```tsx
// components/hero/CinematicHero.tsx
<section className="relative h-screen w-full overflow-hidden">
  {/* Video Background */}
  <video 
    autoPlay muted loop playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-60"
  >
    <source src="/media/hero-brows.mp4" type="video/mp4" />
  </video>
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/40 to-transparent" />
  
  {/* Content */}
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="relative z-10 flex h-full items-center justify-center text-center"
  >
    <div className="max-w-5xl px-6">
      <h1 className="font-heading text-display font-bold text-ivory leading-none mb-6">
        The Art of<br />
        <span className="italic text-bronze">Architectural Brows</span>
      </h1>
      <p className="text-body-lg text-cream/90 max-w-2xl mx-auto mb-12">
        World-class PMU education where precision meets artistry.
        Master techniques trusted by professionals across Europe.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-bronze text-ivory px-12 py-4 rounded-full text-sm font-medium tracking-wider hover:bg-gold transition-colors"
      >
        EXPLORE COURSES
      </motion.button>
    </div>
  </motion.div>
  
  {/* Scroll Indicator */}
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="absolute bottom-12 left-1/2 -translate-x-1/2"
  >
    <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2">
      <div className="w-1 h-3 bg-bronze rounded-full" />
    </div>
  </motion.div>
</section>
```

**Framer Motion Details:**
- Text reveal: `opacity: 0 → 1`, `y: 40 → 0`, `duration: 1.2s`
- Scroll indicator: Infinite bounce (`y: [0, 12, 0]`)
- CTA button: Magnetic hover effect (follows cursor subtly)

---

### 3.2 Portfolio Gallery: "Masonry Flow"

**Concept:** Náhodne veľké obrázky v masonry layoute. Hover = zoom + metadata overlay.

```tsx
// components/gallery/MasonryGallery.tsx
<motion.div 
  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {images.map((img, i) => (
    <motion.div
      key={img.id}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { delay: i * 0.1 }
        }
      }}
      whileHover={{ scale: 1.05 }}
      className={`relative overflow-hidden rounded-lg cursor-pointer
        ${i % 7 === 0 ? 'row-span-2' : ''} 
        ${i % 5 === 0 ? 'col-span-2' : ''}`}
    >
      <img 
        src={img.src} 
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      
      {/* Overlay on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-espresso/90 to-transparent flex items-end p-6"
      >
        <div>
          <h4 className="text-ivory font-heading text-xl">{img.title}</h4>
          <p className="text-cream text-sm">{img.technique}</p>
        </div>
      </motion.div>
    </motion.div>
  ))}
</motion.div>
```

**Layout Logic:**
- Každý 5. obrázok: `col-span-2` (wide)
- Každý 7. obrázok: `row-span-2` (tall)
- Stagger animation: každý obrázok s `delay: i * 0.1s`

---

### 3.3 Course Card: "Premium Product"

**Concept:** Card s glassmorphism efektom, sticky CTA button, trust badges.

```tsx
// components/courses/CourseCard.tsx
<motion.div
  whileHover={{ y: -8 }}
  className="group relative bg-soft-pink/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
>
  {/* Featured Badge */}
  {course.isFeatured && (
    <div className="absolute top-4 right-4 z-10 bg-gold text-espresso text-xs font-bold px-3 py-1 rounded-full">
      BESTSELLER
    </div>
  )}
  
  {/* Course Image */}
  <div className="relative h-64 overflow-hidden">
    <img 
      src={course.image} 
      alt={course.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
  </div>
  
  {/* Content */}
  <div className="p-8">
    <div className="flex items-center gap-2 text-bronze text-sm font-mono mb-3">
      <span>{course.duration}</span>
      <span>•</span>
      <span>{course.level}</span>
    </div>
    
    <h3 className="font-heading text-2xl text-espresso mb-4">
      {course.title}
    </h3>
    
    <p className="text-taupe text-body mb-6 leading-relaxed">
      {course.description}
    </p>
    
    {/* Features */}
    <ul className="space-y-2 mb-6">
      {course.features.map(feature => (
        <li key={feature} className="flex items-start gap-2 text-sm text-charcoal">
          <svg className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5">
            {/* Checkmark icon */}
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    {/* CTA */}
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-bronze text-ivory py-4 rounded-full font-medium tracking-wide hover:bg-espresso transition-colors"
    >
      ENROLL NOW — €{course.price}
    </motion.button>
    
    {/* Trust Signal */}
    <div className="mt-4 flex items-center justify-center gap-1 text-xs text-taupe">
      <span>⭐️⭐️⭐️⭐️⭐️</span>
      <span className="ml-2">{course.students}+ students</span>
    </div>
  </div>
</motion.div>
```

**Micro-interactions:**
- Card hover: Lift up (`y: -8px`) + shadow increase
- Image: Ken Burns zoom (`scale: 1 → 1.1`)
- Button: Magnetic effect (subtle movement towards cursor)

---

### 3.4 Sticky Course CTA Bar (Conversion Booster)

```tsx
// components/courses/StickyCTA.tsx
<motion.div
  initial={{ y: 100 }}
  animate={{ y: isVisible ? 0 : 100 }}
  className="fixed bottom-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-md border-t border-bronze/20 p-4 shadow-2xl"
>
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="flex items-center gap-4">
      <img src={course.thumbnail} className="w-16 h-16 rounded-lg object-cover" />
      <div>
        <h4 className="text-ivory font-heading text-lg">{course.title}</h4>
        <p className="text-cream/70 text-sm">{course.shortDesc}</p>
      </div>
    </div>
    
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="bg-bronze text-ivory px-8 py-3 rounded-full font-medium"
    >
      ENROLL — €{course.price}
    </motion.button>
  </div>
</motion.div>
```

**Logic:** Appears when user scrolls past 60% of course detail page.

---

## 🎬 4. Framer Motion Animation Library

### 4.1 Text Reveal (Scroll-Triggered)

```tsx
// lib/animations.ts
export const textReveal = {
  hidden: { 
    opacity: 0, 
    y: 50,
    clipPath: 'inset(0 0 100% 0)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]  // Custom cubic-bezier
    }
  }
};

// Usage
<motion.h2
  variants={textReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
>
  Master the Craft
</motion.h2>
```

### 4.2 Parallax Image

```tsx
// components/effects/ParallaxImage.tsx
const ParallaxImage = ({ src, speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  
  return (
    <div ref={ref} className="overflow-hidden h-96 rounded-2xl">
      <motion.img
        src={src}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
      />
    </div>
  );
};
```

### 4.3 Magnetic Button

```tsx
// components/ui/magnetic-button.tsx
const MagneticButton = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };
  
  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="relative bg-bronze text-ivory px-8 py-4 rounded-full"
    >
      {children}
    </motion.button>
  );
};
```

### 4.4 Shimmer Effect (Loading/Premium)

```tsx
// components/effects/ShimmerCard.tsx
<motion.div
  className="relative overflow-hidden bg-soft-pink rounded-2xl"
  whileHover="hover"
>
  {/* Content */}
  <div className="relative z-10 p-8">
    {children}
  </div>
  
  {/* Shimmer Overlay */}
  <motion.div
    variants={{
      hover: {
        x: ["0%", "200%"],
        transition: { duration: 1.5, ease: "easeInOut" }
      }
    }}
    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -left-full"
  />
</motion.div>
```

---

## 📐 5. Layout Strategy: Course Sales Page

### Information Architecture
```
Hero (Full Screen)
  ↓
Social Proof Band (Scrolling testimonials)
  ↓
Courses Grid (3 columns on desktop)
  ↓
"Why Lea Matyi" Section (Split: Image left, text right)
  ↓
Curriculum Preview (Accordion component)
  ↓
Before/After Gallery (Slider)
  ↓
Final CTA (Centered, full-width)
  ↓
Footer (Minimal, legal + social)
```

### Grid System
```tsx
// Global Layout Wrapper
<div className="max-w-[1600px] mx-auto px-6 lg:px-12">
  {/* Content */}
</div>

// Course Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {courses.map(...)}
</div>
```

---

## ✨ 6. UX Copywriting Examples

### Headlines (Hero)
1. **"Where Precision Meets Artistry"**  
   *Subline:* Master PMU techniques trusted by Europe's leading artists.

2. **"Sculpt. Define. Transform."**  
   *Subline:* World-class eyebrow architecture education.

3. **"Your Hands. My Knowledge. Timeless Brows."**  
   *Subline:* From beginner to certified professional in 12 weeks.

### Course Descriptions
- **Beginner Course:** "Start your PMU journey with confidence. Learn foundational techniques through hands-on practice, live demos, and lifetime community access."
  
- **Pro Masterclass:** "Elevate your artistry. Advanced shading, color theory, and corrective work for established PMU professionals seeking mastery."

### CTA Variations
- Primary: **"ENROLL NOW"** (Direct, confident)
- Secondary: **"WATCH FREE INTRO"** (Low commitment)
- Footer: **"START YOUR JOURNEY"** (Aspirational)

### Trust Signals
- "✓ 5,000+ Certified Students Worldwide"
- "✓ Lifetime Access + Community"
- "✓ Money-Back Guarantee"
- "✓ Taught by Award-Winning PMU Artist"

---

## 🎯 7. Conversion Optimization (CRO) Strategy

### Above-the-Fold Checklist
- [ ] Hero video auto-plays (muted, looping)
- [ ] Primary CTA visible without scrolling
- [ ] Trust badge visible (e.g., "★★★★★ 4.9/5 from 1,200+ reviews")

### Friction Reducers
1. **One-Click Checkout:** Integrácia Stripe/PayPal
2. **Preview Content:** 2-3 free video lessons (embedded YouTube)
3. **Live Chat Widget:** Real-time support pre-purchase
4. **Mobile Optimization:** Thumb-friendly CTAs (min 48px height)

### A/B Test Ideas
- Button color: Bronze vs. Gold
- CTA copy: "Enroll Now" vs. "Secure Your Spot"
- Price display: "€997" vs. "€997 (€83/month)"

---

## 🛠️ 8. Technical Implementation Guide

### Tailwind Config Extensions

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        espresso: '#2B1810',
        taupe: '#8B7355',
        cream: '#F5EDE0',
        ivory: '#FFFEF9',
        bronze: '#B87D4B',
        gold: '#D4AF37',
        charcoal: '#1A1A1A',
        'soft-pink': '#F4E4DA',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
```

### Shadcn Customization

```bash
# Install with custom theme
npx shadcn-ui@latest init

# Override default components
npx shadcn-ui@latest add button card accordion
```

```tsx
// components/ui/button.tsx (customized)
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all",
  {
    variants: {
      variant: {
        primary: "bg-bronze text-ivory hover:bg-espresso shadow-lg hover:shadow-bronze/50",
        ghost: "border-2 border-bronze text-bronze hover:bg-bronze hover:text-ivory",
        link: "text-bronze underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 text-sm tracking-wider",
        lg: "h-14 px-12 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);
```

---

## 📦 9. Component Checklist (Priority Order)

### Phase 1: Foundation (Week 1)
- [x] Tailwind config + color system
- [ ] Typography system
- [ ] Button component (Magnetic)
- [ ] Card component (Shimmer)
- [ ] Navigation (Transparent → Solid on scroll)

### Phase 2: Hero & Gallery (Week 2)
- [ ] Cinematic Hero with video
- [ ] Masonry Gallery component
- [ ] Parallax effects
- [ ] Image optimization (next/image)

### Phase 3: Course Pages (Week 3)
- [ ] Course Card component
- [ ] Sticky CTA bar
- [ ] Accordion (Curriculum)
- [ ] Before/After slider
- [ ] Testimonial carousel

### Phase 4: Polish (Week 4)
- [ ] Scroll-triggered animations
- [ ] Page transitions
- [ ] Loading states
- [ ] Mobile menu
- [ ] Footer

---

## 🎨 10. Design Assets Needed

### Video
- Hero background: 10-15s slow-motion eyebrow work (1920x1080, .mp4)
- Course previews: 30-60s lessons (embedded YouTube)

### Photography
- **Hero:** 1 high-res portrait of Lea (editorial style, dramatic lighting)
- **Portfolio:** 30-50 eyebrow close-ups (mix of healed/fresh work)
- **Lifestyle:** 5-10 images of Lea teaching/working (candid, professional)

### Icons
- Custom SVG icons for features (vs. generic Font Awesome)
- Animated loading spinner (bronze/gold gradient)

### Misc
- Favicon (minimalist "LM" monogram)
- OG images for social sharing (1200x630px)

---

## 🚀 Success Metrics

### Design KPIs
- **Bounce Rate:** Target < 40% (luxury sites often 50-60%)
- **Time on Page:** Target > 3 minutes
- **Scroll Depth:** 70%+ reach course grid

### Conversion KPIs
- **Enrollment Rate:** 3-5% of visitors
- **Cart Abandonment:** < 60%
- **Mobile Conversion:** Match or exceed desktop (test thumb-friendly CTAs)

---

## 💡 Final Notes for Development

1. **Performance Budget:**
   - First Contentful Paint (FCP): < 1.5s
   - Largest Contentful Paint (LCP): < 2.5s
   - Use `next/image` with priority loading for hero

2. **Accessibility:**
   - All animations respect `prefers-reduced-motion`
   - Color contrast ≥ 4.5:1 (WCAG AA)
   - Keyboard navigation for all interactive elements

3. **Internationalization:**
   - Prepare for Slovak/English toggle
   - Use `next-intl` for copy management

---

## 🎬 Closing Thoughts

Tento design nie je len "pekný web" — je to **digitálny showroom**, kde každý pixel komunikuje exkluzivitu. Kľúčom je:

1. **Priestor:** Neplniť stránku obsahom. Nechať obrázky dýchať.
2. **Motion:** Každá animácia má účel (nie len "cool effect").
3. **Konverzia:** Všetky dizajnové rozhodnutia vedú k jednému cieľu: **predať kurz**.

**Teraz sa začína kódovanie.** 🚀


