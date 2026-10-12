import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24">
      <Container size="narrow" className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--bg-subtle)] border border-[var(--border-default)] font-mono text-xs text-[var(--accent)]">
          ERROR 404 // ROUTE NOT FOUND
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[var(--text-primary)]">
          Page Not Located
        </h1>

        <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
          The requested page or case-study slug does not exist or has been restructured.
        </p>

        <div className="pt-2">
          <Button href="/" variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </div>
      </Container>
    </div>
  );
}
