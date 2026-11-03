"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Menu } from "lucide-react";
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
    { href: "/#work", label: "WORK" },
    { href: "/#about", label: "ABOUT" },
    { href: "/#skills", label: "CAPABILITIES" },
    { href: "/#creative", label: "CREATIVE" },
    { href: "/#experience", label: "JOURNEY" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#060608]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            : "bg-gradient-to-b from-[#060608]/90 to-transparent py-4 sm:py-5"
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Wordmark in Cine+Daily style */}
            <Link
              href="/"
              className="group flex items-center gap-1.5 focus-visible:outline-none"
              aria-label="Anujkant homepage"
            >
              <span className="font-extrabold text-lg sm:text-xl tracking-tighter text-white uppercase" style={{ fontFamily: "var(--font-display, Impact, sans-serif)" }}>
                ANUJ
              </span>
              <span className="w-4 h-4 rounded-xs bg-[#E50914] text-black flex items-center justify-center font-mono text-xs font-black">
                +
              </span>
              <span className="font-extrabold text-lg sm:text-xl tracking-tighter text-white uppercase" style={{ fontFamily: "var(--font-display, Impact, sans-serif)" }}>
                DEV
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-white/40 ml-2 border-l border-white/20 pl-2">
                PORTFOLIO
              </span>
            </Link>

            {/* Desktop Navigation Links with bullet dots */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-mono font-medium tracking-widest uppercase text-white/70"
            >
              {navLinks.map((link, idx) => (
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E50914]"
                  >
                    {link.label}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Right Action Icons in clean circle pills */}
            <div className="flex items-center gap-2.5">
              {/* Search button */}
              <Link
                href="/#work"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 text-white/80 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Search work"
              >
                <Search className="w-3.5 h-3.5" />
              </Link>

              {/* User/Profile button */}
              <Link
                href="/#about"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 text-white/80 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Profile and About"
              >
                <User className="w-3.5 h-3.5" />
              </Link>

              {/* White hamburger circle pill button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-8 h-8 rounded-full bg-white text-black hover:bg-white/90 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ml-1"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
