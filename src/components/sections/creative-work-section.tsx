import React from "react";
import { creativeProjects } from "@/content/creative";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Badge } from "../ui/badge";
import { Film, Clapperboard, Sparkles, Video, ArrowUpRight } from "lucide-react";

export function CreativeWorkSection() {
  return (
    <section id="creative" className="py-20 md:py-28 border-b border-[var(--border-subtle)] bg-[var(--dark-surface)] text-[var(--dark-text)]">
      <Container size="wide">
        {/* Dark-themed editorial section heading */}
        <div className="mb-12 md:mb-16 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider">
              04
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-medium">
              Cinema & Storytelling
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium tracking-tight text-neutral-100">
            Filmmaking, Editing & Visual Direction
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-400 font-normal max-w-2xl leading-relaxed">
            Storytelling is not a sideline—it is the lens through which I frame software and human experiences. Both disciplines require rhythm, structural economy, and attention to every cut.
          </p>

          <div className="mt-6 h-[1px] w-full bg-neutral-800" />
        </div>

        {/* Film-strip / Editorial Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {creativeProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-sm border border-neutral-800 bg-neutral-900/60 p-6 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900"
            >
              <div>
                {/* Film frame header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-amber-400" />
                    <span>SCENE 0{idx + 1}</span>
                  </div>
                  <span className="text-[10px] uppercase text-neutral-500">
                    {project.aspectRatio || "16:9"}
                  </span>
                </div>

                {/* Abstract cinematic card representation */}
                <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-black/80 border border-neutral-800 mb-5 flex items-center justify-center p-4">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="text-center space-y-1 relative z-10">
                    <Clapperboard className="w-6 h-6 mx-auto text-amber-400/80 mb-2" />
                    <span className="text-xs font-serif italic text-neutral-300 block">
                      {project.medium}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      {project.role}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-medium text-neutral-100 mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-4">
                  {project.description}
                </p>

                {/* Themes */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.themes.map((theme) => (
                    <span
                      key={theme}
                      className="px-2 py-0.5 rounded-sm bg-neutral-800/80 border border-neutral-700/60 text-[10px] font-mono text-neutral-300"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>{project.year}</span>
                <span className="text-amber-400/80">{project.statusText}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Narrative Connection Note */}
        <div className="mt-12 p-6 rounded-sm border border-neutral-800 bg-neutral-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif text-neutral-200 text-sm sm:text-base font-medium">
              The Intersection of Code and Cinema
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
              In filmmaking, an unmotivated camera movement weakens the scene. In software, unmotivated complexity slows the system. The same pursuit of clarity applies to both.
            </p>
          </div>
          <span className="font-mono text-xs text-amber-400 shrink-0 uppercase tracking-wider">
            ANUJ.FILM // ARCHIVE
          </span>
        </div>
      </Container>
    </section>
  );
}
