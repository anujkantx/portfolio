"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Button } from "../ui/button";
import { Mail, Copy, Check, ArrowUpRight, Phone } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject || "Collaboration Inquiry"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--bg-card)]/50">
      <Container size="wide">
        <SectionHeading
          number="06"
          tag="Collaboration & Contact"
          title="Have an idea worth building?"
          subtitle="Whether you are an engineering team, a potential technical collaborator, or seeking someone who builds full-stack systems from scratch—let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {/* Left Column: Direct Communication Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-sm border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-[var(--text-primary)] mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-sans">
                I am most responsive via direct email. Feel free to reach out regarding software engineering roles, hackathon ventures, or technical product architecture.
              </p>

              {/* Email Box with One-Click Copy */}
              <div className="p-4 rounded-sm bg-[var(--bg-subtle)] border border-[var(--border-subtle)] flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-[var(--accent)] shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm sm:text-base font-mono text-[var(--text-primary)] font-medium truncate hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-xs font-mono rounded-sm border border-[var(--border-default)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)] transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  title="Copy email address to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Additional verified contact details */}
              <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                {siteConfig.phone && (
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-muted)] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" /> Direct Phone / WhatsApp:
                    </span>
                    <a href={`tel:${siteConfig.phone}`} className="hover:underline text-[var(--text-primary)]">
                      {siteConfig.phone}
                    </a>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">Location:</span>
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">Status:</span>
                  <span className="text-emerald-600 font-semibold">{siteConfig.availability.label}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] block mb-3 font-semibold">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {siteConfig.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors flex items-center justify-between group"
                    >
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-transform group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="lg:col-span-6">
            <div className="rounded-sm border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-medium text-[var(--text-primary)] mb-2">
                  Draft a Note
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-sans">
                  Have a specific project or engineering topic? Enter your notes below and submit to open a pre-filled email draft directly in your preferred mail client.
                </p>

                <form onSubmit={handleComposeEmail} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5"
                    >
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Engineering collaboration / AirDose inquiry"
                      className="w-full px-3.5 py-2.5 text-sm rounded-sm bg-[var(--bg-card)] border border-[var(--border-default)] focus:border-[var(--accent)] focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5"
                    >
                      Message / Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share what you are building or exploring..."
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-sm bg-[var(--bg-card)] border border-[var(--border-default)] focus:border-[var(--accent)] focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/60 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full cursor-pointer"
                    icon={<Mail className="w-4 h-4" />}
                  >
                    Open in Mail Client
                  </Button>
                </form>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)] text-center">
                Honest communication · No fake submission backend simulation
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
