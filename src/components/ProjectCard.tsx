"use client";

import Image from "next/image";
import clsx from "clsx";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    index?: number;
    compact?: boolean;
}

export default function ProjectCard({
    project,
    index = 0,
    compact = false,
}: ProjectCardProps) {
    return (
        <div
            className={clsx(
                "group relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-card)]",
                "reveal-item hover:-translate-y-1.5",
                "transition-all duration-500 hover:border-[var(--color-border-hover)] hover:shadow-xl hover:shadow-[var(--color-accent-glow)]",
                compact ? "min-w-[280px] w-[320px] flex-shrink-0" : "w-full"
            )}
        >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-tertiary)]">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-60" />

                {/* Featured badge */}
                {project.featured && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3
                    className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    {project.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
