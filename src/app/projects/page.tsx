"use client";

import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filtered =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    const featured = projects.filter((p) => p.featured);

    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionReveal>
                        <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] mb-4">
                            My Work
                        </p>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Projects
                        </h1>
                        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl">
                            {/* ← REPLACE intro */}
                            A collection of work spanning web apps, UI design, experiments, and things I&apos;ve built to learn.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Featured row */}
            <section className="pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionReveal>
                        <h2
                            className="text-xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Featured
                        </h2>
                    </SectionReveal>
                    <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
                        {featured.map((project, i) => (
                            <div key={project.id} className="snap-start">
                                <ProjectCard project={project} index={i} compact />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filters + Grid */}
            <section className="py-16 lg:py-24 bg-[var(--color-bg-secondary)]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Filter tabs */}
                    <SectionReveal>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {projectCategories.map((cat) => (
                                <motion.button
                                    key={cat.key}
                                    onClick={() => setActiveCategory(cat.key)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={clsx(
                                        "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                        activeCategory === cat.key
                                            ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent-glow)]"
                                            : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
                                    )}
                                >
                                    {cat.label}
                                </motion.button>
                            ))}
                        </div>
                    </SectionReveal>

                    {/* Project grid */}
                    <motion.div
                        layout
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} index={i} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {filtered.length === 0 && (
                        <p className="text-center text-[var(--color-text-muted)] py-12">
                            No projects in this category yet.
                        </p>
                    )}
                </div>
            </section>
        </PageTransition>
    );
}
