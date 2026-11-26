import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { CoreFocusSection } from "@/components/home/CoreFocusSection";
import { ChaptersSection } from "@/components/home/ChaptersSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { getChapters, getSiteContent } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [content, chapters] = await Promise.all([getSiteContent(), getChapters()]);

  return (
    <>
      <a id="main-content" className="sr-only">
        Main content
      </a>
      <SiteHeader />
      <main className="home-flow">
        <HeroSection />
        <CoreFocusSection />
        <ChaptersSection
          chapters={chapters}
          title={content?.chaptersTitle}
        />
        <FinalCtaSection
          title={content?.ctaTitle}
          description={content?.ctaDescription}
        />
      </main>
      <SiteFooter />
    </>
  );
}
