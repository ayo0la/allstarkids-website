"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="bg-[#f5f0e8] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#fbbf24] mb-1">
            Family Voices
          </p>
          <p className="font-display italic text-xl text-slate-400 leading-snug">
            Don&apos;t just take our word for it —
          </p>
          <h2 className="font-black text-3xl md:text-4xl text-[#0a1628] tracking-tight">
            What Parents Say
          </h2>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] min-w-0 px-4">
                <div className="bg-white rounded-md p-8 shadow-sm text-center">
                  <div className="flex justify-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-700 font-medium leading-relaxed mb-5 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm font-bold text-[#0a1628]">— {t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
