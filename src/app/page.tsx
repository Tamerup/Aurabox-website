import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FragranceMarquee } from "@/components/sections/FragranceMarquee";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Genuine } from "@/components/sections/Genuine";
import { Fragrances } from "@/components/sections/Fragrances";
import { BlockfestGallery } from "@/components/sections/BlockfestGallery";
import { Partners } from "@/components/sections/Partners";
import { Venues } from "@/components/sections/Venues";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { LanguageProvider } from "@/i18n/LanguageContext";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aurabox",
  url: "https://www.aurabox.fi",
  slogan: "Feel The Luxury.",
  description:
    "Aurabox is a luxury fragrance machine for events, venues and hotels in Finland: genuine designer and niche fragrances, one spray at a time. Available as a service or on revenue share.",
  areaServed: "FI",
};

export default function Home() {
  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <BlockfestGallery />
        <Partners />
        <HowItWorks />
        <Venues />
        <Genuine />
        <FragranceMarquee />
        <Fragrances />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
