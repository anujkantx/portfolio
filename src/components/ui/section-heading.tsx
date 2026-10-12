import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  tag,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-wider">
            {number}
          </span>
        )}
        {number && tag && (
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        )}
        {tag && (
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium">
            {tag}
          </span>
        )}
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] font-sans">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)] font-normal max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-6 h-[1px] w-full bg-[var(--border-subtle)]" />
    </div>
  );
}
