import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

// Luxury Serif for headings
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Geist Sans is already available via next/font
// Using GeistSans from geist/font/sans package
// If not available, we'll use Inter as fallback:
// import { Inter } from "next/font/google";
// const geist = Inter({
//   variable: "--font-geist",
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });

export const metadata: Metadata = {
  title: "Lea Matyi - PMU Trainings & Courses",
  description: "From first contact with PMU device to expert precision—this world-class PMU community and education platform is designed for both driven beginners and seasoned professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${fraunces.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
