"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Switch } from "@saasfly/ui/switch";
import { Button } from "@saasfly/ui/button";
import { GlowingEffect } from "@saasfly/ui/glowing-effect";
import { cn } from "@saasfly/ui";

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for indie hackers and side projects",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Up to 1 project",
      "Basic analytics",
      "Community support",
      "Core features included",
    ],
    cta: "Get Started Free",
    href: "/en/login",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams shipping real products",
    monthlyPrice: 30,
    yearlyPrice: 24,
    features: [
      "Up to 3 projects",
      "Advanced analytics",
      "Priority email support",
      "All templates included",
      "Custom domain support",
    ],
    cta: "Start Pro Trial",
    href: "/en/login",
    featured: true,
  },
  {
    id: "business",
    name: "Business",
    description: "For teams that need the full stack",
    monthlyPrice: 60,
    yearlyPrice: 50,
    features: [
      "Unlimited projects",
      "Real-time analytics",
      "24/7 dedicated support",
      "Custom branding",
      "SLA guarantee",
      "Account manager",
    ],
    cta: "Contact Sales",
    href: "/en/login",
    featured: false,
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

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
          Pricing
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start free. Scale as you grow. No hidden fees.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium",
              !isYearly ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-blue-600"
          />
          <span
            className={cn(
              "text-sm font-medium",
              isYearly ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Annual{" "}
            <span className="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              Save 20%
            </span>
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border p-8",
                plan.featured
                  ? "border-blue-500/50 bg-blue-950/10 dark:bg-blue-950/20"
                  : "border-border bg-card",
              )}
            >
              {plan.featured && (
                <GlowingEffect
                  spread={40}
                  blur={20}
                  variant="default"
                  glow
                  disabled={false}
                  borderWidth={2}
                />
              )}

              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="mb-1 text-muted-foreground">/mo</span>
                </div>
                {isYearly && plan.monthlyPrice > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Billed annually (${plan.yearlyPrice * 12}/yr)
                  </p>
                )}
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckIcon />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link href={plan.href}>
                  <Button
                    className={cn(
                      "w-full rounded-xl font-semibold",
                      plan.featured
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "",
                    )}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
