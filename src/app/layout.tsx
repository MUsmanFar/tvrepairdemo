import type { Metadata, Viewport } from "next";
import { site, siteUrl } from "@/config/site";
import "lenis/dist/lenis.css";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#081722",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: { default: site.title, template: "%s | Magic TV Repairs" },
  description: site.description,
  applicationName: site.name,
  robots: siteUrl ? undefined : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: siteUrl,
    images: [{ url: "/magic/og.jpg", width: 1200, height: 630, alt: "Magic TV Repairs — mobile TV repair in Cape Town" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/magic/og.jpg"],
  },
  manifest: "/site.webmanifest",
  icons: { icon: "/magic/mark.svg", apple: "/magic/apple-touch-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
