import { setRequestLocale } from "next-intl/server";

import { CoursesSection } from "@/components/home/courses-section";
import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { SuccessesSection } from "@/components/home/successes-section";
import { TeachersSection } from "@/components/home/teachers-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { WhyUsSection } from "@/components/home/why-us-section";
import { BasePageProps } from "@/types/page-props";

const Home = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <CoursesSection />
      <SuccessesSection />
      <TeachersSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  );
};

export default Home;
