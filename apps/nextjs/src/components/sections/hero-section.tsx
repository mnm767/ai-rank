"use client";

import Link from "next/link";
import { AnimatedGradientText } from "@saasfly/ui/animated-gradient-text";
import { SparklesCore } from "@saasfly/ui/sparkles";
import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";
import { cn } from "@saasfly/ui";
import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Developers" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support" },
  { value: "150+", label: "Countries" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          particleColor="#3b82f6"
          particleDensity={60}
          speed={1.2}
          minSize={0.6}
          maxSize={1.4}
          className="h-full w-full"
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <AnimatedGradientText>
            <span
              className={cn(
                "inline animate-gradient bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
              )}
            >
              Introducing AI-Rank SaaS
            </span>
            <Icons.ChevronRight className="ml-1 h-3 w-3" />
          </AnimatedGradientText>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build Your SaaS{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Faster Than Ever
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          An enterprise-grade Next.js boilerplate with auth, payments, analytics,
          and everything you need to ship production-ready SaaS in days, not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/en/login">
            <Button
              size="lg"
              className="h-12 rounded-full bg-blue-600 px-8 text-base font-semibold text-white hover:bg-blue-500"
            >
              Get Started Free
              <Icons.ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://github.com/saasfly/saasfly" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base font-semibold"
            >
              <Icons.GitHub className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-border/50 bg-background/80 px-6 py-4 backdrop-blur-sm"
            >
              <span className="text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
