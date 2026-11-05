import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { CoreFocusSection } from "@/components/home/CoreFocusSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { ChaptersSection } from "@/components/home/ChaptersSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { getSiteContent } from "@/lib/sanity/queries";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <a id="main-content" className="sr-only">
        Main content
      </a>
      <SiteHeader />
      {/* Five sections, no filler: hero → core focus → impact → chapters →
          CTA. Courses live on the global site (linked everywhere), and the
          FAQ has its own page, so nothing here repeats itself. */}
      <main className="home-flow">
        <HeroSection
          title={content?.heroTitle}
          description={content?.heroDescription}
        />
        <CoreFocusSection />
        <div className="home-flow-attach">
          <ImpactSection />
        </div>
        <ChaptersSection
          eyebrow={content?.chaptersEyebrow}
          title={content?.chaptersTitle}
          description={content?.chaptersDescription}
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
