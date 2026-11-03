"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Image as ImageIcon, Check } from "lucide-react";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  const hero = siteConfig.hero;

  // Central character image path (defaults to siteConfig.hero.characterImage)
  const defaultImage = hero?.characterImage || "/images/hero-portrait.png";
  const [currentImage, setCurrentImage] = useState<string>(defaultImage);
  const [showImageInput, setShowImageInput] = useState<boolean>(false);
  const [inputUrl, setInputUrl] = useState<string>("");

  // Content variables strictly tailored to Anujkant's developer portfolio
  const displayTitle = hero?.displayTitle || "ANUJ KANT";
  const metaTags = hero?.metaTags || ["FULL-STACK", "APPLIED AI", "SYSTEMS", "FASTAPI"];
  const credits = hero?.credits || [
    "GCET COMP SCI (AI)",
    "IIT MADRAS DATA SCIENCE",
    "FASTAPI & DISTRIBUTED SYSTEMS",
    "CINEMATIC VISUAL STORYTELLING",
  ];
  const releaseTag = hero?.releaseTag || "PORTFOLIO [EDITION 2025 · DELHI & CHENNAI]";
  const storyBadge = hero?.storyBadge || "ENGINEERING ETHOS";
  const storyHeading = hero?.storyHeading || "PART A.";
  const storyText =
    hero?.storyText ||
    "Turning complex technical architectures, distributed backends, and applied AI into software people actually use.";
  const ctaText = hero?.ctaText || "EXPLORE WORK";
  const ctaHref = hero?.ctaHref || "#work";

  const handleApplyCustomImage = () => {
    if (inputUrl.trim()) {
      setCurrentImage(inputUrl.trim());
      setShowImageInput(false);
    }
  };

  return (
    <section className="relative w-full bg-[#060608] text-white overflow-hidden pt-20 md:pt-24 pb-14 md:pb-20 border-b border-[#1A1A22] select-none">
      {/* Background Subtle Cinematic Vignette & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.09)_0%,rgba(6,6,8,0.96)_72%)] pointer-events-none" />
      <div className="absolute inset-0 editorial-grid opacity-20 pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOP METADATA ROW ================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 pb-6 border-b border-[#1A1A22]/70 text-[11px] font-mono tracking-widest uppercase">
          {/* Top Left: Focus Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {metaTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full border border-white/20 text-white/80 hover:border-white/40 hover:text-white transition-colors"
              >
                ({tag})
              </span>
            ))}
          </div>

          {/* Top Center: Editorial Indicator */}
          <div className="hidden md:flex items-center gap-2 text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
            <span className="text-[10px] tracking-widest">TECHNICAL FRAMEWORK // ARCHITECTURAL DOSSIER</span>
          </div>

          {/* Top Right: Status / Edition Label */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 tracking-wider">{releaseTag}</span>
          </div>
        </div>

        {/* ================= CREDITS & EDITION HEADER ================= */}
        <div className="pt-6 pb-2">
          {/* Builder Specialties & Academic Highlights Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs md:text-sm font-bold uppercase tracking-wider text-white/90">
            {credits.map((item) => (
              <div key={item} className="truncate">
                {item}
              </div>
            ))}
          </div>

          {/* Center Roman/Edition Accent Bars */}
          <div className="flex items-center justify-center gap-1.5 pt-4 pb-1">
            <span className="w-1.5 h-6 bg-white rounded-xs shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
            <span className="w-1.5 h-6 bg-white rounded-xs shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
            <span className="w-1.5 h-6 bg-[#E50914] rounded-xs shadow-[0_0_12px_rgba(229,9,20,0.8)]" />
          </div>
        </div>

        {/* ================= COMPOSITE HERO STAGE ================= */}
        <div className="relative min-h-[460px] sm:min-h-[540px] md:min-h-[620px] lg:min-h-[680px] flex items-center justify-center my-2">
          
          {/* LAYER 1: Crimson Circular Portal Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            {/* Ambient Red Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] md:w-[560px] h-[340px] sm:h-[440px] md:h-[560px] rounded-full bg-[#E50914]/25 blur-3xl" />
            
            {/* The Crimson Disc */}
            <div className="relative w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-[280px] sm:h-[380px] md:h-[460px] lg:h-[500px] rounded-full bg-gradient-to-b from-[#DC1420] via-[#C50D17] to-[#8A070F] shadow-[inset_0_0_40px_rgba(0,0,0,0.6),0_0_60px_rgba(229,9,20,0.4)] border border-red-500/30 flex items-center justify-center">
              
              {/* Concentric Orbital Radar Ring */}
              <div className="w-[85%] h-[85%] rounded-full border border-white/10" />
              
              {/* Thin Crosshair Axis lines */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/10" />
            </div>
          </div>

          {/* LAYER 2: Horizontal 35mm Film Strip Ribbon */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-[5] pointer-events-none overflow-hidden h-14 sm:h-16 md:h-20 bg-black/90 border-y border-white/10 flex items-center shadow-2xl">
            {/* Top and Bottom Sprocket Perforations */}
            <div className="absolute top-1 left-0 right-0 h-1.5 flex justify-between gap-2 px-1 overflow-hidden opacity-60">
              {Array.from({ length: 48 }).map((_, i) => (
                <span key={i} className="w-2.5 h-1.5 bg-white/20 rounded-xs shrink-0" />
              ))}
            </div>
            <div className="absolute bottom-1 left-0 right-0 h-1.5 flex justify-between gap-2 px-1 overflow-hidden opacity-60">
              {Array.from({ length: 48 }).map((_, i) => (
                <span key={i} className="w-2.5 h-1.5 bg-white/20 rounded-xs shrink-0" />
              ))}
            </div>

            {/* Film strip frames content with technical annotations */}
            <div className="w-full flex items-center justify-around px-4 opacity-40 text-xs font-mono tracking-widest text-white/50">
              <span>● ●</span>
              <span>[ MODULE 01 // SYSTEMS ]</span>
              <span>● ●</span>
              <span>[ FASTAPI & NEXT.JS ]</span>
              <span>● ●</span>
              <span>[ APPLIED AI PIPELINES ]</span>
              <span>● ●</span>
            </div>
          </div>

          {/* LAYER 3: Giant Background Display Typography */}
          <div className="absolute inset-0 flex items-center justify-center z-[10] pointer-events-none select-none">
            <h1
              className="text-[20vw] md:text-[18vw] lg:text-[17vw] leading-none font-extrabold uppercase text-white tracking-[-0.03em] drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] text-center w-full"
              style={{
                fontFamily: "var(--font-display, 'Bebas Neue', 'Anton', Impact, sans-serif)",
                letterSpacing: "-0.02em",
              }}
            >
              {displayTitle}
            </h1>

            {/* Vertical bracketed year in right margin */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-xs sm:text-sm tracking-widest text-white/70 [writing-mode:vertical-lr] rotate-180 hidden sm:block">
              [2025]
            </div>
          </div>

          {/* LAYER 4: The Central Hero Character Cutout (REPLACEABLE IMAGE) */}
          <div className="relative z-[20] flex items-center justify-center w-full h-[440px] sm:h-[520px] md:h-[600px] lg:h-[660px] pointer-events-none">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px] h-full flex items-center justify-center">
              <Image
                src={currentImage}
                alt={hero?.characterAlt || siteConfig.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 560px"
                className="object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] filter contrast-[1.08] saturate-[1.05]"
              />
            </div>
          </div>

          {/* LAYER 5: Bottom Left Story Badge & Engineering Ethos */}
          <div className="absolute bottom-2 left-0 sm:left-2 z-[30] max-w-xs sm:max-w-sm pointer-events-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-[#E50914] text-black flex items-center justify-center font-mono text-[10px] font-bold">
                01
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/90">
                {storyBadge}
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed font-sans bg-black/60 backdrop-blur-md p-3 rounded-sm border border-white/10 shadow-lg">
              <span className="font-semibold text-white/95 mr-1">{storyHeading}</span>
              {storyText}
            </p>
          </div>

          {/* LAYER 6: Bottom Right Interactive CTA & Emblem */}
          <div className="absolute bottom-2 right-0 sm:right-2 z-[30] flex items-center gap-3 pointer-events-auto">
            {/* Explore Work CTA */}
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 bg-white/10 hover:bg-[#E50914] hover:border-[#E50914] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] group cursor-pointer"
            >
              <span>{ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Circular Stamp Emblem */}
            <div className="relative w-11 h-11 rounded-full border border-white/20 bg-black/80 flex items-center justify-center text-[10px] font-mono tracking-tighter text-white/80 backdrop-blur-md shadow-md">
              <span className="text-[#E50914] font-bold mr-0.5">01</span>
              <span className="font-semibold">AK</span>
              <div className="absolute inset-0 rounded-full border-t border-[#E50914] rotate-45" />
            </div>
          </div>
        </div>

        {/* ================= EASY IMAGE REPLACEMENT TOOLBAR ================= */}
        {/* A minimal toolbar showing exactly where this image is loaded and allowing instant swapping */}
        <div className="mt-8 pt-4 border-t border-[#1A1A22] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80 font-medium">Hero Image Path:</span>
            <code className="text-[#E50914] bg-white/5 px-2 py-0.5 rounded-xs">
              {currentImage}
            </code>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentImage("/images/hero-portrait.png")}
              className={`px-3 py-1 rounded-sm border transition-all cursor-pointer flex items-center gap-1.5 ${
                currentImage === "/images/hero-portrait.png"
                  ? "border-[#E50914] bg-[#E50914]/20 text-white font-semibold"
                  : "border-white/10 bg-[#121217] text-white/70 hover:text-white"
              }`}
            >
              {currentImage === "/images/hero-portrait.png" && <Check className="w-3 h-3 text-[#E50914]" />}
              <span>Default Portrait</span>
            </button>

            <button
              type="button"
              onClick={() => setShowImageInput(!showImageInput)}
              className="px-3 py-1 rounded-sm border border-white/10 bg-[#121217] hover:border-white/30 text-white/70 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Change Image URL</span>
            </button>
          </div>
        </div>

        {/* Custom Image URL Drawer */}
        {showImageInput && (
          <div className="mt-3 p-3 rounded-sm bg-[#101016] border border-white/15 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-white/70">Enter path or URL:</span>
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="e.g. /images/profile/anuj.png or https://..."
              className="flex-1 min-w-[240px] px-3 py-1.5 text-xs font-mono bg-black/60 border border-white/20 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50914]"
            />
            <button
              type="button"
              onClick={handleApplyCustomImage}
              className="px-4 py-1.5 rounded-sm bg-[#E50914] text-white text-xs font-mono font-medium hover:bg-[#FF1F2B] transition-colors cursor-pointer"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() => {
                setShowImageInput(false);
                setInputUrl("");
              }}
              className="px-3 py-1.5 rounded-sm border border-white/20 text-white/60 hover:text-white text-xs font-mono transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
