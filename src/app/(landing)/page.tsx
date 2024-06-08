import { Banner, Categories, Hero, WhyUs } from "@/components/modules/landing";
import Intro from "@/components/modules/landing/intro";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Categories />
      <Banner />
      <WhyUs />
    </>
  );
}
