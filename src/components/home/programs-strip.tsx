import { programs } from "@/data/programs";
import ProgramCard from "@/components/program-card";

export default function ProgramsStrip() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] mb-2">Our Programs</h2>
          <p className="text-slate-500">Ages 1 through 12 — something for every stage.</p>
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
