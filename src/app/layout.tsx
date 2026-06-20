import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/app-context";
// Render dynamically at request time rather than statically prerendering at
// build. The page relies on client-side auth/session, so static export isn't
// needed and dynamic rendering avoids build-time prerender errors.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "TRUSCREN TECH HUB | Professional Device Repair Training",
  description:
    "TRUSCREN TECH HUB is Africa's leading hands-on training school for phone screen replacement, battery repair, circuit board micro-soldering, and device diagnostics. Get certified. Get hired. Start your repair business.",
  openGraph: {
    title: "TRUSCREN TECH HUB | Professional Device Repair Training",
    description:
      "Ghana's leading professional device repair training school. Campuses in Accra, Kumasi, and Takoradi.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
