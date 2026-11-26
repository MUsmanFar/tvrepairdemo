export const site = {
  name: "Magic TV Repairs",
  businessName: "Magic Electronic Repairs",
  title: "Magic TV Repairs | Mobile TV Repair in Cape Town",
  description: "Magic TV Repairs comes to you in Cape Town. WhatsApp or call for help with a TV that won’t turn on, has a dark picture or keeps cutting out.",
  phone: "+27 64 115 3065",
  phoneHref: "tel:+27641153065",
  email: "katogokelvin65@gmail.com",
  location: "Cape Town, South Africa 7460",
  facebook: "https://www.facebook.com/p/Magictv-Repairs-100093193316154/",
  reviews: "https://www.facebook.com/100093193316154/reviews/",
  tiktok: "https://www.tiktok.com/@kelvinmagickatogo",
  directory: "https://www.infobel.com/en/southafrica/magic_electronic_repairs/richmond_estate/ZA102891164/businessdetails.aspx",
  map: "https://www.bing.com/maps?cp=-33.902250582152~18.56452&lvl=15",
};

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  || (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`);

export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;

export function whatsapp(message = "Hi Magic TV Repairs, I’d like help with my TV. Can you assist?") {
  return `https://wa.me/27641153065?text=${encodeURIComponent(message)}`;
}
