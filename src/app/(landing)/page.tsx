import React from "react";
import {
  Banner,
  Categories,
  HeroV2,
  TopSelling,
  WhyUs,
} from "@/components/modules/landing";
import HeroFormCenterAlignedWithAForm from "@/components/kitty/kitty-cta";
import { KittyHero } from "@/components/kitty";
import HeroSectionCentredWithImage from "@/components/kitty/kitty-hero-2";
import HeroSectionGradientBackground from "@/components/kitty/kitty-hero-3";
import HeroSectionImageWithReviews from "@/components/kitty/kitty-hero-4";
import HeroWithTwoCOlAndCTA from "@/components/kitty/kitty-hero-6";

export default function HomePage() {
  return (
    <>
      <HeroWithTwoCOlAndCTA />
      {/* <Categories />
      <Banner />
      <TopSelling />
      <WhyUs />
      <HeroFormCenterAlignedWithAForm /> */}
    </>
  );
}
