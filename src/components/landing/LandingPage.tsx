import { WhatsAppFab } from "../WhatsAppFab.tsx";
import { BrandStory } from "./BrandStory.tsx";
import { ExperiencesShowcase } from "./ExperiencesShowcase.tsx";
import { FinalCta } from "./FinalCta.tsx";
import { Footer } from "./Footer.tsx";
import { GuideRecruitment } from "./GuideRecruitment.tsx";
import { Hero } from "./Hero.tsx";
import { HowItWorks } from "./HowItWorks.tsx";
import { Navbar } from "./Navbar.tsx";
import { Testimonials } from "./Testimonials.tsx";
import { ValueProps } from "./ValueProps.tsx";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <HowItWorks />
        <ExperiencesShowcase />
        <ValueProps />
        <GuideRecruitment />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
