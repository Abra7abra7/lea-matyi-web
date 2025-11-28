import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContentBlock } from '@/components/content/ContentBlock';
import { Heading } from '@/components/content/Heading';
import { ImageOptimized } from '@/components/content/ImageOptimized';
import scrapedData from '@/data/scraped-data.json';
import { createSlug, getPageBySlug } from '@/lib/utils-pages';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all pages
export async function generateStaticParams() {
  const pages = scrapedData.pages as any[];
  
  return pages
    .map((page) => ({
      slug: createSlug(page.url),
    }))
    .filter((param) => param.slug !== 'home'); // Exclude homepage
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(scrapedData.pages as any[], slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.title || 'Lea Matyi',
    description: page.meta?.description || page.meta?.['og:description'] || '',
    openGraph: {
      title: page.meta?.['og:title'] || page.title,
      description: page.meta?.['og:description'] || page.meta?.description || '',
      images: page.meta?.['og:image'] ? [page.meta['og:image']] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.meta?.['twitter:title'] || page.title,
      description: page.meta?.['twitter:description'] || page.meta?.description || '',
      images: page.meta?.['twitter:image'] ? [page.meta['twitter:image']] : [],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(scrapedData.pages as any[], slug);

  if (!page) {
    notFound();
  }

  const mainHeading = page.headings?.find((h: any) => h.level === 1);
  const otherHeadings = page.headings?.filter((h: any) => h.level > 1 && h.level <= 3) || [];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-[#A8D5E2] text-[#2C5F7F] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                {mainHeading?.text || page.title}
              </h1>
              {page.meta?.description && (
                <p className="text-xl text-gray-700">
                  {page.meta.description}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* Sub-headings as cards */}
            {otherHeadings.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {otherHeadings.slice(0, 4).map((heading: any, index: number) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg">
                    <Heading heading={heading} />
                  </div>
                ))}
              </div>
            )}

            {/* Paragraphs and Lists */}
            {(page.paragraphs || page.lists) && (
              <ContentBlock paragraphs={page.paragraphs} lists={page.lists} />
            )}

            {/* Images Gallery */}
            {page.images && page.images.length > 0 && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {page.images.slice(0, 6).map((image: any, index: number) => (
                  <ImageOptimized
                    key={index}
                    image={image}
                    className="aspect-video"
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

