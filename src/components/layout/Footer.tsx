import Link from 'next/link';
import { Youtube } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Store', href: '/store' },
    { name: 'Results', href: '/results' },
    { name: 'Meet Lea Matyi', href: '/meet-lea-matyi' },
  ],
  social: [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@LeaMatyi/videos',
      icon: Youtube,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#D4E9F2]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-[#2C5F7F] hover:text-[#1f4456]">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2C5F7F] hover:text-[#1f4456] transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-[#2C5F7F]">
          &copy; {new Date().getFullYear()} Lea Matyi. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
}

