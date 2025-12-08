import ContentSection from "@/components/content-7";
import FAQs from "@/components/faqs-section-one";
import FooterSection from "@/components/footer-one";
import HeroSection from "@/components/hero-section-one";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import ServicesDynamic from "@/components/services-dynamic";
import { sanityFetch } from "@/sanity/lib/live";
import { BRANCHES_QUERY, SERVICES_QUERY, SOCIAL_MEDIA_QUERY, CONTACT_PERSON_QUERY } from "@/sanity/lib/queries";
import { branches as fallbackBranches } from "@/components/branches";
import { Service } from "@/types/service";
import { ContactPerson } from "@/types/contactPerson";
import { HeroHeader } from "@/components/header";
import { getFallbackSocialMedia } from "@/components/social-media";
import { fallbackContactPerson } from "@/lib/contact-person";

export default async function Home() {
   const { data: branches } =
    (await sanityFetch({ query: BRANCHES_QUERY })) || {data: [...fallbackBranches]} ;

  const { data: services } = await sanityFetch({ query: SERVICES_QUERY }) || { data: [] as Service[] };

  const { data: socialMedia } = await sanityFetch({ query: SOCIAL_MEDIA_QUERY }) || { data: [...await getFallbackSocialMedia()] };
  const { data: contactPerson } = await sanityFetch({ query: CONTACT_PERSON_QUERY });
  const contactPersonData = contactPerson || fallbackContactPerson;

  return (
    <>
      <HeroHeader socialMedia={socialMedia}/>
      <HeroSection contactPerson={contactPersonData} />
      <ServicesDynamic services={services} contactPerson={contactPersonData} />
      <ContentSection branches={branches} socialMedia={socialMedia} />
      <FAQs contactPerson={contactPersonData} />
      {/* <Testimonials /> */}
      <FooterSection socialMedia={socialMedia}/>
      <FloatingWhatsApp branches={branches} />
    </>
  );
}
