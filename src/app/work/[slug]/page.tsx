import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectArchPreview } from "@/components/projects/project-arch-preview";
import { GithubIcon } from "@/components/ui/icons";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Database,
  Layers,
  Server,
  Scale,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Architectural Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Anujkant Portfolio`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container size="default">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-6 pb-10 border-b border-[var(--border-subtle)]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.year}
            </span>
            <Badge variant="accent">{project.status}</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[var(--text-primary)] tracking-tight leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-sans max-w-3xl">
            {project.tagline}
          </p>

          {/* Action Links & Metadata */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="primary"
                size="sm"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                View Repository
              </Button>
            )}
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                external
                variant="outline"
                size="sm"
                iconRight={<ArrowUpRight className="w-4 h-4" />}
              >
                Live Deployment
              </Button>
            )}
            <div className="text-xs font-mono text-[var(--text-muted)] sm:ml-auto">
              Role: <strong className="text-[var(--text-primary)]">{project.ownerRole}</strong>
            </div>
          </div>
        </header>

        {/* Architecture Topology Preview */}
        <section className="my-12">
          <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3 font-semibold">
            System Schematic & Topology
          </h2>
          <div className="rounded-sm overflow-hidden border border-[var(--border-default)] shadow-sm">
            <ProjectArchPreview slug={project.slug} />
          </div>
        </section>

        {/* Narrative Sections */}
        <div className="space-y-12">
          {/* 1. Problem & Motivation */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold">01</span>
              <h2 className="font-serif text-2xl font-medium text-[var(--text-primary)]">
                Problem & Motivation
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* 2. Product Concept & Solution */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold">02</span>
              <h2 className="font-serif text-2xl font-medium text-[var(--text-primary)]">
                Product Concept & Implemented Solution
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </section>

          {/* 3. Detailed Architecture */}
          <section className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold">03</span>
              <h2 className="font-serif text-2xl font-medium text-[var(--text-primary)]">
                Technical Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent)]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>CLIENT LAYER</span>
                </div>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 list-disc list-inside">
                  {project.architecture.client.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent)]">
                  <Server className="w-3.5 h-3.5" />
                  <span>API & BACKEND LAYER</span>
                </div>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 list-disc list-inside">
                  {project.architecture.server.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent-warm)]">
                  <Database className="w-3.5 h-3.5" />
                  <span>DATA & PERSISTENCE</span>
                </div>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 list-disc list-inside">
                  {project.architecture.data.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--text-primary)]">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>INFRASTRUCTURE</span>
                </div>
                <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 list-disc list-inside">
                  {project.architecture.infrastructure.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Engineering Challenges */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold">04</span>
              <h2 className="font-serif text-2xl font-medium text-[var(--text-primary)]">
                Core Engineering Challenges
              </h2>
            </div>
            <div className="space-y-3">
              {project.engineeringChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-sm bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-start gap-3"
                >
                  <AlertCircle className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Trade-Offs & Decisions */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold">05</span>
              <h2 className="font-serif text-2xl font-medium text-[var(--text-primary)]">
                Architectural Trade-Offs
              </h2>
            </div>
            <div className="space-y-3">
              {project.tradeOffs.map((tradeoff, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-3"
                >
                  <Scale className="w-4 h-4 text-[var(--accent-warm)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tradeoff}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Honest Current Status */}
          <section className="space-y-4 pt-6 border-t border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold">06</span>
              <h2 className="font-serif text-2xl font-medium text-[var(--text-primary)]">
                Current Status & Next Iterations
              </h2>
            </div>
            <div className="p-5 rounded-sm bg-[var(--bg-subtle)]/70 border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>{project.currentStatusDetails}</p>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-[var(--accent)] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-[var(--text-primary)] hover:text-[var(--accent)]"
          >
            <span>Discuss this Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </article>
  );
}
