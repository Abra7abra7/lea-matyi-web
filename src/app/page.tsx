import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContentBlock } from '@/components/content/ContentBlock';
import { Heading } from '@/components/content/Heading';
import Link from 'next/link';
import scrapedData from '@/data/scraped-data.json';

export default function Home() {
  // Get homepage data
  const homepage = scrapedData.pages.find(
    (page: any) => page.url === 'https://www.leamatyi.com/' || page.url === 'https://www.leamatyi.com'
  );

  const headings = homepage?.headings || [];
  const mainHeading = headings.find((h: any) => h.level === 1);
  const subHeadings = headings.filter((h: any) => h.level === 3).slice(0, 4);

  // Tematické obrázky pre PMU web (beauty, elegance, professional)
  const heroImage = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80"; // Elegant beauty portrait
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
      alt: "Profesionálny makeup artist pri práci",
      title: "Expertné PMU techniky"
    },
    {
      url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
      alt: "Detailná PMU aplikácia",
      title: "Precízna práca"
    },
    {
      url: "https://images.unsplash.com/photo-1560869713-bf165a7c6ace?w=600&q=80",
      alt: "Krásny výsledok PMU",
      title: "Dokonalé výsledky"
    },
    {
      url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
      alt: "Vzdelávanie a školenie",
      title: "Profesionálne kurzy"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#abdbe3]">
        {/* Modern Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2C5F7F] leading-tight">
                  ONLINE A OFFLINE<br />PMU KURZY
                </h1>
                
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2C5F7F] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg">15 rokov mojej praxe v edukačných videách, workbookoch a demo ukážkach</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2C5F7F] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg">neobmedzený prístup ku videám</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2C5F7F] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg">PMU komunita, ktorá sa radí a pomáha si</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2C5F7F] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg">pre všetkých artistov, ktorí hľadajú najkvalitnejšie kurzy</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-[#2C5F7F] text-white hover:bg-[#1f4456] text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    ZAČAŤ HNEĎ
                  </Button>
                </div>
              </div>
              
              {/* Right Side - Hero Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white group">
                  <img 
                    src={heroImage}
                    alt="Lea Matyi PMU Training - Profesionálne permanent makeup kurzy"
                    className="aspect-[3/4] w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F7F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Dekoratívny element */}
                <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full rounded-2xl bg-[#2C5F7F]/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Lea's Training */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#2C5F7F] mb-4">
                PREČO SI VYBRAŤ LEA MATYI?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {subHeadings.map((heading: any, index: number) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-[#abdbe3] hover:border-[#2C5F7F] bg-white transform hover:-translate-y-2">
                  <div className="mb-4 text-4xl">
                    {index === 0 && "⭐"}
                    {index === 1 && "📅"}
                    {index === 2 && "✨"}
                    {index === 3 && "🎓"}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#2C5F7F]">
                    {heading.text}
                  </h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        {homepage?.paragraphs && homepage.paragraphs.length > 0 && (
          <section className="py-24 bg-[#F5F5F5]">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <ContentBlock 
                paragraphs={homepage.paragraphs.slice(0, 3)} 
                lists={homepage.lists}
              />
            </div>
          </section>
        )}

        {/* Gallery Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#2C5F7F] mb-4">
                Naše PMU Umenie
              </h2>
              <p className="text-lg text-gray-600">
                Pozrite si našu prácu a výsledky, ktoré hovoria samy za seba
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F7F]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-heading font-bold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials with Images */}
        <section className="py-24 bg-[#abdbe3]/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#2C5F7F] mb-4">
                Úspešné Príbehy
              </h2>
              <p className="text-lg text-gray-600">
                Naši študenti dosahujú neuveriteľné výsledky
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white p-6 hover:shadow-xl transition-all duration-300 border-2 border-[#abdbe3]">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                    alt="Martina - PMU Artist"
                    className="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-[#abdbe3]"
                  />
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Kurz totálne prekročil moje očakávania. Odporúčam každému, kto chce posunúť svoje PMU schopnosti na vyššiu úroveň."
                </p>
                <p className="font-semibold text-[#2C5F7F]">Martina M.</p>
                <p className="text-sm text-gray-500">PMU Artist</p>
              </Card>

              <Card className="bg-white p-6 hover:shadow-xl transition-all duration-300 border-2 border-[#abdbe3]">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
                    alt="Veronika - PMU Artist"
                    className="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-[#abdbe3]"
                  />
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Zúčastnila som sa skupinového školenia a môžem úprimne povedať, že to bolo jedno z najlepších školení, aké som kedy absolvovala."
                </p>
                <p className="font-semibold text-[#2C5F7F]">Veronika Š.</p>
                <p className="text-sm text-gray-500">PMU Artist</p>
              </Card>

              <Card className="bg-white p-6 hover:shadow-xl transition-all duration-300 border-2 border-[#abdbe3]">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
                    alt="Dasa - PMU Artist"
                    className="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-[#abdbe3]"
                  />
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Z trasúcej sa ruky plnej obáv som sa stala sebavedomou umelkyňou. Nikto mi nepomohol tak ako Lea, váš kurz bol absolútnym prelomom."
                </p>
                <p className="font-semibold text-[#2C5F7F]">Daša D.</p>
                <p className="text-sm text-gray-500">PMU Artist</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#2C5F7F] text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Pridajte sa k 1 000+ PMU profesionálom
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Získajte VIP prístup k našim najlepším kurzom a exkluzívnym ponukám.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-[#2C5F7F] hover:bg-gray-100 rounded-full shadow-lg">
              PRIHLÁS SA TERAZ
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
