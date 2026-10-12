import React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { GraduationCap, Compass, Layers, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]/40">
      <Container size="wide">
        <SectionHeading
          number="02"
          tag="Background & Philosophy"
          title="Engineering & Craft"
          subtitle="Understanding problems, designing resilient architectures, and bringing software to life through engineering rigor and visual narrative."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
            <p className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-snug">
              I believe great products emerge when technical discipline meets clear visual thinking.
            </p>

            <p>
              I am an engineering undergraduate currently pursuing a dual academic path:
              studying <strong className="text-[var(--text-primary)] font-semibold">Computer Science (Artificial Intelligence)</strong> at Galgotias College while simultaneously completing a <strong className="text-[var(--text-primary)] font-semibold">Bachelor of Science in Data Science</strong> at the Indian Institute of Technology (IIT) Madras.
            </p>

            <p>
              Instead of isolating algorithms in lecture halls, I spend my time building real systems. Whether writing asynchronous FastAPI pipelines that ingest real-time geospatial pollution data for AirDose, or modeling relational schemas for Studyit, I care about the end-to-end reality of software: schema design, API boundaries, latency, and interface clarity.
            </p>

            <p>
              Outside pure code, I explore filmmaking, video editing, and visual storytelling. Filmmaking teaches pacing, structure, and audience empathy—principles that translate directly into how I architect user experiences and communicate complex technical concepts.
            </p>

            {/* Guiding Principles */}
            <div className="pt-6 border-t border-[var(--border-subtle)] space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                How I Approach Software
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                  <span className="font-mono text-xs text-[var(--accent)] font-semibold">01 // FIRST PRINCIPLES</span>
                  <h5 className="font-serif font-medium text-[var(--text-primary)] text-sm">Understand the Core Constraint</h5>
                  <p className="text-xs text-[var(--text-muted)] leading-normal">
                    Solve real technical bottlenecks before layering on unnecessary frameworks or abstractions.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5">
                  <span className="font-mono text-xs text-[var(--accent-warm)] font-semibold">02 // COHERENT CRAFT</span>
                  <h5 className="font-serif font-medium text-[var(--text-primary)] text-sm">Engineering Meets Aesthetics</h5>
                  <p className="text-xs text-[var(--text-muted)] leading-normal">
                    Code correctness, thoughtful database indexing, and typographic restraint belong together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Academic Credentials & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-sm border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 shadow-sm">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">
                  Verified Academic Path
                </h3>
              </div>

              <div className="space-y-6">
                {siteConfig.education.map((edu, idx) => (
                  <div
                    key={edu.institution}
                    className="relative pl-5 border-l-2 border-[var(--border-default)] hover:border-[var(--accent)] transition-colors space-y-1"
                  >
                    <span className="font-mono text-[11px] text-[var(--text-muted)] block">
                      {edu.period}
                    </span>
                    <h4 className="font-serif font-medium text-[var(--text-primary)] text-base">
                      {edu.institution}
                    </h4>
                    <p className="text-xs font-semibold text-[var(--accent)] font-mono">
                      {edu.degree} · {edu.field}
                    </p>
                    {edu.details && (
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Complementary creative quote */}
            <div className="p-5 rounded-sm bg-[var(--bg-subtle)]/70 border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <Compass className="w-3.5 h-3.5 text-[var(--accent-warm)]" />
                <span>MULTIDISCIPLINARY PERSPECTIVE</span>
              </div>
              <p className="font-serif italic text-sm text-[var(--text-primary)] leading-relaxed">
                “Software establishes the logical framework; visual storytelling builds the human connection.”
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
