"use client";

import * as React from "react";
import { redirect } from "next/navigation";
import { SignIn, useUser } from "@clerk/nextjs";

import { cn } from "@saasfly/ui";

const CLERK_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const isClerkConfigured =
  (CLERK_KEY.startsWith("pk_live_") || CLERK_KEY.startsWith("pk_test_")) &&
  CLERK_KEY.length > 20 &&
  !CLERK_KEY.includes("placeholder");

type Dictionary = Record<string, string>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  lang: string;
  dict?: Dictionary;
  disabled?: boolean;
}

function UserClerkAuthFormInner({
  className,
  lang,
  ...props
}: UserAuthFormProps) {
  const { user } = useUser();
  if (user) {
    redirect(`/${lang}/dashboard`);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <SignIn withSignUp={false} fallbackRedirectUrl={`/${lang}/dashboard`} />
    </div>
  );
}

export function UserClerkAuthForm(props: UserAuthFormProps) {
  if (!isClerkConfigured) {
    return (
      <div className="rounded-xl border border-border p-6 text-center text-sm text-muted-foreground">
        Clerk is not configured. Add your Clerk keys to .env.local to enable sign-in.
      </div>
    );
  }
  return <UserClerkAuthFormInner {...props} />;
}
