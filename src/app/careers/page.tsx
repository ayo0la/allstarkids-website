import Link from "next/link";
import { Users, Bus, Heart } from "lucide-react";

export const metadata = {
  title: "Careers | All Star Kids Academy",
  description: "Join the All Star Kids Academy team. We're hiring teachers and staff in Decatur, GA.",
};

const roles = [
  {
    title: "Teacher (1 Year Olds)",
    icon: Heart,
    accentColor: "#f43f5e",
    description:
      "Provide our children with a solid learning foundation to be prepared for their exciting next step to the 2's.",
    slug: "Teacher (1 Year Olds)",
  },
  {
    title: "Teacher (2 Year Olds)",
    icon: Users,
    accentColor: "#6366f1",
    description:
      "Engage our children in productive ways to keep them prepared for their jump to the 3's.",
    slug: "Teacher (2 Year Olds)",
  },
  {
    title: "Bus Driver",
    icon: Bus,
    accentColor: "#eab308",
    description:
      "Guarantee our children run on an efficient time schedule to get to school on time.",
    slug: "Bus Driver",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-[#fdfaf6] min-h-screen">
      {/* Header */}
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Careers</h1>
          <p className="text-blue-200 mt-3 max-w-xl">
            Help us give every child the start they deserve. We're hiring passionate, dedicated people in Decatur, GA.
          </p>
        </div>
      </section>

      {/* Job listings */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map(({ title, icon: Icon, accentColor, description, slug }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-sm border-t-4 p-8 flex flex-col gap-4"
              style={{ borderColor: accentColor }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${accentColor}18` }}
              >
                <Icon size={24} style={{ color: accentColor }} strokeWidth={2} />
              </div>
              <div>
                <p className="font-extrabold text-[#0a1628] text-lg leading-snug">{title}</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{description}</p>
              <Link
                href={`/contact?message=I%20would%20like%20to%20apply%20for%20the%20${encodeURIComponent(slug)}%20position.`}
                className="inline-block text-center font-black text-sm px-6 py-3 rounded-md transition-[filter] hover:brightness-110"
                style={{ background: accentColor, color: "#fff" }}
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why work here */}
      <section className="bg-[#0a1628] py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-3">Why work at All Star Kids?</h2>
          <p className="text-blue-200 max-w-xl mx-auto mb-8">
            We're more than a daycare — we're a community. Our staff are valued, supported, and part of something that truly matters.
          </p>
          <Link
            href="/contact?message=I%20have%20a%20question%20about%20working%20at%20All%20Star%20Kids%20Academy."
            className="bg-[#fbbf24] text-[#0a1628] font-black text-sm px-8 py-3.5 rounded-md hover:brightness-110 transition-[filter] inline-block"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
