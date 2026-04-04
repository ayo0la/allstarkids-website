"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/programs", label: "Programs" },
  { href: "/about",    label: "About" },
  { href: "/gallery",  label: "Gallery" },
  { href: "/contact",  label: "Contact" },
  { href: "/careers",  label: "Careers" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="All Star Kids Academy"
              width={48}
              height={35}
              className="object-contain"
            />
            <span className="hidden sm:block text-sm font-extrabold text-[#0a1628] leading-tight">
              All Star Kids<br />
              <span className="font-normal text-slate-500 text-xs">Academy</span>
            </span>
          </Link>

          {/* Desktop links — absolutely centered */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-base font-semibold text-slate-600 hover:text-[#0a1628] px-4 py-2 rounded-md hover:bg-slate-50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side: desktop CTA + mobile hamburger */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/enroll"
              className="hidden md:inline-block bg-[#fbbf24] text-[#0a1628] font-black text-sm px-5 py-2 rounded-md hover:brightness-110 transition-[filter]"
            >
              Enroll Now →
            </Link>

            {/* Hamburger — aria attrs preserved for Jest tests */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden flex flex-col gap-1.5 p-2 ml-2"
            >
              <span className={`block w-6 h-0.5 bg-slate-700 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-slate-700 transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-slate-700 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile menu — aria label preserved for Jest tests */}
      {open && (
        <nav aria-label="Mobile menu" className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-1 sticky top-16 z-40">
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
            className="block mt-2 text-center bg-[#fbbf24] text-[#0a1628] font-black text-base px-5 py-3 rounded-md hover:brightness-110 transition-[filter]"
          >
            Enroll Now →
          </Link>
        </nav>
      )}
    </>
  );
}
