import React from "react";
import { experienceItems } from "@/content/experience";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Badge } from "../ui/badge";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[var(--border-subtle)]">
      <Container size="wide">
        <SectionHeading
          number="05"
          tag="Timeline & Milestones"
          title="Academic Path & Engineering Sprints"
          subtitle="A transparent overview of formal education, independent product engineering, and hackathon prototypes."
        />

        <div className="space-y-6 max-w-4xl mx-auto">
          {experienceItems.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-sm border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-sm transition-all hover:border-[var(--border-strong)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider block mb-1">
                    {item.type}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[var(--text-secondary)] font-sans mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[var(--text-muted)] shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
