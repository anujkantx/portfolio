"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { siteConfig } from "@/content/site";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] md:hidden animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-subtle)]">
        <span className="font-mono text-sm tracking-widest text-[var(--text-muted)] uppercase">
          Menu
        </span>
        <button
          onClick={onClose}
          type="button"
          aria-label="Close menu"
          className="p-2 -mr-2 rounded-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 flex flex-col justify-center px-8 py-8 space-y-6">
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="group flex items-baseline justify-between text-2xl font-serif font-normal text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
          >
            <span>{link.label}</span>
            <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)]">
              0{index + 1}
            </span>
          </Link>
        ))}
        <div className="pt-6 border-t border-[var(--border-subtle)]">
          <Link
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-white bg-[var(--accent)] rounded-sm hover:bg-[var(--accent-hover)] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </nav>

      {/* Bottom meta info */}
      <div className="px-8 py-6 border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50">
        <p className="text-xs text-[var(--text-muted)] font-mono mb-3">
          {siteConfig.location}
        </p>
        <div className="flex items-center gap-4 text-[var(--text-secondary)]">
          <a
            href={siteConfig.socialLinks[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 hover:text-[var(--text-primary)]"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.socialLinks[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 hover:text-[var(--text-primary)]"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="p-1.5 hover:text-[var(--text-primary)]"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
