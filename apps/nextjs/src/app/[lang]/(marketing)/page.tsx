import { HeroSection } from "~/components/sections/hero-section";
import { LogoCloud } from "~/components/sections/logo-cloud";
import { FeaturesSection } from "~/components/sections/features-section";
import { PricingSection } from "~/components/sections/pricing-section";
import { TestimonialsSection } from "~/components/sections/testimonials-section";
import { FaqSection } from "~/components/sections/faq-section";
import { CtaSection } from "~/components/sections/cta-section";

import type { Locale } from "~/config/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
