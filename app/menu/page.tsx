import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "../components/CtaButton";

export const metadata: Metadata = {
  title: "Menu — Sai Laban",
  description: "Laban bowls, konafa, dessert boxes and seasonal specials.",
};

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  items: Product[];
}

const CATEGORIES: Category[] = [
  {
    id: "laban-bowls",
    name: "Laban Bowls",
    items: [
      {
        name: "Classic Laban Bowl",
        description: "Cold-set laban, cardamom, honeyed pistachio dust",
        price: "₹220",
        image: "/classic_laban_bowl.png",
      },
      {
        name: "Rose Saffron Laban",
        description: "Saffron-steeped laban, rose petal, silver foil",
        price: "₹260",
        image: "/classic_laban_bowl.png",
      },
      {
        name: "Date Caramel Laban",
        description: "Medjool date caramel swirled through cold laban",
        price: "₹240",
        image: "/classic_laban_bowl.png",
      },
    ],
  },
  {
    id: "konafa",
    name: "Konafa",
    items: [
      {
        name: "Konafa Crown",
        description: "Crisp shredded pastry, warm cheese pull, syrup",
        price: "₹320",
        image: "/konafa_crown.png",
      },
      {
        name: "Chocolate Konafa",
        description: "Molten chocolate core, toasted kunafa shell",
        price: "₹340",
        image: "/konafa_crown.png",
      },
      {
        name: "Pistachio Konafa Cup",
        description: "Single-serve cup, crushed pistachio, gold dust",
        price: "₹180",
        image: "/konafa_crown.png",
      },
    ],
  },
  {
    id: "dessert-boxes",
    name: "Dessert Boxes",
    items: [
      {
        name: "Royal Pistachio Box",
        description: "6-piece gifting box, foil-detailed, ribbon-tied",
        price: "₹650",
        image: "/royal_pistachio_box.png",
      },
      {
        name: "Konafa Sampler",
        description: "4 mini konafa flavors, shareable box",
        price: "₹480",
        image: "/royal_pistachio_box.png",
      },
    ],
  },
  {
    id: "seasonal",
    name: "Seasonal",
    items: [
      {
        name: "Mango Malai Swirl",
        description: "Alphonso mango, soft-serve style, summer only",
        price: "₹210",
        image: "/mango_malai_swirl.png",
      },
      {
        name: "Winter Warm Konafa",
        description: "Cinnamon-spiced, served warm, limited run",
        price: "₹280",
        image: "/konafa_crown.png",
      },
    ],
  },
];


export default function MenuPage() {
  return (
    <>
      {/* Title Header */}
      <section className="bg-gradient-to-b from-[#0b3aa8] to-navy px-4 pt-32 pb-16 text-center text-cream sm:px-6 md:pt-40">
        <p className="font-display uppercase tracking-widest text-sm font-extrabold text-gold bubbly-text-shadow">
          A Royal Taste of Sweetness
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl bubbly-text-shadow">
          The Menu
        </h1>
      </section>

      {/* Categories bar */}
      <nav
        aria-label="Menu categories"
        className="flex gap-3 overflow-x-auto bg-cream px-4 py-5 border-b-3 border-navy/15 sm:px-6 justify-start md:justify-center scrollbar-none"
      >
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="min-h-11 shrink-0 rounded-full border-3 border-navy bg-white px-5 py-2 font-display text-sm font-extrabold text-navy transition-all duration-200 hover:bg-sky hover:-translate-y-0.5 active:translate-y-0.5 shadow-[3px_3px_0px_var(--color-navy)] hover:shadow-[5px_5px_0px_var(--color-navy)] cursor-pointer flex items-center"
          >
            {cat.name}
          </a>
        ))}
      </nav>

      {CATEGORIES.map((cat, idx) => (
        <section 
          key={cat.id} 
          id={cat.id} 
          className="scroll-mt-28 py-16 bg-grid border-b-3 border-navy/5"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex items-center gap-3 border-b-3 border-navy pb-3">
              <h2 className="font-display text-3xl font-extrabold text-navy bubbly-text-shadow-white">
                {cat.name}
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item) => (
                <div 
                  key={item.name} 
                  className="clay-card p-5 bg-white flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-square rounded-2xl border-2 border-navy overflow-hidden relative shadow-[2px_2px_0px_var(--color-navy)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <p className="font-display text-lg font-extrabold text-navy group-hover:text-sky transition-colors duration-200">
                        {item.name}
                      </p>
                      <span className="inline-block px-3 py-1 rounded-full border-2 border-navy bg-gold/15 font-display text-sm font-extrabold text-navy shadow-[2px_2px_0px_var(--color-navy)] shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink/75 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t-2 border-dashed border-navy/10 flex justify-between items-center text-xs font-bold text-navy/40">
                    <span>Traditional Recipe</span>
                    <span className="text-[#00adf1]">Best Seller</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA section */}
      <section className="bg-gradient-to-b from-navy to-[#0b3aa8] py-16 text-center text-cream px-4 border-t-4 border-navy">
        <h2 className="font-display text-3xl font-extrabold bubbly-text-shadow">
          Ready for the hype?
        </h2>
        <p className="mt-2 max-w-sm mx-auto text-cream/80 font-medium">
          Dine-in with us in Koregaon Park or place a pre-order now.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <CtaButton href="/contact" variant="sky">
            Order for Pickup
          </CtaButton>
          <CtaButton href="/locations" variant="outline">
            Visit Us
          </CtaButton>
        </div>
      </section>
    </>
  );
}

