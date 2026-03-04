"use client";

import PageTransition from "@/components/PageTransition";
import SectionReveal, { RevealItem } from "@/components/SectionReveal";
import { communityEntries, impactMetrics } from "@/data/community";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Calendar,
    Users,
    Clock,
    Building,
    Award,
} from "lucide-react";

const metricIconMap: Record<string, React.ElementType> = {
    Calendar,
    Users,
    Clock,
    Building,
};

export default function CommunityServicePage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <SectionReveal>
                        <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] mb-4">
                            Giving Back
                        </p>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Community Service
                        </h1>
                        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl">
                            {/* ← REPLACE intro */}
                            Leadership, mentorship, and service — building stronger communities through active involvement.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="pb-20">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <SectionReveal stagger>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {impactMetrics.map((metric) => {
                                const Icon = metricIconMap[metric.icon] || Award;
                                return (
                                    <RevealItem key={metric.label}>
                                        <motion.div
                                            whileHover={{ y: -4 }}
                                            className="glass-card p-6 text-center hover:border-[var(--color-border-hover)] transition-all duration-500"
                                        >
                                            <Icon
                                                size={24}
                                                className="mx-auto mb-3 text-[var(--color-accent)]"
                                            />
                                            <p
                                                className="text-3xl font-bold gradient-text"
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                {metric.value}
                                            </p>
                                            <p className="text-xs text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">
                                                {metric.label}
                                            </p>
                                        </motion.div>
                                    </RevealItem>
                                );
                            })}
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* Timeline / Cards */}
            <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <SectionReveal>
                        <h2
                            className="text-2xl font-bold mb-12"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Leadership & Service
                        </h2>
                    </SectionReveal>

                    <div className="space-y-8">
                        {communityEntries.map((entry, i) => (
                            <SectionReveal key={entry.id} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    className="glass-card overflow-hidden hover:border-[var(--color-border-hover)] transition-all duration-500"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Image */}
                                        {entry.image && (
                                            <div className="relative w-full lg:w-72 aspect-[16/10] lg:aspect-auto flex-shrink-0 bg-[var(--color-bg-tertiary)]">
                                                <Image
                                                    src={entry.image}
                                                    alt={entry.role}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 1024px) 100vw, 280px"
                                                />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="p-6 lg:p-8 flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Calendar
                                                    size={14}
                                                    className="text-[var(--color-text-muted)]"
                                                />
                                                <span className="text-xs text-[var(--color-text-muted)]">
                                                    {entry.dates}
                                                </span>
                                            </div>
                                            <h3
                                                className="text-lg font-bold text-[var(--color-text-primary)]"
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                {entry.role}
                                            </h3>
                                            <p className="text-sm font-semibold text-[var(--color-accent)] mt-1">
                                                {entry.organization}
                                            </p>
                                            <ul className="mt-4 space-y-2">
                                                {entry.description.map((point, j) => (
                                                    <li
                                                        key={j}
                                                        className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex gap-2"
                                                    >
                                                        <span className="text-[var(--color-accent)] mt-1 flex-shrink-0">
                                                            •
                                                        </span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
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
                                </motion.div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
