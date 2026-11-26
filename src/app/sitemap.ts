import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? ["", "/privacy-policy", "/terms-and-conditions"].map((path) => ({
    url: `${siteUrl}${path || "/"}`,
  })) : [];
}
