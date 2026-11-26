import Image from "next/image";
import Link from "next/link";
import { AudioLines, CircleHelp, Clock3, ExternalLink, House, Mail, MapPin, Menu, Monitor, Phone, Play, Plus, Quote, Wrench, Zap } from "lucide-react";
import { PageMotion } from "@/components/ui/PageMotion";
import { RepairEnquiry } from "@/components/RepairEnquiry";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site, siteUrl, whatsapp } from "@/config/site";

const navigation = [
  { label: "Repairs", href: "#repairs" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Coverage", href: "#coverage" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const repairs = [
  { icon: Zap, image: "/images/service-power-supply.jpg", title: "Won’t switch on", detail: "No power, a blinking standby light or a TV that switches itself off." },
  { icon: Monitor, image: "/images/diagnostic-backlight-test.jpg", title: "Picture problems", detail: "A dark screen with sound, flickering, lines or an uneven picture." },
  { icon: AudioLines, image: "/images/service-motherboard.jpg", title: "Sound or signal issues", detail: "No sound, intermittent audio or inputs that aren’t responding." },
];

const steps = [
  { title: "Send us the details", detail: "Share your suburb, TV brand or model, and what happens when you turn it on. A photo or short clip can help." },
  { title: "Arrange a visit", detail: "We’ll confirm whether we can come to your area and discuss timing and any call-out fee." },
  { title: "Decide on the repair", detail: "Once we’ve assessed the fault, we’ll explain the options so you can decide whether to go ahead." },
];

const faqs = [
  { question: "Can you come to my home?", answer: "Yes. Magic TV Repairs is a mobile service in Cape Town. Send your suburb on WhatsApp to confirm coverage." },
  { question: "Can I get a repair today?", answer: "Ask about same-day availability when you contact us. Timing depends on the fault, where you are and whether parts are needed." },
  { question: "Do you repair cracked screens?", answer: "We don’t repair physically cracked TV screens. If the screen is intact but you see lines or a blank picture, send us a photo and describe what happens." },
  { question: "What will it cost?", answer: "Send the TV model and symptoms to discuss the next step. Ask about any call-out fee and confirm the price and any warranty terms before approving a repair." },
];

const reviewNotes = [
  { name: "Voltex Magumura", initials: "VM", note: "very quick very affordable and trustworthy", date: "August 2023", recommends: true },
  { name: "Kevy Vince Katogo", initials: "KK", note: "Good and professional services", date: "November 2023", recommends: true },
  { name: "Jimmy Kristopher Jelasi", initials: "JJ", note: "Reported that the TV failed again five days after the repair and that he couldn’t reach the business for follow-up.", date: "Facebook review summary", recommends: false },
];

const repairChecks = [
  { title: "Picture & backlight", detail: "If you can still hear sound but the screen stays dark, describe what you see at start-up." },
  { title: "Power & start-up", detail: "Tell us whether the standby light is off, flashing or steady, and whether the TV restarts on its own." },
  { title: "Sound & inputs", detail: "Tell us which input or app is affected, and whether the sound drops out on every source." },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Magic TV Repairs home">
      <Image src="/magic/logo.png" width={1320} height={340} alt="" unoptimized />
    </Link>
  );
}

function ContactButtons({ label = "WhatsApp us" }: { label?: string }) {
  return (
    <div className="contact-buttons">
      <a className="button primary" href={whatsapp()}><WhatsAppIcon aria-hidden="true" />{label}</a>
      <a className="button outline" href={site.phoneHref}><Phone aria-hidden="true" />Call now</a>
    </div>
  );
}

