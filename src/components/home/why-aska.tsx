const pillars = [
  {
    icon: "👨‍🏫",
    title: "Dedicated Educators",
    body: "Our teachers are certified early childhood professionals who use proven strategies to help every child find their path to success.",
  },
  {
    icon: "🛡️",
    title: "Safe Environment",
    body: "A secure, welcoming facility where children thrive. Safety checks, licensed staff, and a culture of care come first — always.",
  },
  {
    icon: "🎓",
    title: "Georgia Pre-K Provider",
    body: "Proud to offer the state-funded Georgia Pre-K program, preparing 4–5 year olds for kindergarten at no cost to qualifying families.",
  },
];

export default function WhyAska() {
  return (
    <section className="bg-[#0a1628] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Why All Star Kids?</h2>
          <p className="text-blue-300 max-w-lg mx-auto">
            We don't just watch your children — we partner with you to help them grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors animate-fade-in-up delay-${(i + 1) * 100}`}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-extrabold text-white mb-2">{p.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
