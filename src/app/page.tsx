"use client";

import { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Facebook, Instagram, Linkedin, Github, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionReveal, { RevealItem } from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import HeroInteractive from "@/components/HeroInteractive";
import Button from "@/components/Button";
import Card from "@/components/Card";
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
      y: "15%",
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

    tl.from(".hero-headline", { y: 40, opacity: 0, duration: 1, delay: 0.2 })
      .from(".hero-subheadline", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(scrollIndicatorRef.current, { opacity: 0, duration: 1 }, "+=0.2");

    // Floating scroll indicator animation
    gsap.to(".scroll-pill", {
      y: 8,
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
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <h1 className="hero-headline text-5xl md:text-7xl font-bold tracking-tight text-massive-header text-[var(--color-text-primary)]">
          Meet your next creative developer.
        </h1>

        <p className="hero-subheadline mt-8 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between engineering and design. Obsessed with performance, motion, and crafting premium interactive experiences.
        </p>

        <div className="hero-ctas mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/projects">
            <Button variant="solid" className="w-full sm:w-auto">
              View Projects
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full sm:w-auto">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0"
      >
        <div className="scroll-pill w-6 h-10 rounded-full border-2 border-[var(--color-text-muted)] flex justify-center">
          <div className="w-1.5 h-2.5 rounded-full bg-[var(--color-text-muted)] mt-2" />
        </div>
      </div>
    </section>
  );
}

/* ── Storytelling content ── */
const storySections = [
  {
    title: "01. The Interface",
    heading: "Front-end Development",
    description: "It started with the browser. Mastering React, Next.js, and complex state management to build interfaces that aren't just functional, but feel alive mapping logic to visual experiences.",
    image: "/images/story-1.png",
  },
  {
    title: "02. The Architecture",
    heading: "Java & Systems",
    description: "I wanted to understand what happens beneath the surface. Diving into Java and backend systems provided a rigorous foundation in object-oriented design and scalable data architecture.",
    image: "/images/story-2.png",
  },
  {
    title: "03. The Evolution",
    heading: "Toward Artificial Intelligence",
    description: "The next frontier. I am currently exploring how AI can augment creative development, building generative interfaces and exploring large language models to rethink human-computer interaction.",
    image: "/images/story-3.png",
  },
];

/* ──────────────────────────────────────────── */
/* B) STORYTELLING                              */
/* ──────────────────────────────────────────── */
function StorytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".story-section");

    sections.forEach((section: any) => {
      gsap.from(section, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-40">
        {storySections.map((section, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`story-section flex flex-col gap-12 lg:gap-20 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Text side */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
                  {section.title}
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6 text-massive-header">
                  {section.heading}
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Image side - Using the new Card component */}
              <div className="w-full lg:w-1/2">
                <Card variant="gray" className="p-4 sm:p-6 !rounded-[3rem]">
                  <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden group bg-white shadow-sm">
                    <Image
                      src={section.image}
                      alt={section.heading}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Card>
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
    <section className="py-32 lg:py-48 bg-[var(--color-bg-secondary)] rounded-t-[4rem] -mt-10 relative z-10">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <SectionReveal>
          <div className="inline-block mb-8">
            <Sparkles size={40} className="text-[var(--color-accent)] animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-massive-header text-[var(--color-text-primary)]">
            I&apos;m up for new adventures.
          </h2>
          <p className="mt-8 text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Actively seeking opportunities where I can push boundaries, blend design with code, and build the future of the web.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/* D) HORIZONTAL SCROLL PROJECTS                */
/* ──────────────────────────────────────────── */
function ProjectsPreview() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollContainerRef.current?.scrollWidth || 0;
      const clientWidth = scrollContainerRef.current?.clientWidth || 0;
      const xDistance = -(scrollWidth - clientWidth);

      // We only run this on desktop sized screens
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to(scrollContainerRef.current, {
          x: xDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            invalidateOnRefresh: true,
          }
        });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, [featured]);

  return (
    <section ref={containerRef} className="py-24 lg:py-0 bg-[var(--color-bg-primary)] lg:h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-20">
          <SectionReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] text-massive-header">
              Selected Work
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <Link href="/projects" className="hidden lg:block mt-6 lg:mt-0">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </SectionReveal>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex lg:space-x-8 space-x-6 overflow-x-auto lg:overflow-visible pb-12 lg:pb-0 hide-scrollbar snap-x snap-mandatory lg:snap-none"
        >
          {featured.map((project, i) => (
            <div key={project.id} className="min-w-[85vw] md:min-w-[600px] lg:min-w-[700px] snap-start shrink-0">
              <Card variant="gray" className="p-4 sm:p-6 !rounded-[2.5rem] h-full transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                <div className="px-4 pb-2">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-display">{project.title}</h3>
                    <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold">{project.category}</span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] line-clamp-2">{project.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="lg:hidden mt-8 text-center">
          <Link href="/projects">
            <Button variant="outline">View All Projects</Button>
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
    <section className="py-32 lg:py-48 bg-[var(--color-bg-secondary)] rounded-t-[4rem] relative z-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] text-massive-header mb-6">
              Experience Highlights
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Building teams, driving creative direction, and writing code that performs.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {highlights.map((exp) => (
              <RevealItem key={exp.id}>
                <Card variant="white" className="h-full flex flex-col justify-between group hover:-translate-y-2 !rounded-[2.5rem]">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                        {exp.dates}
                      </p>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-display leading-tight mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-[var(--color-text-secondary)] font-medium mb-6">
                      {exp.organization}
                    </p>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      {exp.description[0]}
                    </p>
                  </div>
                </Card>
              </RevealItem>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="text-center mt-12">
            <Link href="/experience">
              <Button variant="outline">
                View Full Experience ↗
              </Button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/* F) CONTACT PREVIEW (Linktree Style)          */
/* ──────────────────────────────────────────── */
function ContactPreview() {
  const links = [
    { label: "Facebook", icon: <Facebook size={20} />, href: "#" },
    { label: "Instagram", icon: <Instagram size={20} />, href: "#" },
    { label: "LinkedIn", icon: <Linkedin size={20} />, href: "#" },
    { label: "Discord", icon: <MessageCircle size={20} />, href: "#" },
    { label: "GitHub", icon: <Github size={20} />, href: "#" },
  ];

  return (
    <section className="py-32 lg:py-48 bg-[var(--color-bg-primary)]">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-[var(--color-bg-secondary)] rounded-full mx-auto mb-8 overflow-hidden relative">
              <Image src="/images/hero-bg.png" alt="Profile" fill className="object-cover" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] text-massive-header mb-4">
              Let&apos;s build something.
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Find me across the web.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <RevealItem key={i}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="solid" className="w-full !py-5 text-lg justify-start relative px-8">
                    <span className="absolute left-8">{link.icon}</span>
                    <span className="mx-auto">{link.label}</span>
                  </Button>
                </a>
              </RevealItem>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
