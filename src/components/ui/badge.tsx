import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "warm" | "outline" | "dark";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono tracking-tight rounded-sm transition-colors",
        variant === "default" &&
          "bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]",
        variant === "accent" &&
          "bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent)]/20 font-medium",
        variant === "warm" &&
          "bg-[var(--accent-warm-light)] text-[var(--accent-warm)] border border-[var(--accent-warm)]/20 font-medium",
        variant === "outline" &&
          "bg-transparent text-[var(--text-secondary)] border border-[var(--border-default)]",
        variant === "dark" &&
          "bg-[var(--dark-surface)] text-[var(--dark-text)] border border-[var(--dark-border)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
