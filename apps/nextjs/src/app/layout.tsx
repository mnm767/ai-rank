import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import "~/styles/globals.css";

import { NextDevtoolsProvider } from "@next-devtools/core";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@saasfly/ui";
import { Toaster } from "@saasfly/ui/toaster";

import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";
import { i18n } from "~/config/i18n-config";
import { siteConfig } from "~/config/site";

const CLERK_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const isClerkConfigured =
  (CLERK_KEY.startsWith("pk_live_") || CLERK_KEY.startsWith("pk_test_")) &&
  CLERK_KEY.length > 20 &&
  !CLERK_KEY.includes("placeholder");

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../styles/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI automation",
    "business automation UAE",
    "HR support AI",
    "document automation",
    "marketing AI",
    "sales AI agents",
    "customer support AI",
    "AI rank",
    "أتمتة الأعمال",
    "الذكاء الاصطناعي",
  ],
  authors: [{ name: "AI-Rank" }],
  creator: "AI-Rank",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "AI-Rank" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en": `${siteConfig.url}/en`,
      "ar": `${siteConfig.url}/ar`,
    },
  },
};

async function AuthProvider({ children }: { children: React.ReactNode }) {
  if (isClerkConfigured) {
    const { ClerkProvider } = await import("@clerk/nextjs");
    return <ClerkProvider>{children}</ClerkProvider>;
  }
  return <>{children}</>;
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { lang?: string };
}) {
  const lang = params?.lang ?? "en";
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <AuthProvider>
      <html lang={lang} dir={dir} suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontHeading.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <NextDevtoolsProvider>{children}</NextDevtoolsProvider>
            <Analytics />
            <SpeedInsights />
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
