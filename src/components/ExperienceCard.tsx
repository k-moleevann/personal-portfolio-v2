"use client";

import { MapPin, Calendar } from "lucide-react";
import type { ExperienceEntry } from "@/data/experience";

interface ExperienceCardProps {
    entry: ExperienceEntry;
    index?: number;
}

export default function ExperienceCard({ entry, index = 0 }: ExperienceCardProps) {
    return (
        <div
            className="reveal-item group relative pl-8 pb-10 border-l-2 border-[var(--color-border)] last:pb-0"
        >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-bg-primary)] border-2 border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] transition-colors duration-300" />

            <div className="glass-card p-6 hover:border-[var(--color-border-hover)] transition-all duration-500">
                {/* Role & Org */}
                <h3
                    className="text-lg font-bold text-[var(--color-text-primary)]"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    {entry.role}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-accent)]">
                    {entry.organization}
                </p>

                {/* Meta */}
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {entry.dates}
                    </span>
                    {entry.location && (
                        <span className="flex items-center gap-1.5">
                            <MapPin size={13} />
                            {entry.location}
                        </span>
                    )}
                    {entry.type && (
                        <span className="px-2 py-0.5 rounded-full bg-[var(--color-bg-tertiary)] text-[10px] uppercase tracking-widest">
                            {entry.type}
                        </span>
                    )}
                </div>

                {/* Description bullets */}
                <ul className="mt-4 space-y-2">
                    {entry.description.map((point, i) => (
                        <li
                            key={i}
                            className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex gap-2"
                        >
                            <span className="text-[var(--color-accent)] mt-1.5 flex-shrink-0">•</span>
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Tags */}
                {entry.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
