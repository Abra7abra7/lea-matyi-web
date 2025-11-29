'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { CinematicHero } from '@/components/hero/CinematicHero';
import { MasonryGallery } from '@/components/gallery/MasonryGallery';
import { CourseGrid } from '@/components/courses/CourseGrid';
import { PremiumCard } from '@/components/ui/premium-card';
import { Button } from '@/components/ui/button-simple';
import { motion } from 'framer-motion';
import { textReveal, revealOnScroll } from '@/lib/animations';
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
          ctaText="PRESKÚMAŤ KURZY"
          fallbackImage={`${R2_BASE}/5efc916755ab.jpg`}
          onCtaClick={() => {
            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Why Choose Lea Section - Simplified */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-espresso mb-4">
                Prečo Lea Matyi?
              </h2>
              <p className="text-taupe text-base md:text-lg max-w-2xl mx-auto">
                15 rokov praxe v PMU vzdelávaní
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: '✨', title: 'Živé Demo' },
                { icon: '📚', title: 'Workbooky' },
                { icon: '🎓', title: 'Certifikácia' },
                { icon: '💬', title: 'Komunita' },
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-heading text-lg font-semibold text-espresso">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section - Simplified */}
        <section id="courses" className="py-16 md:py-24 bg-ivory">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-espresso mb-4">
                Naše Kurzy
              </h2>
              <p className="text-taupe text-base md:text-lg max-w-2xl mx-auto">
                Od začiatočníkov po expertov
              </p>
            </div>

            <CourseGrid courses={sampleCourses} onEnroll={handleEnroll} />
          </div>
        </section>

        {/* Gallery Section - Simplified */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-espresso mb-4">
                Naše Portfólio
              </h2>
              <p className="text-taupe text-base md:text-lg">
                Výsledky, ktoré hovoria samy za seba
              </p>
            </div>

            <MasonryGallery
              images={galleryImages}
              onImageClick={(image) => console.log('Clicked:', image)}
            />
          </div>
        </section>

        {/* Testimonials Section - Simplified */}
        <section className="py-16 md:py-24 bg-soft-pink/30">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-espresso mb-4">
                Úspešné Príbehy
              </h2>
              <p className="text-taupe text-base md:text-lg max-w-2xl mx-auto">
                Naši študenti dosahujú neuveriteľné výsledky
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  image: `${R2_BASE}/d5efa5f55dbc.jpg`,
                  quote: 'Kurz totálne prekročil moje očakávania.',
                  name: 'Martina M.',
                  role: 'PMU Artist',
                },
                {
                  image: `${R2_BASE}/a274c31be1a8.jpg`,
                  quote: 'Jedno z najlepších školení v mojej kariére.',
                  name: 'Veronika Š.',
                  role: 'PMU Specialist',
                },
                {
                  image: `${R2_BASE}/24c1f54a1e5b.jpg`,
                  quote: 'Váš kurz bol absolútnym prelomom.',
                  name: 'Daša D.',
                  role: 'PMU Artist',
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-bronze/30"
                    />
                  </div>
                  <p className="text-charcoal text-sm italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-espresso">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-taupe">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - Simplified */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-espresso" />
          <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso/95 to-bronze/20" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-ivory mb-6">
              Pripravení začať svoju cestu?
            </h2>
            <p className="text-cream/90 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
              Pridajte sa k 5,000+ PMU profesionálom
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="primary" size="lg">
                PRESKÚMAŤ KURZY
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-cream/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gold">★★★★★</span>
                <span>4.9/5</span>
              </div>
              <div>5,000+ Študentov</div>
              <div>Certifikované</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
