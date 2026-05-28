"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@saasfly/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "AI-Rank SaaS helped us go from idea to production in under a week. The auth, billing, and database layers were all ready to go.",
    name: "Sarah Chen",
    title: "CTO at Launchpad Studio",
  },
  {
    quote:
      "I've tried every Next.js boilerplate out there. This one actually ships with things working — Stripe webhooks, email, the whole stack.",
    name: "Marcus Webb",
    title: "Indie Hacker & Founder",
  },
  {
    quote:
      "The monorepo setup with Turborepo is exactly what our team needed. We shared 70% of our code between the marketing site and the app.",
    name: "Aiko Tanaka",
    title: "Lead Engineer at BuildCo",
  },
  {
    quote:
      "Finally, a boilerplate where the i18n actually works without hacks. We launched in 4 languages simultaneously.",
    name: "Pedro Alves",
    title: "Founder at Polyglot Apps",
  },
  {
    quote:
      "The tRPC integration alone saved us two weeks of backend scaffolding. Type safety from database to frontend is a game changer.",
    name: "James Kim",
    title: "Full-Stack Developer",
  },
  {
    quote:
      "We onboarded three new developers in a day. The code structure is so clean and well-organized that ramp-up is effortless.",
    name: "Olivia Foster",
    title: "VP Engineering at ScaleUp",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full overflow-hidden py-24">
      <div className="container mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Loved by developers worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t take our word for it. Here&apos;s what builders are saying.
          </p>
        </motion.div>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
}
