"use client";

import Link from "next/link";

export default function EnrollCta() {
  return (
    <section className="bg-gradient-to-r from-[#0a1628] via-[#0d2147] to-[#0a1628] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#fbbf24] mb-2">
          Take the Next Step
        </p>
        <p className="font-display italic text-2xl text-white/60 leading-snug mb-1">
          Your child&apos;s journey starts here —
        </p>
        <h2 className="font-black text-3xl md:text-4xl text-white tracking-tight mb-4">
          Ready to Enroll?
        </h2>
        <p className="text-white/55 text-lg mb-8">
          Our digital enrollment form takes about 10 minutes.
        </p>
        <Link
          href="/enroll"
          className="inline-block bg-[#fbbf24] text-[#0a1628] font-black text-lg px-10 py-4 rounded-md hover:brightness-110 transition-[filter]"
        >
          Start Enrollment
        </Link>
        <p className="text-white/35 text-sm mt-5">
          Questions? Call us at{" "}
          <a href="tel:4042842327" className="hover:text-white/70 transition-colors">
            (404) 284-2327
          </a>
        </p>
      </div>
    </section>
  );
}
