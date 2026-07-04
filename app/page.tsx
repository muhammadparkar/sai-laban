import Link from "next/link";
import Image from "next/image";
import CtaButton from "./components/CtaButton";
import Mascot from "./components/Mascot";
import InstagramFeed from "./components/InstagramFeed";

const MENU_TEASERS = [
  {
    name: "Classic Laban Bowl",
    note: "Cold-set, cardamom-kissed",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Konafa Crown",
    note: "Crisp shreds, warm cheese pull",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Royal Pistachio Box",
    note: "Gifting-ready, foil detail",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Mango Malai Swirl",
    note: "Seasonal, soft-serve style",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b3aa8] via-[#0a2f8f] to-navy min-h-screen flex items-center pt-28 pb-16 md:pt-20">
        {/* creamy drips from top — melting laban */}
        <svg
          className="pointer-events-none absolute top-0 left-0 w-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L1440,0 L1440,40 C1400,40 1390,90 1350,90 C1310,90 1310,40 1270,40 C1230,40 1235,120 1190,120 C1145,120 1150,40 1110,40 C1070,40 1075,75 1035,75 C995,75 1000,40 960,40 C920,40 925,105 880,105 C835,105 840,40 800,40 C760,40 765,85 725,85 C685,85 690,40 650,40 C610,40 615,130 565,130 C515,130 525,40 485,40 C445,40 450,70 410,70 C370,70 375,40 335,40 C295,40 300,95 255,95 C210,95 215,40 175,40 C135,40 140,80 100,80 C60,80 65,40 25,40 L0,40 Z"
            fill="rgba(251,246,236,0.07)"
          />
          <path
            d="M0,0 L1440,0 L1440,25 C1410,25 1405,60 1370,60 C1335,60 1335,25 1300,25 C1265,25 1268,85 1228,85 C1188,85 1190,25 1155,25 C1120,25 1122,50 1087,50 C1052,50 1054,25 1019,25 C984,25 986,70 948,70 C910,70 912,25 877,25 C842,25 844,55 809,55 C774,55 776,25 741,25 C706,25 708,95 665,95 C622,95 628,25 593,25 C558,25 560,45 525,45 C490,45 492,25 457,25 C422,25 424,65 386,65 C348,65 350,25 315,25 C280,25 282,52 247,52 C212,52 214,25 179,25 C144,25 146,58 108,58 C70,58 72,25 37,25 L0,25 Z"
            fill="rgba(0,173,241,0.12)"
          />
        </svg>
        {/* soft glow blobs */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl animate-glow-pulse"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]"
          aria-hidden="true"
        />
        {/* floating laban swirls */}
        <svg
          className="pointer-events-none absolute left-[8%] top-[30%] h-14 w-14 opacity-15 animate-float"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <path d="M32 8c-8 0-14 5-14 12 0 5 4 9 9 9-3 2-5 5-5 9 0 6 5 11 12 11s12-5 12-11c0-4-2-7-5-9 5 0 9-4 9-9 0-7-6-12-14-12h-4Z" stroke="#fbf6ec" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg
          className="pointer-events-none absolute right-[12%] top-[18%] h-10 w-10 opacity-20 animate-float-delayed"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <path d="M32 12c10 0 16 6 16 13 0 6-5 10-10 10 3 2 4 5 4 8 0 6-4 10-10 10s-10-4-10-10c0-3 1-6 4-8-5 0-10-4-10-10 0-7 6-13 16-13Z" stroke="#d9a94e" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg
          className="pointer-events-none absolute left-[15%] bottom-[18%] h-8 w-8 opacity-15 animate-float"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="20" stroke="#00adf1" strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round" />
        </svg>
        <div className="relative mx-auto w-full flex max-w-7xl flex-col-reverse gap-6 px-4 sm:px-6 md:min-h-[calc(100vh-8rem)] md:flex-row md:items-end md:justify-between md:gap-4 md:pb-4">
          {/* Bottom-left content stack */}
          <div className="text-left max-w-3xl">
            <p className="animate-fade-up [animation-delay:60ms] font-display uppercase tracking-[0.3em] text-xs sm:text-sm font-extrabold text-gold">
              India&rsquo;s Finest Egyptian Desserts 🇪🇬
            </p>
            <h1 className="animate-fade-up [animation-delay:120ms] mt-4 logo-text text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Happiness in
              <br />
              every scoop.
            </h1>
            <p className="animate-fade-up [animation-delay:240ms] mt-6 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-cream/70">
              Premium · Authentic · Creamy · Indulgent
            </p>
            <p className="animate-fade-up [animation-delay:300ms] mt-4 max-w-lg border-l-3 border-gold/70 pl-4 text-cream/90 text-base md:text-lg font-medium leading-relaxed">
              Crafted with love, served with sweetness — Egyptian laban, konafa
              &amp; creamy desserts, now open in Koregaon Park, Pune.{" "}
              <span className="font-royal italic text-gold">A Royal Taste of Sweetness 👑</span>
            </p>
            <div className="animate-fade-up [animation-delay:360ms] mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <CtaButton href="/locations" variant="sky">
                Find Us in Koregaon Park
              </CtaButton>
              <CtaButton href="/menu" variant="outline">
                View Menu
              </CtaButton>
            </div>
          </div>

          {/* Mascot right — absolute on desktop so content layout stays fixed */}
          <div className="animate-fade-up [animation-delay:80ms] relative flex justify-center items-center self-center shrink-0 h-[22rem] w-[22rem] sm:h-[28rem] sm:w-[28rem] md:absolute md:-right-10 md:-bottom-24 lg:-right-14 lg:-bottom-28 md:h-[40rem] md:w-[40rem] lg:h-[46rem] lg:w-[46rem]">
            {/* glow behind mascot */}
            <div
              className="animate-glow-pulse pointer-events-none absolute inset-6 rounded-full bg-sky/40 blur-3xl"
              aria-hidden="true"
            />
            {/* sparkle accents */}
            <span className="absolute top-6 right-10 h-3 w-3 rounded-full bg-gold animate-float" aria-hidden="true" />
            <span className="absolute bottom-10 left-6 h-2.5 w-2.5 rounded-full bg-cream/80 animate-float-delayed" aria-hidden="true" />
            <span className="absolute top-1/2 -left-2 h-2 w-2 rounded-full bg-sky animate-float" aria-hidden="true" />

            <Mascot
              pose="run"
              variant="sticker"
              interactive
              className="relative h-full w-full"
            />
          </div>
        </div>
      </section>
      {/* Fan Favorites Section */}
      <section className="bg-grid py-20 border-b-3 border-navy/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div data-reveal className="flex items-end justify-between gap-4 border-b-3 border-navy pb-4">
            <h2 className="font-display text-3xl font-extrabold text-navy bubbly-text-shadow-white">
              Fan Favorites
            </h2>
            <Link
              href="/menu"
              className="font-display text-sm font-bold text-sky hover:text-navy transition-colors duration-200 cursor-pointer flex items-center gap-1 hover:translate-x-1 transition-transform"
            >
              View Full Menu →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MENU_TEASERS.map((item, idx) => (
              <div
                key={item.name}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${idx * 100}ms` }}
                className="clay-card p-4 bg-white flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="aspect-square rounded-2xl border-2 border-navy overflow-hidden relative shadow-[2px_2px_0px_var(--color-navy)]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-4 font-display text-lg font-extrabold text-navy group-hover:text-sky transition-colors duration-200">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-ink/75 font-medium leading-normal">
                    {item.note}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-2 border-dashed border-navy/10 flex justify-between items-center text-xs font-bold text-navy/55">
                  <span>Dessert</span>
                  <span className="text-burgundy uppercase">Premium</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Story + Grand Opening — side by side */}
      <section className="bg-cream py-16 px-4 bg-grid">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-stretch">
          {/* Story Preview */}
          <div data-reveal className="clay-card bg-cream p-8 md:p-10 text-center flex flex-col justify-center">
            <p className="font-royal italic text-2xl md:text-3xl text-burgundy leading-relaxed">
              &ldquo;A recipe carried across generations, now finding a new home
              in Pune.&rdquo;
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton href="/our-story" variant="burgundy">
                Our Story →
              </CtaButton>
            </div>
          </div>

          {/* Grand Opening + Map */}
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }} className="clay-card-navy p-6 md:p-8 text-cream text-center md:text-left flex flex-col">
            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-gold/40 bg-gold/10 font-display text-xs font-bold uppercase tracking-wider text-gold">
                Grand Opening · Now Open
              </span>
              <h3 className="mt-3 font-display text-3xl font-extrabold bubbly-text-shadow">
                Koregaon Park, Pune
              </h3>
              <p className="mt-2 text-cream/90 font-medium">
                Lane 5, North Main Road · Daily 12pm – 11pm
              </p>
            </div>
            <div className="mt-6 flex-1 min-h-56 rounded-2xl border-2 border-cream overflow-hidden shadow-[4px_4px_0px_var(--color-sky)]">
              <iframe
                title="Sai Laban location on Google Maps — Koregaon Park, Pune"
                src="https://maps.google.com/maps?q=Sai+Laban+Koregaon+Park+Pune&z=15&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Instagram/Social Section */}
      <section className="bg-grid py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div data-reveal className="flex items-end justify-between gap-4 border-b-3 border-navy pb-4">
            <h2 className="font-display text-3xl font-extrabold text-navy bubbly-text-shadow-white">
              @sai_laban
            </h2>
            <a
              href="https://instagram.com/sai_laban"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-bold text-sky hover:text-navy transition-colors duration-200 cursor-pointer"
            >
              View Gallery →
            </a>
          </div>
          <InstagramFeed />
        </div>
      </section>
    </>
  );
}

