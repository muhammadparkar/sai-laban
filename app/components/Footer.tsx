import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/sai_laban",
    path: "M12 2.2c2.7 0 3 .01 4.1.06 1.1.05 1.8.22 2.2.37.6.23 1 .5 1.4.9.4.4.7.8.9 1.4.15.4.32 1.1.37 2.2.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.8-.37 2.2-.23.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.15-1.1.32-2.2.37-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.8-.22-2.2-.37-.6-.23-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.15-.4-.32-1.1-.37-2.2C2.21 15 2.2 14.7 2.2 12s.01-3 .06-4.1c.05-1.1.22-1.8.37-2.2.23-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.15 1.1-.32 2.2-.37C8.99 2.21 9.3 2.2 12 2.2Zm0 1.8c-2.66 0-2.97.01-4.02.06-.87.04-1.34.18-1.66.3-.42.16-.72.36-1.03.67-.31.31-.51.61-.67 1.03-.12.32-.26.79-.3 1.66C4.27 8.77 4.26 9.08 4.26 12s.01 3.23.06 4.28c.04.87.18 1.34.3 1.66.16.42.36.72.67 1.03.31.31.61.51 1.03.67.32.12.79.26 1.66.3 1.05.05 1.36.06 4.02.06s2.97-.01 4.02-.06c.87-.04 1.34-.18 1.66-.3.42-.16.72-.36 1.03-.67.31-.31.51-.61.67-1.03.12-.32.26-.79.3-1.66.05-1.05.06-1.36.06-4.28s-.01-3.23-.06-4.28c-.04-.87-.18-1.34-.3-1.66a2.77 2.77 0 0 0-.67-1.03 2.77 2.77 0 0 0-1.03-.67c-.32-.12-.79-.26-1.66-.3C14.97 4.01 14.66 4 12 4Zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06Zm0 8.14A3.2 3.2 0 1 0 8.8 12a3.2 3.2 0 0 0 3.2 3.2Zm5.14-8.34a1.15 1.15 0 1 1-1.15-1.15 1.15 1.15 0 0 1 1.15 1.15Z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/910000000000",
    path: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5.06-1.33A10 10 0 1 0 12 2Zm5.86 14.3c-.25.7-1.45 1.34-2 1.42-.5.08-1.14.11-1.84-.12a15.5 15.5 0 0 1-2.03-.75 12.3 12.3 0 0 1-4.75-4.2c-.55-.75-.92-1.6-1.02-2.1a2.75 2.75 0 0 1 .35-2.05c.2-.28.9-1.05 1.24-1.05.35 0 .58.02.75.02.2 0 .4-.03.6.46.24.6.8 2.05.87 2.2.07.15.12.33.02.54-.1.2-.15.32-.3.5-.15.17-.3.38-.44.5-.14.14-.3.3-.13.6.16.3.72 1.2 1.55 1.94 1.06.95 1.96 1.24 2.27 1.38.3.15.48.13.66-.08.18-.2.75-.87.95-1.17.2-.3.4-.24.68-.14.28.1 1.77.83 2.07 1 .3.15.5.23.57.35.08.13.08.7-.17 1.4Z",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy text-cream mt-auto overflow-hidden">
      {/* wave top edge */}
      <svg
        className="w-full text-cream"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,0 L1440,0 L1440,12 C1320,44 1200,12 1080,20 C960,28 840,44 720,36 C600,28 480,8 360,16 C240,24 120,44 0,24 Z"
          fill="currentColor"
        />
      </svg>
      {/* soft glow */}
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand block */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 cursor-pointer group">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full overflow-hidden border-2 border-cream/70 bg-[#0b3aa8] shadow-[3px_3px_0px_rgba(0,173,241,0.6)] transition-transform duration-200 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <Image
                src="/sai_logo_trim.png"
                alt="Sai Laban"
                width={1139}
                height={190}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 font-royal italic text-lg text-gold">
              A Royal Taste of Sweetness
            </p>
            <p className="mt-2 max-w-xs text-sm text-cream/70 leading-relaxed font-medium">
              Egyptian laban, konafa &amp; creamy desserts — crafted with love,
              served with sweetness in Koregaon Park, Pune.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream bg-[#0b3aa8] text-cream transition-all duration-200 hover:bg-sky hover:text-navy hover:-translate-y-1 shadow-[2px_2px_0px_rgba(255,255,255,0.25)] cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="font-display text-sm font-bold text-gold uppercase tracking-wider">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-cream/85 transition-all duration-200 hover:text-sky hover:translate-x-1 cursor-pointer font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="font-display text-sm font-bold text-gold uppercase tracking-wider">
              Visit Us
            </p>
            <p className="mt-4 text-sm text-cream/85 leading-relaxed font-medium">
              Lane 5, North Main Road,
              <br />
              Koregaon Park, Pune 411001
            </p>
            <p className="mt-3 text-sm text-sky font-semibold">Daily · 12pm – 11pm</p>
            <a
              href="https://maps.google.com/?q=Sai+Laban+Koregaon+Park+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-display font-bold text-cream underline decoration-sky decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sky cursor-pointer"
            >
              Get Directions →
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-display text-sm font-bold text-gold uppercase tracking-wider">
              Stay in the Loop
            </p>
            <p className="mt-4 text-sm text-cream/70 font-medium leading-relaxed">
              Get pinged when we open in your city.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-xs text-cream/60 flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Sai Laban. A Royal Taste of Sweetness.</p>
          <p className="text-cream/40">Made with ❤️ for dessert lovers</p>
        </div>
      </div>
    </footer>
  );
}
