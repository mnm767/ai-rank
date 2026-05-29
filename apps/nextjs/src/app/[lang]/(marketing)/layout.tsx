import { Suspense } from "react";

import { getCurrentUser } from "@saasfly/auth";

import { ModalProvider } from "~/components/modal-provider";
import { NavBar } from "~/components/navbar";
import { SiteFooter } from "~/components/site-footer";
import type { Locale } from "~/config/i18n-config";
import { siteConfig } from "~/config/site";
import { getMarketingConfig } from "~/config/ui/marketing";
import { getDictionary } from "~/lib/get-dictionary";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "AI-Rank",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
      sameAs: [siteConfig.links.github],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "AI-Rank",
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: ["en", "ar"],
    },
    {
      "@type": "SoftwareApplication",
      name: "AI-Rank",
      url: siteConfig.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: siteConfig.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default async function MarketingLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  const user = await getCurrentUser();
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback="...">
        <NavBar
          items={
            (await getMarketingConfig({ params: { lang: `${lang}` } })).mainNav
          }
          params={{ lang: `${lang}` }}
          scroll={true}
          user={user}
          marketing={dict.marketing}
          dropdown={dict.dropdown}
        />
      </Suspense>
      <ModalProvider dict={dict.login} />
      <main className="flex-1">{children}</main>
      <SiteFooter
        className="border-t border-border"
        params={{ lang: `${lang}` }}
        dict={dict.common}
      />
    </div>
  );
}
