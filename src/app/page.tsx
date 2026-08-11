import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ApramedHighlight } from "@/components/home/ApramedHighlight";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CtaBanner } from "@/components/home/CtaBanner";
import { NewsPreview } from "@/components/home/NewsPreview";
import { EventsPreview } from "@/components/home/EventsPreview";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Equipamentos Oftalmológicos APRAMED em Minas Gerais`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ApramedHighlight />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChoose />
      <CtaBanner />
      <NewsPreview />
      <EventsPreview />
    </>
  );
}
