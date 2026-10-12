import React from "react";
import { skillCategories } from "@/content/skills";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Badge } from "../ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[var(--border-subtle)]">
      <Container size="wide">
        <SectionHeading
          number="03"
          tag="Disciplines & Tooling"
          title="Technical Capabilities"
          subtitle="Honest, grounded capabilities derived from actively building full-stack products, mathematical data science coursework, and filmmaking exploration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="rounded-sm border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 sm:p-8 flex flex-col justify-between shadow-sm transition-all hover:border-[var(--border-strong)]"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                  <span className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                    MODULE 0{idx + 1}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {category.skills.length} Capabilities
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--text-primary)] mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-sans">
                  {category.description}
                </p>

                {/* Structured capability list with project context */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-sm bg-[var(--bg-subtle)]/60 border border-[var(--border-subtle)] text-xs flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-[var(--text-primary)] font-sans text-sm sm:text-xs">
                          {skill.name}
                        </span>
                        <p className="text-[var(--text-secondary)] font-mono text-[11px] leading-tight">
                          {skill.context}
                        </p>
                      </div>
                      <Badge
                        variant={skill.level === "Core" ? "accent" : "outline"}
                        className="self-start sm:self-auto shrink-0"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-between">
                <span>Verified in production & projects</span>
                <span className="text-[var(--text-primary)]">No arbitrary % metrics</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
