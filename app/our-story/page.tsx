import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "../components/CtaButton";

export const metadata: Metadata = {
  title: "Our Story — Sai Laban",
  description:
    "The Egyptian laban and konafa heritage behind Sai Laban, and why Pune is next.",
};

const TIMELINE = [
  { year: "1950s", label: "A family recipe for laban and konafa takes shape in Cairo." },
  { year: "1980s", label: "Passed down a generation, refined in home kitchens across festivals." },
  { year: "2020s", label: "The recipe travels — research, testing, and a new home in India." },
  { year: "Today", label: "Sai Laban opens its doors in Koregaon Park, Pune." },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Title Header */}
      <section className="bg-gradient-to-b from-[#0b3aa8] to-navy px-4 pt-32 pb-16 text-center text-cream sm:px-6 md:pt-40">
        <p className="font-display uppercase tracking-widest text-sm font-extrabold text-gold bubbly-text-shadow">
          Our Story
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl bubbly-text-shadow">
          A recipe carried across generations
        </h1>
      </section>
      {/* Main Content Card */}
      <section className="bg-grid py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div data-reveal className="clay-card p-6 md:p-12 bg-white">
            <div className="aspect-video rounded-2xl border-3 border-navy shadow-[5px_5px_0px_var(--color-navy)] overflow-hidden relative">
              <Image
                src="/story_heritage.png"
                alt="Traditional baking in Cairo"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          
          <p className="mt-10 text-lg font-medium leading-relaxed text-ink">
            Laban and konafa are older than most brands trying to sell them.
            In Egypt, they show up at weddings, at Ramadan tables, and in the
            hands of grandmothers who never measured anything because the
            recipe already lived in their fingers.
          </p>
          
          <div className="my-8 border-l-4 border-burgundy pl-6 py-1">
            <p className="font-royal italic text-2xl md:text-3xl text-burgundy leading-relaxed">
              &ldquo;We didn&apos;t invent this. We just refused to let it
              disappear.&rdquo;
            </p>
          </div>
          
          <p className="mt-4 text-lg font-medium leading-relaxed text-ink">
            Sai Laban started with one question: what happens when you bring
            that same recipe — the same cardamom, the same crisp shredded
            pastry, the same cold-set laban — to a city that has never tasted
            it? Pune answered before we even opened the doors. Koregaon Park
            felt like the right first stop: young, curious, always looking
            for the next thing worth queuing up for.
          </p>
          
          <p className="mt-6 text-lg font-medium leading-relaxed text-ink">
            Behind the counter is a small team of people who grew up on this
            dessert and a few who are tasting it for the first time — proof
            that heritage travels well when you don&apos;t water it down.
          </p>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="bg-cream py-16 px-4">
        <div className="mx-auto max-w-3xl clay-card p-8 md:p-12 bg-white">
          <h2 className="font-display text-3xl font-extrabold text-navy text-center bubbly-text-shadow-white">
            From Cairo to Koregaon Park
          </h2>
          <ol className="mt-12 space-y-10 border-l-4 border-navy pl-6 relative">
            {TIMELINE.map((step) => (
              <li key={step.year} className="relative group">
                {/* Custom circular node */}
                <div className="absolute -left-[36px] top-1.5 w-6 h-6 rounded-full border-3 border-navy bg-sky shadow-[2px_2px_0px_var(--color-navy)] transition-transform duration-200 group-hover:scale-125" />
                <div>
                  <span className="inline-block px-3 py-1 rounded-full border-2 border-navy bg-gold/15 font-display text-sm font-extrabold text-navy shadow-[2px_2px_0px_var(--color-navy)]">
                    {step.year}
                  </span>
                  <p className="mt-3 text-base text-ink/80 font-semibold leading-relaxed">
                    {step.label}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Story Footer CTA */}
      <section className="bg-gradient-to-b from-navy to-[#0b3aa8] py-16 text-center text-cream px-4 border-t-4 border-navy">
        <h2 className="font-display text-3xl font-extrabold bubbly-text-shadow">
          Come taste it yourself
        </h2>
        <p className="mt-2 max-w-sm mx-auto text-cream/80 font-medium">
          Dine-in at Lane 5, Koregaon Park and taste the royal sweetness.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton href="/locations" variant="sky">
            Find Us in Koregaon Park
          </CtaButton>
        </div>
      </section>
    </>
  );
}

