"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

const faqs = [
  {
    question: "What is AI-Rank SaaS?",
    answer:
      "AI-Rank SaaS is a production-ready Next.js boilerplate for building SaaS applications. It includes authentication, payments, database, i18n, analytics, and a full monorepo setup — everything you need to ship without reinventing the wheel.",
  },
  {
    question: "Do I need a PostgreSQL database to get started?",
    answer:
      "Yes, AI-Rank SaaS uses PostgreSQL with Prisma ORM. You can run a local PostgreSQL instance or use a hosted provider like Supabase, Neon, or Railway. After setting your connection string in .env, just run 'bun db:push' to create the tables.",
  },
  {
    question: "How does billing work with Stripe?",
    answer:
      "We include full Stripe integration: subscription creation, webhook handling, billing portal, and plan upgrade flows. You configure your Stripe product/price IDs in .env and the system handles the rest. Test mode is fully supported during development.",
  },
  {
    question: "Can I use Clerk instead of NextAuth?",
    answer:
      "Yes. The boilerplate ships with NextAuth by default but also includes a Clerk integration path. You can switch by updating your environment variables and using the provided Clerk login route at /[lang]/(auth)/login-clerk.",
  },
  {
    question: "Is internationalization (i18n) built in?",
    answer:
      "Absolutely. The routing uses a dynamic [lang] segment. Dictionary files live in src/config/dictionaries/ and the getDictionary() helper resolves them server-side. Adding a new language is as simple as adding a new JSON file.",
  },
  {
    question: "What is the monorepo structure?",
    answer:
      "The project uses Turborepo with two main workspaces: 'apps/nextjs' (the Next.js application) and 'packages/ui' (shared component library based on shadcn/ui). This lets you add additional apps or packages while sharing code and configs.",
  },
  {
    question: "Is this free to use?",
    answer:
      "Yes — the Starter plan is completely free. The Pro and Business plans unlock additional project slots, priority support, and advanced features. You only pay when you scale.",
  },
  {
    question: "Do you offer a demo or trial?",
    answer:
      "You can start for free immediately with no credit card required. The Pro plan includes a 14-day trial so you can evaluate the full feature set before committing.",
  },
];

export function FaqSection() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know. Can&apos;t find the answer?{" "}
            <a
              href="mailto:support@ai-rank.online"
              className="text-blue-500 underline underline-offset-2 hover:text-blue-400"
            >
              Drop us a message.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-6"
            >
              <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
