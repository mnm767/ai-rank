import { NextRequest, NextResponse } from "next/server";
import { getLocale, isNoNeedProcess, isNoRedirect } from "./utils/clerk";
import { i18n } from "~/config/i18n-config";

const CLERK_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const isClerkConfigured =
  CLERK_KEY.startsWith("pk_live_") || CLERK_KEY.startsWith("pk_test_") && CLERK_KEY.length > 20 && !CLERK_KEY.includes("placeholder");

async function devMiddleware(req: NextRequest) {
  if (isNoNeedProcess(req)) return NextResponse.next();

  const pathname = req.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (!isNoRedirect(req) && pathnameIsMissingLocale) {
    const locale = getLocale(req);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        req.url,
      ),
    );
  }

  return NextResponse.next();
}

export async function middleware(req: NextRequest) {
  if (!isClerkConfigured) {
    return devMiddleware(req);
  }
  const { middleware: clerkMw } = await import("./utils/clerk");
  return (clerkMw as any)(req);
}

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)"
  ],
};
