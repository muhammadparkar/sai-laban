import type { Metadata } from "next";
import Image from "next/image";
import Mascot from "../components/Mascot";
import CtaButton from "../components/CtaButton";

export const metadata: Metadata = {
  title: "Locations — Sai Laban",
  description: "Visit Sai Laban in Koregaon Park, Pune. More cities coming soon.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Title Header */}
      <section className="bg-gradient-to-b from-[#0b3aa8] to-navy px-4 pt-32 pb-16 text-center text-cream sm:px-6 md:pt-40">
        <p className="font-display uppercase tracking-widest text-sm font-extrabold text-gold bubbly-text-shadow">
          A Royal Taste of Sweetness
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl bubbly-text-shadow">
          Koregaon Park, Pune
        </h1>
      </section>

      {/* Main Details Section */}
      <section className="bg-grid py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div data-reveal className="clay-card p-6 md:p-8 bg-white">
              <span className="inline-block px-3 py-1 rounded-full border border-burgundy bg-burgundy/10 font-display text-xs font-bold uppercase tracking-wider text-burgundy">
                Now Open
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-navy bubbly-text-shadow-white">
                Sai Laban Koregaon Park
              </h2>
              <p className="mt-4 text-ink/80 font-medium leading-relaxed">
                Lane 5, North Main Road,
                <br />
                Koregaon Park, Pune 411001
              </p>
              <p className="mt-4 font-display font-extrabold text-navy">
                Daily · 12pm – 11pm
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <CtaButton href="https://wa.me/910000000000" variant="sky">
                  Call / WhatsApp
                </CtaButton>
                <CtaButton
                  href="https://maps.google.com/?q=Koregaon+Park+Pune"
                  variant="outline"
                >
                  Get Directions
                </CtaButton>
              </div>
            </div>
            <div className="aspect-video rounded-3xl border-3 border-navy shadow-[6px_6px_0px_var(--color-navy)] overflow-hidden relative">
              <Image
                src="/store_interior.png"
                alt="Sai Laban Store Interior"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Map Preview */}
          <div className="mt-10 aspect-video w-full rounded-3xl border-3 border-navy shadow-[6px_6px_0px_var(--color-navy)] overflow-hidden">
            <iframe
              title="Sai Laban location on Google Maps — Koregaon Park, Pune"
              src="https://maps.google.com/maps?q=Sai+Laban+Koregaon+Park+Pune&z=15&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        {/* Polaroid Style Snaps */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl border-3 border-navy bg-white p-2 shadow-[4px_4px_0px_var(--color-navy)] transition-all duration-200 hover:-rotate-1 hover:scale-102"
            >
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-navy/10 via-sky/15 to-burgundy/10 border border-navy/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Coming Soon Section */}
      <section className="bg-cream py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <div data-reveal className="clay-card p-8 md:p-12 bg-white flex flex-col items-center gap-8 md:flex-row">
            <div className="shrink-0 flex justify-center items-center">
              <Mascot 
                pose="cheer" 
                variant="sticker" 
                className="h-36 w-36 sm:h-44 sm:w-44" 
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full border border-sky bg-sky/10 font-display text-xs font-bold uppercase tracking-wider text-sky">
                Coming Soon
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl text-navy">
                More cities are on the way
              </h2>
              <p className="mt-3 text-ink/75 font-medium leading-relaxed">
                Koregaon Park is just the start. Sign up in the footer to be
                first to know when Sai Laban lands in your neighborhood!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

