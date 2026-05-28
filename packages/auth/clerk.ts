import { env } from "./env.mjs";

const CLERK_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const isClerkConfigured =
  (CLERK_KEY.startsWith("pk_live_") || CLERK_KEY.startsWith("pk_test_")) &&
  CLERK_KEY.length > 20 &&
  !CLERK_KEY.includes("placeholder");

export async function getSessionUser() {
  if (!isClerkConfigured) {
    return undefined;
  }

  const { auth } = await import("@clerk/nextjs/server");
  const { sessionClaims } = await auth();
  if (env.ADMIN_EMAIL) {
    const adminEmails = env.ADMIN_EMAIL.split(",");
    if (sessionClaims?.user?.email) {
      sessionClaims.user.isAdmin = adminEmails.includes(sessionClaims?.user?.email);
    }
  }
  return sessionClaims?.user;
}
