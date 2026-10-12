"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
      aria-label="Return to top of page"
    >
      <span>Back to top</span>
      <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
