import { Navigation } from "@/components/Navigation";
import { HeroNew } from "@/components/HeroNew";
import { Hero } from "@/components/Hero";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { BackToTop } from "@/components/BackToTop";

export const HeaderSection = () => (
  <>
    <ScrollIndicator />
    <Navigation />
    <HeroNew />
  </>
);

export const AboutSection = () => (
  <Hero />
);

export const UtilityComponents = () => (
  <>
    <BackToTop />
  </>
);