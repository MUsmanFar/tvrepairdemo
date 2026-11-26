import type { Metadata } from "next";
import Link from "next/link";
import { site, siteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Repair terms",
  alternates: { canonical: siteUrl ? "/terms-and-conditions" : undefined },
};

export default function RepairTerms() {
  return (
    <main id="main" className="wrap legal section">
      <Link href="/">Magic TV Repairs</Link>
      <h1>Repair terms</h1>
      <p>Contact {site.businessName} to confirm service in your suburb and whether a visit is available. Repair timing depends on the fault and parts availability.</p>
      <p>Ask about any call-out fee before booking. Confirm the scope, price and any applicable warranty directly with the business before approving work.</p>
      <p>For questions about your repair, call <a href={site.phoneHref}>{site.phone}</a> or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </main>
  );
}
