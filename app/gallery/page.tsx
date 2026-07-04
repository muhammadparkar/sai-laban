"use client";

import { useState } from "react";

type Filter = "All" | "Store" | "Desserts" | "Events";

const FILTERS: Filter[] = ["All", "Store", "Desserts", "Events"];

const PHOTOS: { id: number; category: Exclude<Filter, "All"> }[] = [
  { id: 1, category: "Store" },
  { id: 2, category: "Desserts" },
  { id: 3, category: "Events" },
  { id: 4, category: "Desserts" },
  { id: 5, category: "Store" },
  { id: 6, category: "Desserts" },
  { id: 7, category: "Events" },
  { id: 8, category: "Store" },
  { id: 9, category: "Desserts" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = PHOTOS.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      {/* Title Header */}
      <section className="bg-gradient-to-b from-[#0b3aa8] to-navy px-4 pt-32 pb-16 text-center text-cream sm:px-6 md:pt-40">
        <p className="font-display uppercase tracking-widest text-sm font-extrabold text-gold bubbly-text-shadow">
          Taste the creamy hype
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl bubbly-text-shadow">Gallery</h1>
      </section>
      {/* Main Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Gallery filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-11 rounded-full px-5 py-2 font-display text-sm font-extrabold transition-all duration-200 cursor-pointer border-3 border-navy shadow-[3px_3px_0px_var(--color-navy)] flex items-center ${
                filter === f
                  ? "bg-navy text-cream shadow-[3px_3px_0px_var(--color-sky)] -translate-y-0.5"
                  : "bg-white text-navy hover:bg-navy/5 hover:-translate-y-0.5 active:translate-y-0.5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Photos grid */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {visible.map((photo) => (
            <div
              key={photo.id}
              className="group aspect-square cursor-pointer border-3 border-navy bg-white p-2.5 shadow-[4px_4px_0px_var(--color-navy)] rounded-2xl overflow-hidden hover:scale-102 hover:-rotate-1 transition-all duration-200"
            >
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-navy/10 via-sky/15 to-gold/15 border border-navy/5 relative overflow-hidden flex items-end justify-start p-3">
                <span className="rounded-full border-2 border-navy bg-navy/85 px-3 py-1 text-xs font-display font-extrabold text-cream shadow-[1px_1px_0px_var(--color-sky)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Link */}
        <div className="mt-14 text-center">
          <a
            href="https://instagram.com/sai_laban"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-bold text-sky hover:text-navy transition-colors duration-200 cursor-pointer"
          >
            See more @sai_laban →
          </a>
        </div>
      </section>
    </>
  );
}

