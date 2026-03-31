"use client";

import { GraduationCap, Shield, Award } from "lucide-react";
import { Card, CardBody } from "@heroui/react";

const pillars = [
  {
    Icon: GraduationCap,
    accent: "#fbbf24",
    title: "Dedicated Educators",
    body: "Our teachers are certified early childhood professionals who use proven strategies to help every child find their path to success.",
  },
  {
    Icon: Shield,
    accent: "#818cf8",
    title: "Safe Environment",
    body: "A secure, welcoming facility where children thrive. Safety checks, licensed staff, and a culture of care come first — always.",
  },
  {
    Icon: Award,
    accent: "#34d399",
    title: "Georgia Pre-K Provider",
    body: "Proud to offer the state-funded Georgia Pre-K program, preparing 4–5 year olds for kindergarten at no cost to qualifying families.",
  },
];

export default function WhyAska() {
  return (
    <section className="bg-[#0a1628] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#fbbf24] mb-1">
            Why Families Choose Us
          </p>
          <p className="font-display italic text-xl text-white/50 leading-snug">
            More than childcare —
          </p>
          <h2 className="font-black text-3xl md:text-4xl text-white tracking-tight">
            A Partnership for Growth
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ Icon, accent, title, body }, i) => (
            <Card
              key={title}
              radius="sm"
              className={`bg-white/5 border border-white/10 hover:bg-white/10 transition-colors animate-fade-in-up delay-${(i + 1) * 100}`}
            >
              <CardBody className="p-7">
                <div
                  className="w-11 h-11 rounded-md flex items-center justify-center mb-4"
                  style={{ background: `${accent}20` }}
                >
                  <Icon size={22} style={{ color: accent }} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{body}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
