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

  // Get hero image
  const heroImage = homepage?.images?.find((img: any) => 
    img.src.includes('IMG_8310.JPG') || img.src.includes('kajabi-cdn.com')
  );

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
              
              {/* Right Side - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white group">
                  {heroImage ? (
                    <img 
                      src={heroImage.src}
                      alt="Lea Matyi PMU Training"
                      className="aspect-[3/4] w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="aspect-[3/4] bg-gradient-to-br from-[#abdbe3] to-[#2C5F7F] flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">PMU Training</p>
                    </div>
                  )}
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
