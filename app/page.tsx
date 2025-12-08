import ContentSection from "@/components/content-7";
import FAQs from "@/components/faqs-section-one";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section-one";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import ServicesDynamic from "@/components/services-dynamic";
import { sanityFetch } from "@/sanity/lib/live";
import { BRANCHES_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries";
import { branches as fallbackBranches } from "@/components/branches";
import { Service } from "@/types/service";

export default async function Home() {
   const { data: branches } =
    (await sanityFetch({ query: BRANCHES_QUERY })) || [...fallbackBranches];

  const { data: services } = await sanityFetch({ query: SERVICES_QUERY }) || { data: [] as Service[] };

  console.log(services)

  return (
    <>
      <HeroSection />
      <ServicesDynamic services={services} />
      <ContentSection branches={branches} />
      <FAQs />
      {/* <Testimonials /> */}
      <FooterSection />
      <FloatingWhatsApp branches={branches} />
    </>
  );
}
