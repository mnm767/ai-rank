import { cn } from "@saasfly/ui";
import Marquee from "@saasfly/ui/marquee";

const logos = [
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Prisma" },
  { name: "Stripe" },
  { name: "PostgreSQL" },
  { name: "Vercel" },
  { name: "Clerk" },
  { name: "Tailwind CSS" },
  { name: "tRPC" },
  { name: "Turborepo" },
  { name: "Resend" },
  { name: "PostHog" },
];

function LogoItem({ name }: { name: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border border-border/50 bg-background/80 px-6 py-3",
        "mx-3 min-w-[140px]",
      )}
    >
      <span className="text-sm font-semibold text-muted-foreground">
        {name}
      </span>
    </div>
  );
}

export function LogoCloud() {
  return (
    <section className="py-16">
      <div className="container mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Built with best-in-class technologies
        </p>
      </div>
      <div className="relative overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {logos.map((logo) => (
            <LogoItem key={logo.name} name={logo.name} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
