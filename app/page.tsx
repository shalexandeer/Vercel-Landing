import ContentSection from "@/components/content-one";
import FAQs from "@/components/faqs-section-one";
import FeaturesSection from "@/components/features-six";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section-one";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <FeaturesSection />
      <FAQs />
      <FooterSection />
    </>
  );
}
