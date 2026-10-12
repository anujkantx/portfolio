import React from "react";
import { projects } from "@/content/projects";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { ProjectCard } from "../projects/project-card";

export function SelectedWorkSection() {
  const airdose = projects.find((p) => p.slug === "airdose");
  const studyit = projects.find((p) => p.slug === "studyit");
  const supportingProjects = projects.filter(
    (p) => p.slug !== "airdose" && p.slug !== "studyit"
  );

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[var(--border-subtle)]">
      <Container size="wide">
        <SectionHeading
          number="01"
          tag="Engineering Portfolio"
          title="Selected Work & Systems"
          subtitle="Real software products and engineering architectures built from first principles. Explaining the actual problems, system constraints, and trade-offs."
        />

        <div className="space-y-10 md:space-y-12">
          {/* Primary Featured: AirDose */}
          {airdose && (
            <ProjectCard
              project={airdose}
              layoutVariant="primary-featured"
            />
          )}

          {/* Secondary Featured: Studyit */}
          {studyit && (
            <ProjectCard
              project={studyit}
              layoutVariant="secondary-featured"
            />
          )}

          {/* Supporting Systems Grid */}
          {supportingProjects.length > 0 && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                  Exploratory Tooling & Microservices
                </h4>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  0{supportingProjects.length} Projects
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportingProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    layoutVariant="compact"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
