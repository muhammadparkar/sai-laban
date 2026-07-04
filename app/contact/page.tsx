import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact / Order — Sai Laban",
  description: "Reach Sai Laban in Koregaon Park via WhatsApp, phone, or email.",
};

export default function ContactPage() {
  return (
    <>
      {/* Title Header */}
      <section className="bg-gradient-to-b from-[#0b3aa8] to-navy px-4 pt-32 pb-16 text-center text-cream sm:px-6 md:pt-40">
        <p className="font-display uppercase tracking-widest text-sm font-extrabold text-gold bubbly-text-shadow">
          We&apos;d love to hear from you
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl bubbly-text-shadow">
          Contact &amp; Order
        </h1>
      </section>

      {/* Main Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div data-reveal className="clay-card p-6 md:p-8 bg-white">
            <ContactForm />
          </div>

          <div data-reveal className="clay-card p-6 md:p-8 bg-white flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-sky bg-sky/10 font-display text-xs font-bold uppercase tracking-wider text-sky">
                Get Delivery
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold text-navy">
                Order via WhatsApp / DM
              </h2>
              <p className="mt-3 text-ink/75 font-semibold leading-relaxed">
                We&apos;re not on Zomato/Swiggy yet — chat with us directly and
                we&apos;ll get your creamy desserts delivered right to your doorstep!
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn-sky w-full min-h-11 py-3 text-center font-display font-extrabold tracking-wider cursor-pointer"
                >
                  WhatsApp Us
                </a>
                <a
                  href="https://instagram.com/sai_laban"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn-outline w-full min-h-11 py-3 text-center font-display font-extrabold tracking-wider cursor-pointer"
                >
                  DM on Instagram
                </a>
              </div>
            </div>

            <div className="mt-10 border-t-2 border-dashed border-navy/10 pt-6 space-y-3.5 text-ink/80 text-sm font-semibold">
              <p className="flex justify-between border-b border-navy/5 pb-2">
                <span className="text-navy uppercase font-bold tracking-wider text-xs">Phone:</span>
                <span>+91 00000 00000</span>
              </p>
              <p className="flex justify-between border-b border-navy/5 pb-2">
                <span className="text-navy uppercase font-bold tracking-wider text-xs">Email:</span>
                <span>hello@sailaban.in</span>
              </p>
              <p className="flex justify-between items-start gap-4">
                <span className="text-navy uppercase font-bold tracking-wider text-xs shrink-0 mt-0.5">Address:</span>
                <span className="text-right">Lane 5, North Main Road, Koregaon Park, Pune 411001</span>
              </p>
            </div>

            <div className="mt-8 aspect-video rounded-2xl border-2 border-navy bg-gradient-to-br from-sky/30 via-navy/10 to-gold/20 shadow-[4px_4px_0px_var(--color-navy)] overflow-hidden" />
          </div>
        </div>
      </section>
    </>
  );
}

