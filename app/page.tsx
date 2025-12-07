import ContentSection from "@/components/content-7";
import FAQs from "@/components/faqs-section-one";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section-one";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import FeaturesSection from "@/components/features-8";
import { sanityFetch } from "@/sanity/lib/live";
import { BRANCHES_QUERY } from "@/sanity/lib/queries";
import { branches as fallbackBranches } from "@/components/branches";

export default async function Home() {
   const { data: branches } =
    (await sanityFetch({ query: BRANCHES_QUERY })) || [...fallbackBranches];

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ContentSection branches={branches} />
      <FAQs />
      {/* <Testimonials /> */}
      <FooterSection />
      <FloatingWhatsApp branches={branches} />
    </>
  );
}
