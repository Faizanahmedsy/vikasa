import HeroFormCenterAlignedWithAForm from "@/components/kitty/kitty-cta";
import { Categories, Hero, WhyUs } from "@/components/modules/landing";
import Intro from "@/components/modules/landing/intro";
import Testimonials from "@/components/modules/landing/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyUs />
      <Categories />
      <Testimonials />
      <HeroFormCenterAlignedWithAForm />
    </>
  );
}
