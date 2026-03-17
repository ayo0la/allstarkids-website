import type { Program } from "@/data/programs";
import Link from "next/link";

export default function ProgramCard({ program, compact = false }: { program: Program; compact?: boolean }) {
  return (
    <div className={`${program.color} border rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-200 ${compact ? "" : "flex flex-col gap-3"}`}>
      <div className="text-3xl mb-1">{program.iconEmoji}</div>
      <div>
        <p className="font-extrabold text-[#0a1628] text-base">{program.name}</p>
        <p className="text-xs text-slate-500 font-semibold mt-0.5">{program.ages}</p>
      </div>
      {!compact && (
        <>
          <p className="text-sm text-slate-600 leading-relaxed">{program.description}</p>
          <p className="text-xs text-slate-400 font-medium">{program.schedule}</p>
        </>
      )}
      {compact && (
        <Link href="/programs" className="text-xs font-bold text-[#0a1628] hover:underline mt-1 block">
          Learn more →
        </Link>
      )}
    </div>
  );
}
