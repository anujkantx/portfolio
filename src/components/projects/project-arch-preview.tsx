import React from "react";
import { Server, Smartphone, Database, Cloud, Activity, BookOpen, ShieldCheck, Cpu } from "lucide-react";

interface ProjectArchPreviewProps {
  slug: string;
}

export function ProjectArchPreview({ slug }: ProjectArchPreviewProps) {
  if (slug === "airdose") {
    return (
      <div className="w-full h-full bg-[var(--dark-surface)] text-[var(--dark-text)] p-5 flex flex-col justify-between font-mono text-xs rounded-sm border border-[var(--dark-border)] select-none">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[var(--dark-border)] pb-2.5 text-[11px] text-[var(--dark-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>AIRDOSE // PIPELINE TELEMETRY</span>
          </div>
          <span className="text-emerald-400">STATUS: ACTIVE_NODE</span>
        </div>

        {/* Schematic Flow */}
        <div className="grid grid-cols-3 gap-2 my-4 items-center">
          {/* Client node */}
          <div className="p-3 rounded-sm bg-neutral-900 border border-neutral-800 text-center space-y-1">
            <Smartphone className="w-4 h-4 mx-auto text-blue-400" />
            <div className="text-[10px] text-neutral-400 uppercase">Client Ingest</div>
            <div className="font-semibold text-neutral-200 text-[11px]">Geo-Waypoints</div>
          </div>

          {/* Central API */}
          <div className="p-3 rounded-sm bg-neutral-900 border border-blue-500/30 text-center space-y-1 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
            <Server className="w-4 h-4 mx-auto text-blue-400 animate-pulse" />
            <div className="text-[10px] text-blue-400 uppercase">FastAPI Core</div>
            <div className="font-semibold text-neutral-100 text-[11px]">Dosage Engine</div>
          </div>

          {/* Data store */}
          <div className="p-3 rounded-sm bg-neutral-900 border border-neutral-800 text-center space-y-1">
            <Database className="w-4 h-4 mx-auto text-amber-400" />
            <div className="text-[10px] text-neutral-400 uppercase">Timeseries DB</div>
            <div className="font-semibold text-neutral-200 text-[11px]">PostgreSQL</div>
          </div>
        </div>

        {/* Realtime metric stream simulation */}
        <div className="bg-black/60 p-2.5 rounded-sm border border-neutral-800 text-[10px] space-y-1">
          <div className="flex justify-between text-neutral-400">
            <span>[METRIC] PM2.5 Inhalation Estimator:</span>
            <span className="text-emerald-400">42.8 µg/m³ · MODERATE</span>
          </div>
          <div className="flex justify-between text-neutral-400">
            <span>[SPATIAL] Geohash Cache Hit Ratio:</span>
            <span className="text-blue-400">94.2% (15m TTL)</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "studyit") {
    return (
      <div className="w-full h-full bg-[var(--dark-surface)] text-[var(--dark-text)] p-5 flex flex-col justify-between font-mono text-xs rounded-sm border border-[var(--dark-border)] select-none">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--dark-border)] pb-2.5 text-[11px] text-[var(--dark-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span>STUDYIT // ONTOLOGY GRAPH</span>
          </div>
          <span className="text-teal-400">POSTGRES + FASTAPI</span>
        </div>

        {/* Tree hierarchy visualization */}
        <div className="my-3 space-y-2 text-[11px]">
          <div className="flex items-center gap-2 text-neutral-300">
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-neutral-400">Degree:</span>
            <span className="font-semibold">B.Tech Computer Science</span>
          </div>
          <div className="ml-4 pl-3 border-l border-neutral-800 flex items-center gap-2 text-neutral-300">
            <span className="text-teal-500">└──</span>
            <span className="text-neutral-400">Semester 04:</span>
            <span className="text-neutral-200">Algorithms & System Design</span>
          </div>
          <div className="ml-8 pl-3 border-l border-neutral-800 flex items-center gap-2 text-neutral-300">
            <span className="text-amber-500">└──</span>
            <span className="text-neutral-400">Resources:</span>
            <span className="text-amber-400">PYQs (2021-2024) + Solved Notes</span>
          </div>
        </div>

        {/* Auth & Validation badge */}
        <div className="bg-black/60 p-2.5 rounded-sm border border-neutral-800 text-[10px] flex items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>OAuth 2.0 / JWT Verification</span>
          </div>
          <span className="text-teal-400 font-semibold">STRICT PYDANTIC</span>
        </div>
      </div>
    );
  }

  // Fallback for VisionGuard or other tools
  return (
    <div className="w-full h-full bg-[var(--dark-surface)] text-[var(--dark-text)] p-5 flex flex-col justify-between font-mono text-xs rounded-sm border border-[var(--dark-border)] select-none">
      <div className="flex items-center justify-between border-b border-[var(--dark-border)] pb-2.5 text-[11px] text-[var(--dark-muted)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span>MICROSERVICE RUNTIME</span>
        </div>
        <span className="text-rose-400">CONTAINERIZED</span>
      </div>

      <div className="my-4 p-3 bg-neutral-900 rounded-sm border border-neutral-800 text-center space-y-2">
        <Cpu className="w-5 h-5 mx-auto text-rose-400" />
        <div className="text-[11px] text-neutral-300 font-semibold">OpenCV Tensor Buffer</div>
        <div className="text-[10px] text-neutral-500">In-Memory NumPy Execution (Zero Disk I/O)</div>
      </div>

      <div className="bg-black/60 p-2 rounded-sm border border-neutral-800 text-[10px] text-neutral-400 text-center">
        FastAPI Async · Sub-15ms Latency
      </div>
    </div>
  );
}
