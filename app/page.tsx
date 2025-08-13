import ContentSection from "@/components/content-7";
import FAQs from "@/components/faqs-section-one";
import Features from "@/components/features-12";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section-one";
import Testimonials from "@/components/testimonials";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <Features />
      <FAQs />
      <Testimonials />
      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
}
