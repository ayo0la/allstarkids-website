import { programs } from "@/data/programs";
import ProgramCard from "@/components/program-card";

export default function ProgramsStrip() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 animate-fade-in-up">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#fbbf24] mb-1">
            What We Offer
          </p>
          <p className="font-display italic text-xl text-slate-400 leading-snug">
            Programs for
          </p>
          <h2 className="font-black text-3xl md:text-4xl text-[#0a1628] tracking-tight">
            Every Stage of Childhood
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {programs.map((p, i) => (
            <div key={p.id} className={`animate-fade-in-up delay-${(i + 1) * 100}`}>
              <ProgramCard program={p} compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
