import type { Metadata } from "next";
import Link from "next/link";
import { site, siteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: { canonical: siteUrl ? "/privacy-policy" : undefined },
};

export default function PrivacyPolicy() {
  return (
    <main id="main" className="wrap legal section">
      <Link href="/">Magic TV Repairs</Link>
      <h1>Privacy policy</h1>
      <p>When you contact {site.businessName} by phone, email or WhatsApp, we use the information you share to respond, assess your repair enquiry and arrange a visit if needed.</p>
      <p>When you open WhatsApp, Facebook, TikTok, Infobel or Bing Maps, the service you open handles your activity under its own privacy policy.</p>
      <p>For questions about information you’ve shared with us, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </main>
  );
}
