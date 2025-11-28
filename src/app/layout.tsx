import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
