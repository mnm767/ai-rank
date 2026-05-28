"use client";

import { WobbleCard } from "@saasfly/ui/wobble-card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Authentication & Authorization",
    description:
      "Full-stack auth with NextAuth.js or Clerk. OAuth providers, email magic links, role-based access control — production-ready from day one.",
    icon: "🔐",
    className: "col-span-1 lg:col-span-2",
    bgColor: "bg-blue-900",
  },
  {
    title: "Stripe Payments",
    description:
      "Subscriptions, one-time payments, and webhooks wired up. Billing portal and upgrade flows included.",
    icon: "💳",
    className: "col-span-1",
    bgColor: "bg-violet-900",
  },
  {
    title: "Global i18n",
    description:
      "Ship in multiple languages from the start. Built-in dictionary system with Next.js dynamic routing.",
    icon: "🌍",
    className: "col-span-1",
    bgColor: "bg-indigo-900",
  },
  {
    title: "Monorepo Architecture",
    description:
      "Turborepo powers the workspace. Share UI, configs, and utilities across apps with zero duplication. Scale your team without scaling complexity.",
    icon: "🏗️",
    className: "col-span-1 lg:col-span-2",
    bgColor: "bg-slate-800",
  },
  {
    title: "Type-Safe APIs",
    description:
      "tRPC end-to-end type safety. Prisma ORM for database access. Full TypeScript throughout.",
    icon: "⚡",
    className: "col-span-1",
    bgColor: "bg-cyan-900",
  },
  {
    title: "Analytics & Monitoring",
    description:
      "PostHog for product analytics. Error tracking and performance monitoring built in.",
    icon: "📊",
    className: "col-span-1",
    bgColor: "bg-teal-900",
  },
];

export function FeaturesSection() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
          Features
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Everything you need to ship
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Stop cobbling together boilerplate. Start with a production-grade foundation
          that handles the hard parts so you can focus on your product.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={feature.className}
          >
            <WobbleCard
              containerClassName={`h-full ${feature.bgColor} min-h-[200px]`}
            >
              <div className="flex flex-col gap-3 p-2">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </WobbleCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
