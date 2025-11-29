'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { CinematicHero } from '@/components/hero/CinematicHero';
import { MasonryGallery } from '@/components/gallery/MasonryGallery';
import { CourseGrid } from '@/components/courses/CourseGrid';
import { PremiumCard } from '@/components/ui/premium-card';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { ParallaxImage } from '@/components/effects/ParallaxImage';
import { motion } from 'framer-motion';
import { textReveal, fadeIn, revealOnScroll } from '@/lib/animations';
import scrapedData from '@/data/scraped-data.json';
import type { Course } from '@/components/courses/CourseCard';
import type { GalleryImage } from '@/components/gallery/MasonryGallery';

// R2 Image URLs from Cloudflare
const R2_BASE = 'https://pub-aa7457c105694bcca680b272aeeb00ae.r2.dev/media';

export default function Home() {
  // Get homepage data
  const homepage = scrapedData.pages.find(
    (page: any) => page.url === 'https://www.leamatyi.com/' || page.url === 'https://www.leamatyi.com'
  );

  // Sample courses data s reálnymi R2 fotkami (overené validné JPG)
  const sampleCourses: Course[] = [
    {
      id: '1',
      title: 'PMU Fundamentals',
      description: 'Kompletný základný kurz pre začínajúcich PMU artistov. Od prvého kontaktu s PMU zariadením až po expertné techniky.',
      image: `${R2_BASE}/5efc916755ab.jpg`,
      price: 997,
      duration: '12 týždňov',
      level: 'Beginner',
      students: 2500,
      rating: 4.9,
      features: [
        'Neobmedzený prístup k videám',
        'Live Q&A sessions každý týždeň',
        'PMU komunita s podporou',
        'Certifikát po dokončení',
      ],
      isFeatured: true,
    },
    {
      id: '2',
      title: 'Advanced Brow Architecture',
      description: 'Pre pokročilých artistov, ktorí chcú zvládnuť architektúru obočia na profesionálnej úrovni.',
      image: `${R2_BASE}/0f145bc3060d.jpg`,
      price: 1497,
      duration: '8 týždňov',
      level: 'Advanced',
      students: 1200,
      rating: 5.0,
      features: [
        'Pokročilé shading techniky',
        'Korekcie a opravy',
        'Farebná teória pre PMU',
        'Portfolio building',
      ],
      isFeatured: false,
    },
    {
      id: '3',
      title: 'PMU Business Mastery',
      description: 'Naučte sa, ako vybudovať úspešný PMU business od základov po skalovanie.',
      image: `${R2_BASE}/9dad40260948.jpg`,
      price: 797,
      duration: '6 týždňov',
      level: 'Intermediate',
      students: 3400,
      rating: 4.8,
      features: [
        'Marketing stratégie',
        'Cenové kalkulácie',
        'Získavanie klientov',
        'Social media mastery',
      ],
      isFeatured: false,
    },
  ];

  // Gallery images s reálnymi R2 fotkami z Lea Matyi portfólia
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: `${R2_BASE}/83cebde0163d.jpg`,
      alt: 'Perfect eyebrow architecture',
      title: 'Architectural Brows',
      technique: 'Microblading + Shading',
    },
    {
      id: '2',
      src: `${R2_BASE}/790f2be651fe.jpg`,
      alt: 'Natural PMU result',
      title: 'Natural Beauty',
      technique: 'Powder Brows',
    },
    {
      id: '3',
      src: `${R2_BASE}/0f145bc3060d.jpg`,
      alt: 'Precision work',
      title: 'Precision Work',
      technique: 'Nano Strokes',
    },
    {
      id: '4',
      src: `${R2_BASE}/b03bc25bf41f.jpg`,
      alt: 'Healed result',
      title: 'Healed Perfection',
      technique: 'Ombré Brows',
    },
    {
      id: '5',
      src: `${R2_BASE}/3560deb8e8fd.jpg`,
      alt: 'Client transformation',
      title: 'Transformation',
      technique: 'Corrective PMU',
    },
    {
      id: '6',
      src: `${R2_BASE}/ffed47144538.jpg`,
      alt: 'Fresh work',
      title: 'Fresh Application',
      technique: 'Combination Brows',
    },
    {
      id: '7',
      src: `${R2_BASE}/2b050419150b.jpg`,
      alt: 'Professional PMU work',
      title: 'Professional Touch',
      technique: 'Hybrid Brows',
    },
    {
      id: '8',
      src: `${R2_BASE}/db14ca6b5479.jpg`,
      alt: 'Expert technique',
      title: 'Expert Results',
      technique: 'Custom Brows',
    },
  ];

  const handleEnroll = (course: Course) => {
    console.log('Enrolling in:', course.title);
    // TODO: Implement enrollment logic
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-ivory">
        {/* Cinematic Hero */}
        <CinematicHero
          title="The Art of\n<span>Architectural Brows</span>"
          subtitle="Kde precíznosť stretáva umenie"
          description="World-class PMU vzdelávanie, kde precíznosť stretáva umeleckú citlivosť. 
            Ovládnite techniky, ktorým dôverujú profesionáli po celej Európe."
          ctaText="PRESKÚMAŤ KURZY"
          fallbackImage={`${R2_BASE}/5efc916755ab.jpg`}
          onCtaClick={() => {
            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Why Choose Lea Section */}
        <section className="py-24 bg-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textReveal}
              className="mx-auto max-w-3xl text-center mb-20"
            >
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-espresso mb-6">
                Prečo Lea Matyi?
              </h2>
              <p className="text-taupe text-lg leading-relaxed">
                15 rokov praxe destilované do najkvalitnejšieho PMU vzdelávania v Európe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '✨',
                  title: 'Živé Demo',
                  description: 'Sledujte každý detail v real-time demo ukážkach',
                },
                {
                  icon: '📚',
                  title: 'Workbooky',
                  description: 'Detailné príručky pre každú techniku',
                },
                {
                  icon: '🎓',
                  title: 'Certifikácia',
                  description: 'Medzinárodne uznávaný certifikát',
                },
                {
                  icon: '💬',
                  title: 'Komunita',
                  description: 'Prístup do exkluzívnej PMU komunity',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={revealOnScroll}
                  transition={{ delay: index * 0.1 }}
                >
                  <PremiumCard className="p-8 h-full text-center">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="font-heading text-xl font-semibold text-espresso mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-taupe text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </PremiumCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-24 bg-ivory">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textReveal}
              className="mx-auto max-w-3xl text-center mb-20"
            >
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-espresso mb-6">
                Naše Kurzy
              </h2>
              <p className="text-taupe text-lg leading-relaxed">
                Od začiatočníkov po expertov — každý kurz je navrhnutý pre dokonalé výsledky
              </p>
            </motion.div>

            <CourseGrid courses={sampleCourses} onEnroll={handleEnroll} />
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textReveal}
              className="mx-auto max-w-3xl text-center mb-12"
            >
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-espresso mb-6">
                Portfólio Excelentnosti
              </h2>
              <p className="text-taupe text-lg leading-relaxed">
                Výsledky, ktoré hovoria samy za seba
              </p>
            </motion.div>

            <MasonryGallery
              images={galleryImages}
              onImageClick={(image) => console.log('Clicked:', image)}
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-soft-pink/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textReveal}
              className="mx-auto max-w-3xl text-center mb-20"
            >
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-espresso mb-6">
                Úspešné Príbehy
              </h2>
              <p className="text-taupe text-lg leading-relaxed">
                Tisíce umelcov transformovali svoju kariéru s našimi kurzami
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: `${R2_BASE}/d5efa5f55dbc.jpg`,
                  quote:
                    'Kurz totálne prekročil moje očakávania. Lea ma naučila nielen techniky, ale aj umenie vidieť tvár ako architekt.',
                  name: 'Martina M.',
                  role: 'PMU Artist, Bratislava',
                },
                {
                  image: `${R2_BASE}/a274c31be1a8.jpg`,
                  quote:
                    'Zúčastnila som sa skupinového školenia a môžem úprimne povedať, že to bolo jedno z najlepších školení v mojej kariére.',
                  name: 'Veronika Š.',
                  role: 'PMU Specialist, Praha',
                },
                {
                  image: `${R2_BASE}/24c1f54a1e5b.jpg`,
                  quote:
                    'Z trasúcej sa ruky plnej obáv som sa stala sebavedomou umelkyňou. Váš kurz bol absolútnym prelomom.',
                  name: 'Daša D.',
                  role: 'Certified PMU Artist',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={revealOnScroll}
                  transition={{ delay: index * 0.15 }}
                >
                  <PremiumCard className="p-8 h-full">
                    <div className="mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-bronze/30"
                      />
                    </div>
                    <p className="text-charcoal italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-center">
                      <p className="font-heading font-semibold text-espresso text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-taupe">{testimonial.role}</p>
                    </div>
                  </PremiumCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-espresso" />
          <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso/95 to-bronze/20" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-ivory mb-6">
                Pripravení začať svoju cestu?
              </h2>
              <p className="text-cream/90 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                Pridajte sa k 5,000+ PMU profesionálom, ktorí transformovali svoju kariéru 
                s našim world-class vzdelávaním.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <MagneticButton variant="primary" size="lg" className="shadow-2xl">
                  PRESKÚMAŤ VŠETKY KURZY
                </MagneticButton>
                <MagneticButton variant="ghost" size="lg">
                  SLEDOVAŤ FREE PREVIEW
                </MagneticButton>
              </div>

              {/* Trust Badges */}
              <div className="mt-16 flex flex-wrap justify-center gap-8 text-cream/70 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gold">★★★★★</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div>5,000+ Študentov</div>
                <div>Certifikované Programy</div>
                <div>Lifetime Access</div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
