import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CreativeWorkSection } from "@/components/sections/creative-work-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <AboutSection />
      <SkillsSection />
      <CreativeWorkSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
