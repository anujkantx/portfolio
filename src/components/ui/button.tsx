import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  icon,
  iconRight,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none rounded-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
    size === "sm" && "text-xs px-3 py-1.5 gap-1.5",
    size === "md" && "text-sm px-4 py-2 gap-2",
    size === "lg" && "text-base px-6 py-3 gap-2.5",
    variant === "primary" &&
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] active:translate-y-[1px] shadow-sm",
    variant === "secondary" &&
      "bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--border-default)] border border-[var(--border-subtle)] active:translate-y-[1px]",
    variant === "outline" &&
      "bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] border border-[var(--border-default)] hover:border-[var(--border-strong)] active:translate-y-[1px]",
    variant === "ghost" &&
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]",
    className
  );

  const content = (
    <>
      {icon && <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{iconRight}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
}
