import type { Metadata } from "next";
import { HeroSection } from "~/components/sections/hero-section";
import { LogoCloud } from "~/components/sections/logo-cloud";
import { FeaturesSection } from "~/components/sections/features-section";
import { PricingSection } from "~/components/sections/pricing-section";
import { TestimonialsSection } from "~/components/sections/testimonials-section";
import { FaqSection } from "~/components/sections/faq-section";
import { CtaSection } from "~/components/sections/cta-section";

import type { Locale } from "~/config/i18n-config";
import { siteConfig } from "~/config/site";

const titles: Record<Locale, string> = {
  en: "AI-Rank — AI Automation for Business",
  ar: "AI-Rank — أتمتة الأعمال بالذكاء الاصطناعي",
};

const descriptions: Record<Locale, string> = {
  en: "Automate HR, documents, marketing, sales, and customer support with AI agents built for UAE businesses.",
  ar: "أتمتة الموارد البشرية والمستندات والتسويق والمبيعات ودعم العملاء بوكلاء الذكاء الاصطناعي للشركات في الإمارات.",
};

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `${siteConfig.url}/${lang}`,
      languages: {
        en: `${siteConfig.url}/en`,
        ar: `${siteConfig.url}/ar`,
      },
    },
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      url: `${siteConfig.url}/${lang}`,
      locale: lang === "ar" ? "ar_AE" : "en_US",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
  };
}

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
