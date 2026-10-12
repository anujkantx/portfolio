import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Code, Database, Sparkles, Layers } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "../ui/container";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[var(--border-subtle)]">
      {/* Background architectural pattern */}
      <div className="absolute inset-0 editorial-grid opacity-35 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Identity */}
          <div className="lg:col-span-7 space-y-6">
            {/* Meta indicator tag */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--bg-subtle)] border border-[var(--border-default)] text-xs font-mono text-[var(--text-secondary)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {siteConfig.availability.label}
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-[var(--text-muted)]">
                {siteConfig.location}
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-normal tracking-tight text-[var(--text-primary)] leading-[1.12]">
                Turning complex technical ideas into software people actually use.
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl font-sans">
                {siteConfig.subheadline}
              </p>
            </div>

            {/* Focus Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="outline">Software Engineering</Badge>
              <Badge variant="outline">Applied Machine Learning</Badge>
              <Badge variant="outline">FastAPI & Systems</Badge>
              <Badge variant="outline">Visual Storytelling</Badge>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button
                href="#work"
                variant="primary"
                size="md"
                iconRight={<ArrowDown className="w-3.5 h-3.5" />}
              >
                Explore Selected Work
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="md"
              >
                Get In Touch
              </Button>
              {siteConfig.resumeUrl && (
                <Button
                  href={siteConfig.resumeUrl}
                  external
                  variant="ghost"
                  size="md"
                  iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Resume
                </Button>
              )}
            </div>

            {/* Verified Academic Badge */}
            <div className="pt-4 border-t border-[var(--border-subtle)] max-w-xl">
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[var(--text-secondary)]">
                <div className="border-l-2 border-[var(--accent)] pl-2.5">
                  <span className="block text-[var(--text-muted)] text-[10px] uppercase">Engineering</span>
                  <span className="font-semibold text-[var(--text-primary)]">B.Tech CSE (AI)</span>
                  <span className="block text-[var(--text-muted)]">GCET · 2024–2028</span>
                </div>
                <div className="border-l-2 border-[var(--accent-warm)] pl-2.5">
                  <span className="block text-[var(--text-muted)] text-[10px] uppercase">Data Science</span>
                  <span className="font-semibold text-[var(--text-primary)]">B.S Data Science</span>
                  <span className="block text-[var(--text-muted)]">IIT Madras · 2024–2028</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Art-Directed Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative editorial frame */}
              <div className="relative rounded-sm border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 shadow-lg shadow-black/[0.03]">
                {/* Visual header */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                  <span>FIGURE 01 // BUILDER PROFILE</span>
                  <span className="text-[var(--accent)] font-semibold">ANUJ.DEV</span>
                </div>

                {/* Profile Image with authentic photo */}
                <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-sm bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                  <Image
                    src="/images/profile/anuj.png"
                    alt="Anujkant — Software Engineer & Multidisciplinary Builder"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating caption overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-white/95 backdrop-blur-sm border border-[var(--border-default)] rounded-sm text-xs shadow-sm">
                    <p className="font-serif font-medium text-[var(--text-primary)] leading-tight">
                      Anujkant
                    </p>
                    <p className="text-[11px] text-[var(--text-secondary)] font-mono mt-0.5">
                      Systems, AI & Product Thinking
                    </p>
                  </div>
                </div>

                {/* Technical metadata row */}
                <div className="mt-3 grid grid-cols-3 gap-2 pt-2 border-t border-[var(--border-subtle)] text-center text-[10px] font-mono">
                  <div className="p-1.5 rounded-sm bg-[var(--bg-subtle)]">
                    <span className="text-[var(--text-muted)] block">FOCUS</span>
                    <span className="font-semibold text-[var(--text-primary)]">Full-Stack</span>
                  </div>
                  <div className="p-1.5 rounded-sm bg-[var(--bg-subtle)]">
                    <span className="text-[var(--text-muted)] block">APPLIED</span>
                    <span className="font-semibold text-[var(--text-primary)]">AI / ML</span>
                  </div>
                  <div className="p-1.5 rounded-sm bg-[var(--bg-subtle)]">
                    <span className="text-[var(--text-muted)] block">MEDIUM</span>
                    <span className="font-semibold text-[var(--text-primary)]">Cinema</span>
                  </div>
                </div>
              </div>

              {/* Offset decorative accent backdrop */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[var(--border-strong)] rounded-sm -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
