"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const categories = ["All", "Classrooms", "Transportation"] as const;
type Category = typeof categories[number];

type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
};

const items: GalleryItem[] = [
  { src: "/classrooms/infant-room.webp",     alt: "Infant Room",                        category: "Classrooms" },
  { src: "/classrooms/toddlers-room.webp",   alt: "Toddlers Room",                      category: "Classrooms" },
  { src: "/classrooms/explorers-room.webp",  alt: "Explorers Room (2–2.5 yrs)",         category: "Classrooms" },
  { src: "/classrooms/busy-bees.webp",       alt: "Busy Bees Classroom (2.5–3 yrs)",    category: "Classrooms" },
  { src: "/classrooms/gummy-bears.webp",     alt: "Gummy Bears Room (3–5 yrs)",         category: "Classrooms" },
  { src: "/classrooms/pre-k-room.webp",      alt: "Pre-K Room (5+)",                    category: "Classrooms" },
  { src: "/classrooms/school-age-room.webp", alt: "School Age Room (Afterschool)",      category: "Classrooms" },
  { src: "/classrooms/bus.webp",             alt: "Transportation",                     category: "Transportation" },
];

const slides = items.map((item) => ({ src: item.src, alt: item.alt }));

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <main className="bg-[#fdfaf6] min-h-screen">
      {/* Header */}
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">A Glimpse Inside</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Gallery</h1>
          <p className="text-blue-200 mt-3">See our spaces, our programs, and our community in action.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                active === cat
                  ? "bg-[#0a1628] text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#0a1628]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <button
              key={item.src}
              onClick={() => setLightboxIndex(items.indexOf(item))}
              className="w-full block overflow-hidden rounded-xl group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-bold">{item.alt}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </main>
  );
}
