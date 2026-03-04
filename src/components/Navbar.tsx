"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/dist/Flip";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Flip, useGSAP);
}

const navItems = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Community Service", href: "/community-service" },
    { label: "Hobbies", href: "/hobbies" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredHref, setHoveredHref] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const headerRef = useRef<HTMLElement>(null);
    const mobileOverlayRef = useRef<HTMLDivElement>(null);

    // Pill refs
    const pillRef = useRef<HTMLSpanElement>(null);
    const dotRef = useRef<HTMLSpanElement>(null);

    const activeHref = navItems.find(i => i.href === pathname)?.href || null;
    const targetHref = hoveredHref || activeHref;

    // Scroll listener
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Mobile scroll lock
    useEffect(() => {
        document.body.classList.toggle("no-scroll", mobileOpen);
        return () => document.body.classList.remove("no-scroll");
    }, [mobileOpen]);

    // Close menu on navigation
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileOpen(false);
    }, [pathname]);

    // Initial Header Entrance
    useGSAP(() => {
        gsap.fromTo(headerRef.current,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
        );
    }, { scope: headerRef });

    // GSAP Flip for pill and dot
    useGSAP(() => {
        if (targetHref && pillRef.current) {
            const targetContainer = document.querySelector(`[data-pill-container="${targetHref}"]`);
            if (targetContainer && targetContainer !== pillRef.current.parentElement) {
                // Determine color
                const isActive = targetHref === activeHref;
                const bgColor = isActive ? "var(--color-bg-primary)" : "var(--color-bg-tertiary)";
                const bgAlpha = isActive ? "rgba(59, 91, 219, 0.08)" : "var(--color-bg-tertiary)";

                const state = Flip.getState(pillRef.current);
                targetContainer.appendChild(pillRef.current);

                // Animate background color alongside the flip
                gsap.to(pillRef.current, { backgroundColor: bgAlpha, duration: 0.2 });

                Flip.from(state, {
                    duration: 0.55,
                    ease: "power3.out",
                    absolute: true // Avoid jumping
                });
            }
        }

        if (activeHref && dotRef.current) {
            const activeContainer = document.querySelector(`[data-dot-container="${activeHref}"]`);
            if (activeContainer && activeContainer !== dotRef.current.parentElement) {
                const state = Flip.getState(dotRef.current);
                activeContainer.appendChild(dotRef.current);
                Flip.from(state, {
                    duration: 0.55,
                    ease: "power3.out",
                    absolute: true
                });
            }
        }
    }, [targetHref, activeHref]);

    // Mobile menu toggle GSAP
    useGSAP(() => {
        if (!mobileOverlayRef.current) return;
        const links = mobileOverlayRef.current.querySelectorAll("nav > div");

        if (mobileOpen) {
            gsap.to(mobileOverlayRef.current, {
                opacity: 1,
                visibility: "visible",
                duration: 0.22,
                ease: "power2.out"
            });
            gsap.fromTo(links,
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.04, ease: "power3.out", overwrite: true }
            );
        } else {
            gsap.to(mobileOverlayRef.current, {
                opacity: 0,
                duration: 0.22,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(mobileOverlayRef.current, { visibility: "hidden" });
                }
            });
        }
    }, [mobileOpen]);

    return (
        <>
            <header
                ref={headerRef}
                className={clsx(
                    "fixed top-0 inset-x-0 z-50 transition-colors duration-500",
                    isScrolled
                        ? "bg-[var(--color-bg-card)]/80 backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm"
                        : "bg-transparent"
                )}
            >
                <nav className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex h-16 lg:h-20 items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="relative z-50 text-xl font-bold tracking-tight gradient-text"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Portfolio
                        </Link>

                        {/* Desktop nav */}
                        <ul
                            className="hidden lg:flex items-center gap-1"
                            onMouseLeave={() => setHoveredHref(null)}
                        >
                            {/* Create hidden storage for pill/dot when not active (e.g. 404 pages) */}
                            <div className="hidden">
                                <span ref={pillRef} className="absolute inset-0 rounded-full" style={{ zIndex: -1, backgroundColor: "transparent" }} />
                                <span ref={dotRef} className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                            </div>

                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                const isHovered = hoveredHref === item.href;

                                return (
                                    <li
                                        key={item.href}
                                        className="relative"
                                    // Target container for appending the layout pill/dot
                                    >
                                        <div className="absolute inset-0" data-pill-container={item.href} style={{ pointerEvents: "none" }} />

                                        <Link
                                            href={item.href}
                                            onMouseEnter={() => setHoveredHref(item.href)}
                                            className={clsx(
                                                "relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-150",
                                                isActive
                                                    ? "text-[var(--color-accent)]"
                                                    : isHovered
                                                        ? "text-[var(--color-text-primary)]"
                                                        : "text-[var(--color-text-secondary)]"
                                            )}
                                        >
                                            {item.label}
                                        </Link>

                                        <div className="absolute inset-0" data-dot-container={item.href} style={{ pointerEvents: "none" }} />
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen((v) => !v)}
                            className="relative z-50 lg:hidden p-2 rounded-lg text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu overlay */}
            <div
                ref={mobileOverlayRef}
                className="fixed inset-0 z-40 bg-[var(--color-bg-card)]/96 backdrop-blur-xl lg:hidden"
                style={{ opacity: 0, visibility: "hidden" }}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-3">
                    {navItems.map((item) => (
                        <div key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={clsx(
                                    "block text-2xl font-semibold py-2 px-6 rounded-2xl transition-colors",
                                    pathname === item.href
                                        ? "gradient-text"
                                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                                )}
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
}
