"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import SectionReveal, { RevealItem } from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import HeroInteractive from "@/components/HeroInteractive";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import PageTransition from "@/components/PageTransition";

/* ── Storytelling lines — REPLACE with your own copy ── */
const storyBeats = [
  "I design like a storyteller.",
  "I build interfaces that feel alive.",
  "I obsess over motion and detail.",
  "I ship clean, scalable code.",
  "And I keep learning in public.",
];

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <StorytellingSection />
      <AdventureSection />
      <ProjectsPreview />
      <ExperiencePreview />
      <ContactPreview />
    </PageTransition>
  );
}

/* ──────────────────────────────────────────── */
/* A) HERO SECTION                              */
/* ──────────────────────────────────────────── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-primary)]"
    >
      {/* ── Interactive canvas background ── */}
      <HeroInteractive />

      {/* ── Radial highlight in center ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(240,237,232,0) 0%, var(--color-bg-primary) 72%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[var(--color-accent)]/8 text-[var(--color-accent)] border border-[var(--color-accent)]/16">
            <Sparkles size={13} />
            {/* ← REPLACE tagline */}
            Creative Developer &amp; Designer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-bold tracking-tight leading-[1.04]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Meet your next
          <br />
          <span className="gradient-text">creative developer</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-[var(--color-text-secondary)] max-w-[480px] mx-auto leading-relaxed"
        >
          {/* ← REPLACE subheadline */}
          I craft premium digital experiences where design meets engineering —
          obsessive about motion, detail, and code quality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-semibold text-sm tracking-wide shadow-md shadow-[var(--color-accent-glow)] hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              View Projects
              <ArrowRight size={15} />
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--color-border-hover)] text-[var(--color-text-primary)] font-semibold text-sm tracking-wide hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Get in Touch
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll mouse indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[var(--color-text-muted)] flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[var(--color-text-muted)] mt-1.5"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/* B) STORYTELLING                              */
/* ──────────────────────────────────────────── */
function StorytellingSection() {
  return (
    <section className="py-32 lg:py-48 bg-[var(--color-bg-primary)]">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-24 lg:space-y-40">
        {storyBeats.map((line, i) => (
          <SectionReveal key={i} delay={0.08}>
            <h2
              className={
                "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight " +
                (i % 2 === 0
                  ? "gradient-text"
                  : "text-[var(--color-text-primary)]")
              }
              style={{ fontFamily: "var(--font-display)" }}
            >
              {line}
            </h2>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/* C) ADVENTURE CTA                             */
/* ──────────────────────────────────────────── */
function AdventureSection() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <SectionReveal>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Sparkles size={36} className="text-[var(--color-accent)]" />
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            I&apos;m up for new adventures.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-md mx-auto">
            {/* ← REPLACE supporting line */}
            Whether it&apos;s a bold startup, creative agency, or an ambitious
            side project — I&apos;m ready to bring ideas to life.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/* D) PROJECTS PREVIEW                          */
/* ──────────────────────────────────────────── */
function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-bg-primary)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Coding Projects
              </h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                Selected work that I&apos;m proud of
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:gap-2 transition-all"
            >
              View all projects
              <ChevronRight size={16} />
            </Link>
          </div>
        </SectionReveal>

        {/* Horizontal scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          {featured.map((project, i) => (
            <div key={project.id} className="snap-start">
              <ProjectCard project={project} index={i} compact />
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]"
          >
            View all projects
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/* E) EXPERIENCE HIGHLIGHTS                     */
/* ──────────────────────────────────────────── */
function ExperiencePreview() {
  const highlights = experiences.slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3 text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experience Highlights
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-12">
            Building skills across development, design, and leadership
          </p>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((exp) => (
              <RevealItem key={exp.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 h-full hover:border-[var(--color-border-hover)] transition-all duration-500"
                >
                  <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-2">
                    {exp.dates}
                  </p>
                  <h3
                    className="text-lg font-bold text-[var(--color-text-primary)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] mt-3 line-clamp-2">
                    {exp.description[0]}
                  </p>
                </motion.div>
              </RevealItem>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.25}>
          <div className="mt-10 text-center">
            <Link href="/experience">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border-hover)] text-sm font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
              >
                Explore full experience
                <ArrowRight size={15} />
              </motion.span>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/* F) CONTACT PREVIEW                           */
/* ──────────────────────────────────────────── */
function ContactPreview() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-bg-primary)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <SectionReveal>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s connect
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            {/* ← REPLACE contact intro */}
            Got a project in mind, or just want to say hi? I&apos;d love to hear
            from you.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-semibold text-sm tracking-wide shadow-md shadow-[var(--color-accent-glow)] hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Get in Touch
                <ArrowRight size={15} />
              </motion.span>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
