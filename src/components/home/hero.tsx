"use client";

import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, Star, Lock } from "lucide-react";

const badges = [
  { icon: BadgeCheck, label: "Licensed & Accredited" },
  { icon: Star,       label: "Georgia Pre-K Provider", gold: true },
  { icon: Lock,       label: "Secure Enrollment" },
];

export default function Hero() {
  return (
    <section className="bg-[#0a1628] relative overflow-hidden flex min-h-[480px] md:min-h-[520px]">
      {/* Left — text content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-14 py-16 max-w-2xl">
        <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#fbbf24] mb-5 block animate-fade-in-up">
          Premier Early Learning · Decatur, GA
        </span>

        <h1 className="mb-5 animate-fade-in-up delay-100">
          <span className="block font-display italic text-3xl md:text-4xl lg:text-5xl text-white/75 leading-snug">
            Where Every Child
          </span>
          <span className="block font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            Becomes a Star
          </span>
        </h1>

        <p className="text-base text-white/55 leading-relaxed max-w-md mb-8 animate-fade-in-up delay-200">
          Decatur's premier early learning academy — providing loving, structured
          care and education from infancy through age 12.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up delay-300">
          <Link
            href="/enroll"
            className="bg-[#fbbf24] text-[#0a1628] font-black text-base px-8 py-3.5 rounded-md hover:brightness-110 transition-[filter] text-center"
          >
            Start Enrollment
          </Link>
          <Link
            href="/programs"
            className="border border-white/30 text-white font-bold text-base px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors text-center"
          >
            Explore Programs
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-2 animate-fade-in-up delay-400">
          {badges.map(({ icon: Icon, label, gold }) => (
            <span
              key={label}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border ${
                gold
                  ? "bg-[#fbbf24]/10 border-[#fbbf24]/35 text-[#fbbf24]"
                  : "bg-white/5 border-white/12 text-white/65"
              }`}
            >
              <Icon size={12} strokeWidth={2.5} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Right — photo with gradient overlay */}
      <div className="hidden md:block flex-1 relative">
        <Image
          src="/hero.jpg"
          alt="All Star Kids Academy facility"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient: dark on the left fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/70 to-[#0a1628]/10" />
      </div>
    </section>
  );
}
