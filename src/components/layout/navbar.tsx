"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { MobileNav } from "./mobile-nav";
import { Container } from "../ui/container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Capabilities" },
    { href: "/#creative", label: "Creative" },
    { href: "/#experience", label: "Journey" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-base)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-5"
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
              aria-label="Anujkant homepage"
            >
              <div className="w-7 h-7 rounded-sm bg-[var(--text-primary)] text-white flex items-center justify-center font-mono text-xs font-semibold tracking-tighter group-hover:bg-[var(--accent)] transition-colors">
                AK
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-medium text-base sm:text-lg tracking-tight text-[var(--text-primary)] leading-none group-hover:text-[var(--accent)] transition-colors">
                  {siteConfig.name}
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--text-muted)] mt-0.5">
                  Engineer & Builder
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-7 lg:gap-9 text-sm"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA action & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--bg-subtle)] rounded-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] group"
              >
                <span>Contact</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 -mr-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-label="Open mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile nav drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
