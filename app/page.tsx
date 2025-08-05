import ContentSection from "@/components/content-7";
import FAQs from "@/components/faqs-section-one";
import FeaturesSection from "@/components/features-six";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section-one";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ContentSection /> */}
      <ContentSection />
      <FeaturesSection />
      <FAQs />
      <FooterSection />
    </>
  );
}
