import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/ui/icons";
import { siteConfig } from "@/content/site";
import { Container } from "../ui/container";
import { ScrollToTopButton, CurrentYear } from "./scroll-to-top";

export function Footer() {

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]/40 pt-16 pb-12 mt-20">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand & bio note */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif font-semibold text-lg text-[var(--text-primary)]">
                {siteConfig.name}
              </span>
              <span className="text-[var(--text-muted)] text-sm">/</span>
              <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Engineering software products where technical architecture, applied AI, and visual clarity coalesce.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{siteConfig.availability.label} — {siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#work"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Featured Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  About & Education
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Technical Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/#creative"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Creative Storytelling
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Direct links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Connect
            </h4>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p>
                Direct email:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[var(--text-primary)] font-medium underline underline-offset-4 hover:text-[var(--accent)]"
                >
                  {siteConfig.email}
                </a>
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteConfig.socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[var(--border-default)] rounded-sm hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[var(--border-default)] rounded-sm hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks[2].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[var(--border-default)] rounded-sm hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks[3].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[var(--border-default)] rounded-sm hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <p>© <CurrentYear /> {siteConfig.name}. Designed & engineered with Next.js & TypeScript.</p>
          <ScrollToTopButton />
        </div>
      </Container>
    </footer>
  );
}
