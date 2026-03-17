import Link from "next/link";

export default function EnrollCta() {
  return (
    <section className="bg-gradient-to-r from-[#0a1628] via-[#0d2147] to-[#0a1628] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Ready to Enroll?
        </h2>
        <p className="text-blue-200 text-lg mb-8">
          Our digital enrollment form takes about 10 minutes. Start your child's journey today.
        </p>
        <Link
          href="/enroll"
          className="btn-shimmer inline-block text-blue-950 font-black text-lg px-10 py-4 rounded-2xl shadow-lg shadow-yellow-400/30 hover:scale-105 transition-transform"
        >
          Start Enrollment →
        </Link>
        <p className="text-blue-400/60 text-sm mt-5">
          Questions? Call us at{" "}
          <a href="tel:4042842327" className="hover:text-blue-200 transition-colors">
            (404) 284-2327
          </a>
        </p>
      </div>
    </section>
  );
}
