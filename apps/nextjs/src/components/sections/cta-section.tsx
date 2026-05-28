"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Meteors } from "@saasfly/ui/meteors";
import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="container py-24">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 md:p-16">
        <Meteors number={20} />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Ready to ship your SaaS?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Join thousands of developers who stopped building boilerplate and
              started building their product. Get started in minutes, free.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/en/login">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-blue-600 px-8 text-base font-semibold text-white hover:bg-blue-500"
                >
                  Start Building Free
                  <Icons.ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/en/pricing">
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full px-8 text-base font-semibold text-white hover:bg-white/10"
                >
                  View Pricing
                </Button>
              </Link>
            </div>

            <div className="mt-10 border-t border-white/10 pt-10">
              <p className="mb-4 text-sm text-slate-400">
                Get notified about new features and updates
              </p>
              {submitted ? (
                <p className="text-sm font-medium text-green-400">
                  Thanks! We&apos;ll keep you updated.
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row sm:justify-center"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="h-11 w-full max-w-xs rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button
                    type="submit"
                    className="h-11 rounded-xl bg-white px-6 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Icons.Check className="h-3 w-3 text-green-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-1">
                <Icons.Check className="h-3 w-3 text-green-400" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-1">
                <Icons.Check className="h-3 w-3 text-green-400" />
                Free tier forever
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
