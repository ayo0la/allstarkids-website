"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/programs", label: "Programs" },
  { href: "/about",    label: "About" },
  { href: "/gallery",  label: "Gallery" },
  { href: "/contact",  label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.webp" alt="All Star Kids Academy" width={48} height={35} className="object-contain" />
          <span className="hidden sm:block text-sm font-extrabold text-[#0a1628] leading-tight">
            All Star Kids<br />
            <span className="font-normal text-slate-500 text-xs">Academy</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-slate-600 hover:text-[#0a1628] px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enroll"
            className="ml-2 btn-shimmer text-blue-950 font-black text-sm px-5 py-2 rounded-xl shadow-md shadow-yellow-200 hover:scale-105 transition-transform"
          >
            Enroll Now →
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-slate-700 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile menu" className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-slate-700 py-2 hover:text-[#0a1628] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/enroll"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center btn-shimmer text-blue-950 font-black text-base px-5 py-3 rounded-xl"
          >
            Enroll Now →
          </Link>
        </nav>
      )}
    </header>
  );
}
