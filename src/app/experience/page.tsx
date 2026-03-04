"use client";

import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences, education } from "@/data/experience";
import { GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExperiencePage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <SectionReveal>
                        <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] mb-4">
                            My Journey
                        </p>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Experience
                        </h1>
                        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl">
                            {/* ← REPLACE intro */}
                            From web development and creative design to research and mentoring — here&apos;s where I&apos;ve been building my craft.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Work Experience */}
            <section className="pb-24 lg:pb-32">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <SectionReveal>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 rounded-xl bg-[var(--color-accent)]/10">
                                <Briefcase size={20} className="text-[var(--color-accent)]" />
                            </div>
                            <h2
                                className="text-2xl font-bold"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Work Experience
                            </h2>
                        </div>
                    </SectionReveal>

                    <div className="ml-2">
                        {experiences.map((exp, i) => (
                            <ExperienceCard key={exp.id} entry={exp} index={i} />
                        ))}
                    </div>

                    {/* Link to community service */}
                    <SectionReveal delay={0.2}>
                        <div className="mt-12 ml-8 p-6 glass-card">
                            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                                I also have extensive community & leadership experience.
                            </p>
                            <Link
                                href="/community-service"
                                className="text-sm font-semibold text-[var(--color-accent)] hover:underline"
                            >
                                View Community Service →
                            </Link>
                        </div>
                    </SectionReveal>
                </div>
            </section>

            {/* Education */}
            <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <SectionReveal>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 rounded-xl bg-[var(--color-accent-secondary)]/10">
                                <GraduationCap
                                    size={20}
                                    className="text-[var(--color-accent-secondary)]"
                                />
                            </div>
                            <h2
                                className="text-2xl font-bold"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Education
                            </h2>
                        </div>
                    </SectionReveal>

                    <div className="space-y-6">
                        {education.map((edu, i) => (
                            <SectionReveal key={edu.id} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    className="glass-card p-6 hover:border-[var(--color-border-hover)] transition-all duration-500"
                                >
                                    <h3
                                        className="text-lg font-bold text-[var(--color-text-primary)]"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        {edu.institution}
                                    </h3>
                                    <p className="text-sm font-semibold text-[var(--color-accent-secondary)] mt-1">
                                        {edu.degree}
                                    </p>
                                    <p className="text-xs text-[var(--color-text-muted)] mt-2">
                                        {edu.dates}
                                    </p>
                                    {edu.description && (
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-3">
                                            {edu.description}
                                        </p>
                                    )}
                                </motion.div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
