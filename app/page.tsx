import ContentSection from "@/components/content-7";
import FAQs from "@/components/faqs-section-one";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section-one";
import Testimonials from "@/components/testimonials";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import FeaturesSection from "@/components/features-8";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <FAQs />
      {/* <Testimonials /> */}
      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
}
