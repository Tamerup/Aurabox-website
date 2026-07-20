import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Experience } from "@/components/sections/Experience";
import { Fragrances } from "@/components/sections/Fragrances";
import { Instagram } from "@/components/sections/Instagram";
import { Contact } from "@/components/sections/Contact";

// Code-split: this is the only section using Framer Motion, kept off the
// critical-path bundle since it's well below the fold.
const Locations = dynamic(() =>
  import("@/components/sections/Locations").then((m) => m.Locations),
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aurabox",
  url: "https://www.aurabox.fi",
  slogan: "Feel The Luxury.",
  description:
    "Aurabox is a luxury experience brand delivering confidence before life's important moments.",
  areaServed: "FI",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Experience />
        <Fragrances />
        <Locations />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
