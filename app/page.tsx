import ContentSection from "@/components/content-7";
import FAQs from "@/components/faqs-section-one";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section-one";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import ServicesDynamic from "@/components/services-dynamic";
import { sanityFetch } from "@/sanity/lib/live";
import { BRANCHES_QUERY, SERVICES_QUERY, SOCIAL_MEDIA_QUERY } from "@/sanity/lib/queries";
import { branches as fallbackBranches } from "@/components/branches";
import { Service } from "@/types/service";
import { HeroHeader } from "@/components/header";
import { fallbackSocialMedia } from "@/components/social-media";

export default async function Home() {
   const { data: branches } =
    (await sanityFetch({ query: BRANCHES_QUERY })) || {data: [...fallbackBranches]} ;

  const { data: services } = await sanityFetch({ query: SERVICES_QUERY }) || { data: [] as Service[] };

  const { data: socialMedia } = await sanityFetch({ query: SOCIAL_MEDIA_QUERY }) || { data: [...fallbackSocialMedia] };

  return (
    <>
      <HeroHeader socialMedia={socialMedia}/>
      <HeroSection />
      <ServicesDynamic services={services} />
      <ContentSection branches={branches} socialMedia={socialMedia} />
      <FAQs />
      {/* <Testimonials /> */}
      <FooterSection socialMedia={socialMedia}/>
      <FloatingWhatsApp branches={branches} />
    </>
  );
}
