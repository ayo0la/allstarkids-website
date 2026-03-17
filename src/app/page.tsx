import Hero from "@/components/home/hero";
import ProgramsStrip from "@/components/home/programs-strip";
import WhyAska from "@/components/home/why-aska";
import Testimonials from "@/components/home/testimonials";
import EnrollCta from "@/components/home/enroll-cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProgramsStrip />
      <WhyAska />
      <Testimonials />
      <EnrollCta />
    </main>
  );
}
