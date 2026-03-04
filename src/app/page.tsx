"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionReveal, { RevealItem } from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import HeroInteractive from "@/components/HeroInteractive";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import PageTransition from "@/components/PageTransition";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

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
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;

    // Parallax fade on scroll down
    gsap.to(contentRef.current, {
      y: "12%",
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Entrance animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-badge", { y: 24, opacity: 0, duration: 0.7, delay: 0.15 })
      .from(".hero-headline", { y: 36, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(".hero-subheadline", { y: 24, opacity: 0, duration: 0.7 }, "-=0.6")
      .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(scrollIndicatorRef.current, { opacity: 0, duration: 1 }, "+=0.4");

    // Floating scroll indicator animation
    gsap.to(".scroll-pill", {
      y: 8,
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".scroll-dot", {
      y: 6,
      opacity: 0.2,
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-primary)]"
    >
      <HeroInteractive />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(240,237,232,0) 0%, var(--color-bg-primary) 72%)",
        }}
      />

      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <div className="hero-badge mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[var(--color-accent)]/8 text-[var(--color-accent)] border border-[var(--color-accent)]/16">
            <Sparkles size={13} />
            Creative Developer &amp; Designer
          </span>
        </div>

        <h1
          className="hero-headline text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-bold tracking-tight leading-[1.04]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Meet your next
          <br />
          <span className="gradient-text">creative developer</span>
        </h1>

        <p className="hero-subheadline mt-6 text-base sm:text-lg text-[var(--color-text-secondary)] max-w-[480px] mx-auto leading-relaxed">
          I craft premium digital experiences where design meets engineering —
          obsessive about motion, detail, and code quality.
        </p>

        <div className="hero-ctas mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/projects">
            <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-semibold text-sm tracking-wide shadow-md shadow-[var(--color-accent-glow)] hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-300">
              View Projects
              <ArrowRight size={15} />
            </span>
          </Link>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--color-border-hover)] text-[var(--color-text-primary)] font-semibold text-sm tracking-wide hover:bg-[var(--color-bg-tertiary)] hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-300">
              Get in Touch
            </span>
          </Link>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 opacity-0"
      >
        <div className="scroll-pill w-5 h-8 rounded-full border-2 border-[var(--color-text-muted)] flex justify-center">
          <div className="scroll-dot w-1 h-2 rounded-full bg-[var(--color-text-muted)] mt-1.5" />
        </div>
      </div>
    </section>
  );
}

/* ── Storytelling content ── */
const storySections = [
  {
    title: "The Foundation",
    heading: "From IT Infrastructure to Code.",
    description: "My journey started deep in the stack. Understanding systems, networks, and servers gave me an engineer's mindset: everything is connected, and performance is non-negotiable.",
    image: "/images/story-1.png",
  },
  {
    title: "The Interface",
    heading: "Building the front end.",
    description: "I shifted my focus to where humans meet machines. I learned to translate complex logic into intuitive, accessible user interfaces using modern web technologies like React and Next.js.",
    image: "/images/story-2.png",
  },
  {
    title: "The Experience",
    heading: "Obsessed with motion.",
    description: "Static pages aren't enough. I believe in interfaces that feel alive. Through deep dives into GSAP, CSS animations, and canvas, I bring a premium, tactile feel to the web.",
    image: "/images/story-3.png",
  },
  {
    title: "The Future",
    heading: "Driven toward AI.",
    description: "Now, I'm bridging the gap between creative development and artificial intelligence. I'm building interfaces that don't just respond, but anticipate and adapt.",
    image: "/images/story-4.png",
  },
];

/* ──────────────────────────────────────────── */
/* B) STORYTELLING                              */
/* ──────────────────────────────────────────── */
function StorytellingSection() {
  return (
    <section className="py-24 lg:py-40 bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-32 lg:space-y-48">
        {storySections.map((section, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <SectionReveal direction={isEven ? "left" : "right"} delay={0.1}>
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden glass-card group">
                    <Image
                      src={section.image}
                      alt={section.heading}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-bg-primary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </SectionReveal>
              </div>

              {/* Text side */}
              <div className="w-full lg:w-1/2">
                <SectionReveal direction={isEven ? "right" : "left"} delay={0.2}>
                  <div className={isEven ? "lg:pr-12" : "lg:pl-12"}>
                    <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">
                      {section.title}
                    </p>
                    <h2
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {section.heading}
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          );
        })}
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
          <div className="inline-block mb-6 animate-pulse">
            <Sparkles size={36} className="text-[var(--color-accent)]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            I&apos;m up for new adventures.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-md mx-auto">
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

        <div className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          {featured.map((project, i) => (
            <div key={project.id} className="snap-start" style={{ animationDelay: `${i * 0.1}s` }}>
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
                <div className="glass-card p-6 h-full hover:border-[var(--color-border-hover)] hover:-translate-y-1 transition-all duration-500">
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
                </div>
              </RevealItem>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.25}>
          <div className="mt-10 text-center">
            <Link href="/experience">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border-hover)] text-sm font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all duration-300">
                Explore full experience
                <ArrowRight size={15} />
              </span>
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
            Got a project in mind, or just want to say hi? I&apos;d love to hear
            from you.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-semibold text-sm tracking-wide shadow-md shadow-[var(--color-accent-glow)] hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all duration-300">
                Get in Touch
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
