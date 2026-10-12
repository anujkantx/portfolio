import React from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { ProjectItem } from "@/types/portfolio";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ProjectArchPreview } from "./project-arch-preview";

interface ProjectCardProps {
  project: ProjectItem;
  layoutVariant?: "primary-featured" | "secondary-featured" | "compact";
}

export function ProjectCard({
  project,
  layoutVariant = "primary-featured",
}: ProjectCardProps) {
  if (layoutVariant === "primary-featured") {
    return (
      <article className="group rounded-sm border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 md:p-8 lg:p-10 shadow-sm transition-all duration-300 hover:border-[var(--border-strong)]">
        {/* Top Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="accent">{project.status}</Badge>
          </div>
        </div>

        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
          {/* Left Column: Details & Engineering Story */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--text-primary)] tracking-tight">
                <Link
                  href={`/work/${project.slug}`}
                  className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </Link>
              </h3>
              <p className="mt-2 text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Problem & Solution summary */}
            <div className="space-y-3 p-4 rounded-sm bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm">
              <div>
                <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider block font-semibold mb-1">
                  The Problem
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="pt-2 border-t border-[var(--border-subtle)]">
                <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider block font-semibold mb-1">
                  Engineering Solution
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Challenge Callout */}
            <div className="text-xs text-[var(--text-muted)] space-y-1">
              <span className="font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold">
                Core Engineering Challenge:
              </span>
              <p className="font-mono leading-relaxed text-[var(--text-secondary)]">
                {project.engineeringChallenges[0]}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
              <Button
                href={`/work/${project.slug}`}
                variant="primary"
                size="sm"
                iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Read Architectural Case Study
              </Button>

              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  external
                  variant="outline"
                  size="sm"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                >
                  GitHub Repository
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: High-fidelity Architecture Diagram Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="sticky top-28">
              <ProjectArchPreview slug={project.slug} />
              <div className="mt-2 text-right">
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Live architectural topology representation
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (layoutVariant === "secondary-featured") {
    return (
      <article className="group rounded-sm border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-[var(--border-strong)]">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.year}
            </span>
          </div>
          <Badge variant="accent">{project.status}</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[var(--text-primary)]">
              <Link
                href={`/work/${project.slug}`}
                className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </Link>
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.tagline}
            </p>

            <div className="p-3 bg-[var(--bg-card)] rounded-sm border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
              <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase block font-semibold mb-1">
                Relational Architecture
              </span>
              {project.solution}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-3">
              <Button
                href={`/work/${project.slug}`}
                variant="primary"
                size="sm"
                iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Case Study
              </Button>
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  external
                  variant="outline"
                  size="sm"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                >
                  Code
                </Button>
              )}
            </div>
          </div>

          <div className="md:col-span-5">
            <ProjectArchPreview slug={project.slug} />
          </div>
        </div>
      </article>
    );
  }

  // Compact card layout for supporting projects
  return (
    <article className="group rounded-sm border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[var(--border-strong)]">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
          <span>{project.category}</span>
          <Badge variant="outline">{project.status}</Badge>
        </div>

        <h3 className="text-lg font-serif font-medium text-[var(--text-primary)]">
          <Link
            href={`/work/${project.slug}`}
            className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
          </Link>
        </h3>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1 pt-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
        <Link
          href={`/work/${project.slug}`}
          className="font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1"
        >
          <span>Architecture</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
            aria-label={`${project.title} GitHub repository`}
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="font-mono">GitHub</span>
          </a>
        )}
      </div>
    </article>
  );
}