export const metadata = { alternates: { canonical: siteUrl ? "/" : undefined } };

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    alternateName: site.businessName,
    description: site.description,
    url: siteUrl,
    logo: siteUrl ? `${siteUrl}/magic/logo-circular.png` : undefined,
    image: siteUrl ? `${siteUrl}/magic/og.jpg` : undefined,
    telephone: "+27641153065",
    email: site.email,
    areaServed: { "@type": "City", name: "Cape Town" },
    address: { "@type": "PostalAddress", addressLocality: "Cape Town", postalCode: "7460", addressCountry: "ZA" },
    sameAs: [site.facebook, site.tiktok, site.directory],
    hasMap: site.map,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <PageMotion />
      <div className="intro" aria-hidden="true"><Image src="/magic/mark.svg" width={76} height={76} alt="" /></div>
      <header className="header">
        <div className="wrap header-row">
          <Brand />
          <nav aria-label="Main navigation" className="desktop-nav">
            {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="button nav-call" href={site.phoneHref}><Phone aria-hidden="true" />{site.phone}</a>
          <details className="mobile-menu">
            <summary aria-label="Navigation menu"><Menu aria-hidden="true" /></summary>
            <nav aria-label="Mobile navigation">
              {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
            </nav>
          </details>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><MapPin aria-hidden="true" /> Cape Town, South Africa</p>
              <h1>TV repair that<br /> comes to you<em>in Cape Town.</em></h1>
              <p className="lede">Picture, power or sound problems? Tell us what’s wrong with your TV and ask about a home visit.</p>
              <ContactButtons />
              <p className="availability"><span aria-hidden="true" /> Ask about same-day availability</p>
            </div>
            <figure className="hero-photo">
              <Image src="/magic/hero.webp" alt="Illustration of a technician inspecting the back of a television during a home visit" fill preload unoptimized sizes="(max-width: 760px) 100vw, 67vw" />
              <a className="photo-label" href="#video"><span><Play size={17} aria-hidden="true" /></span> Watch how it works</a>
            </figure>
          </div>
          <div className="wrap service-strip">
            <div><House aria-hidden="true" /> Doorstep service</div>
            <div><Wrench aria-hidden="true" /> TV fault diagnosis</div>
            <div><Clock3 aria-hidden="true" /> Same-day enquiries</div>
          </div>
        </section>

        <section id="repairs" tabIndex={-1} className="section wrap">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">TV repairs</p>
            <h2>What’s happening with your TV?</h2>
          </div>
          <div className="repair-grid">
            {repairs.map(({ icon: Icon, image, title, detail }) => (
              <article className="repair-card" data-reveal key={title}>
                <div className="repair-image"><Image src={image} fill sizes="(max-width: 620px) 92vw, 32vw" alt="" /></div>
                <div className="repair-content">
                  <span className="card-icon"><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                  <a href={whatsapp(`Hi Magic TV Repairs, I need help with my TV. Issue: ${title}. My suburb is `)}><WhatsAppIcon aria-hidden="true" /> Ask about this fault</a>
                </div>
              </article>
            ))}
          </div>
          <p className="service-note"><CircleHelp aria-hidden="true" /> Cracked or shattered screens are outside our repair service.</p>
        </section>

        <section className="diagnosis section" aria-labelledby="diagnosis-title">
          <div className="wrap diagnosis-grid" data-reveal>
            <figure className="diagnosis-photo">
              <Image src="/images/service-qled-4k.jpg" alt="Flat-screen televisions displaying a vivid colour pattern" fill sizes="(max-width: 820px) 94vw, 52vw" />
            </figure>
            <div>
              <p className="eyebrow">Before you book</p>
              <h2 id="diagnosis-title">Describe the fault.</h2>
              <p className="lede">A TV model and a few details about the symptoms help us discuss the right next step.</p>
              <ul className="diagnosis-list">
                {repairChecks.map(({ title, detail }) => (
                  <li key={title}><span aria-hidden="true" /><div><h3>{title}</h3><p>{detail}</p></div></li>
                ))}
              </ul>
              <a className="button primary" href="#repair-enquiry">Start a repair enquiry</a>
            </div>
          </div>
        </section>

        <section id="how-it-works" tabIndex={-1} className="process section">
          <div className="wrap process-grid" data-reveal>
            <div>
              <p className="eyebrow">How it works</p>
              <h2>From first message<br className="wide-break" /> to home visit.</h2>
              <ol id="repair-steps" className="steps">
                {steps.map(({ title, detail }, index) => <li key={title}><span aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}
              </ol>
            </div>
            <div id="video" tabIndex={-1} className="video-panel">
              <video controls playsInline preload="none" poster="/magic/video-cover.webp" width={960} height={540} aria-label="A silent illustrated guide to arranging a mobile TV repair" aria-describedby="repair-steps">
                <source src="/magic/repair-guide.mp4" type="video/mp4" />
                <a href="/magic/repair-guide.mp4">Download the repair guide</a>
              </video>
              <div><Play size={16} aria-hidden="true" /> The doorstep repair guide <span>0:15</span></div>
            </div>
          </div>
        </section>

        <section id="reviews" tabIndex={-1} className="section reviews">
          <div className="wrap" data-reveal>
            <div className="section-heading">
              <p className="eyebrow">Facebook reviews</p>
              <h2>What people say about Magic TV.</h2>
            </div>
            <div className="review-summary">
              <p className="rating">88<span>%</span></p>
              <p>Recommend Magic TV Repairs<br /><small>Facebook snapshot · 7 reviews</small></p>
              <a className="button outline" href={site.reviews}><Image src="/magic/facebook.svg" width={20} height={20} alt="" />Read all Facebook reviews</a>
            </div>
            <div className="review-grid">
              {reviewNotes.map(({ name, initials, note, date, recommends }) => (
                <figure className="review-card" key={name}>
                  <div className="review-card-top">
                    <span className={recommends ? "review-status" : "review-status critical"}>{recommends ? "Recommends" : "Doesn’t recommend"}</span>
                    <Quote size={21} aria-hidden="true" />
                  </div>
                  {recommends ? <blockquote>“{note}”</blockquote> : <p>{note}</p>}
                  <figcaption><span className="review-avatar" aria-hidden="true">{initials}</span><div><strong>{name}</strong><span>{date}</span></div></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="coverage" tabIndex={-1} className="coverage section" aria-labelledby="coverage-title">
          <div className="wrap coverage-grid" data-reveal>
            <div>
              <p className="eyebrow">Service area</p>
              <h2 id="coverage-title">Mobile TV repair in Cape Town.</h2>
              <p className="lede">Send your suburb before booking so we can confirm travel, availability and any call-out fee.</p>
              <a className="button outline" href={site.map}><MapPin aria-hidden="true" /> View area on Bing Maps</a>
            </div>
            <RepairEnquiry />
          </div>
        </section>

        <section className="faq section">
          <div className="wrap faq-grid" data-reveal>
            <div><p className="eyebrow">TV repair FAQs</p><h2>Good to know.</h2></div>
            <div>
              {faqs.map(({ question, answer }) => <details key={question}><summary>{question}<Plus aria-hidden="true" /></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section id="contact" tabIndex={-1} className="contact section">
          <div className="wrap contact-grid" data-reveal>
            <div><p className="eyebrow">Get in touch</p><h2>Tell us what your TV is doing.</h2><p className="lede">Send your suburb and TV model so we can let you know what’s possible.</p><ContactButtons label="Message on WhatsApp" /></div>
            <address>
              <a href={site.phoneHref}><Phone aria-hidden="true" /><span><small>Call or WhatsApp</small>{site.phone}</span></a>
              <a href={`mailto:${site.email}`}><Mail aria-hidden="true" /><span><small>Email</small>{site.email}</span></a>
              <a href={site.map}><MapPin aria-hidden="true" /><span><small>Service area</small>{site.location}</span></a>
            </address>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-row">
          <div><Brand /><p>{site.businessName} · Cape Town</p></div>
          <nav aria-label="Social media and listings">
            <a href={site.facebook}><Image src="/magic/facebook.svg" width={21} height={21} alt="" />Facebook</a>
            <a href={site.tiktok}><Image src="/magic/tiktok.svg" width={21} height={21} alt="" />TikTok</a>
            <a href={site.directory}><ExternalLink size={18} aria-hidden="true" />Infobel</a>
          </nav>
          <nav aria-label="Legal"><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link></nav>
        </div>
      </footer>
      <nav className="mobile-dock" aria-label="Contact Magic TV Repairs"><ContactButtons label="WhatsApp" /></nav>
    </>
  );
}
