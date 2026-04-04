import { programs } from "@/data/programs";
import ProgramCard from "@/components/program-card";
import Image from "next/image";

export const metadata = {
  title: "Programs | All Star Kids Academy",
  description: "Explore our programs for ages 1–12: Infant & Toddler, Preschool, Georgia Pre-K, After School, and Summer Camp.",
};

export default function ProgramsPage() {
  return (
    <main className="bg-[#fdfaf6] min-h-screen">
      {/* Page header */}
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Our Programs</h1>
          <p className="text-blue-200 mt-3 max-w-xl">
            From infants to preteens — structured, loving programs designed for every stage of childhood.
          </p>
        </div>
      </section>

      {/* Program cards */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <div key={p.id} className={`animate-fade-in-up delay-${(i + 1) * 100}`}>
              <ProgramCard program={p} />
            </div>
          ))}
        </div>
      </section>

      {/* All Classrooms Gallery */}
      <section className="bg-[#f5f0e8] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-[#0a1628] mb-2">Our Classrooms</h2>
          <p className="text-slate-500 mb-8">Every room is designed with your child's growth and safety in mind.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/classrooms/infant-room.webp",      label: "Infant Room" },
              { src: "/classrooms/toddlers-room.webp",    label: "Toddlers Room" },
              { src: "/classrooms/explorers-room.webp",   label: "Explorers Room (2–2.5 yrs)" },
              { src: "/classrooms/busy-bees.webp",        label: "Busy Bees (2.5–3 yrs)" },
              { src: "/classrooms/gummy-bears.webp",      label: "Gummy Bears (3–5 yrs)" },
              { src: "/classrooms/pre-k-room.webp",       label: "Pre-K Room" },
              { src: "/classrooms/school-age-room.webp",  label: "School Age Room" },
              { src: "/classrooms/bus.webp",              label: "Transportation" },
            ].map(({ src, label }) => (
              <div key={src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={src} alt={label} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold leading-tight">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-slate-100 py-12 px-6 text-center">
        <h2 className="text-2xl font-black text-[#0a1628] mb-2">Ready to get started?</h2>
        <p className="text-slate-500 mb-6">Enrollment takes about 10 minutes — start today.</p>
        <a
          href="/enroll"
          className="bg-[#fbbf24] text-[#0a1628] hover:brightness-110 transition-[filter] inline-block font-black text-base px-8 py-3.5 rounded-md"
        >
          Enroll Now →
        </a>
      </section>
    </main>
  );
}
