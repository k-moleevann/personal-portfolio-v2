"use client";

import { useState, useEffect, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Community Service", href: "/community-service" },
    { label: "Hobbies", href: "/hobbies" },
    { label: "Contact", href: "/contact" },
];

/* ─────────────────────────────────────────────
   Morphing hover pill — big8.asia style
   A layoutId pill slides between nav items.
───────────────────────────────────────────── */
export default function Navbar() {
    const pathname = usePathname();
    const pillId = useId();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredHref, setHoveredHref] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("no-scroll", mobileOpen);
        return () => document.body.classList.remove("no-scroll");
    }, [mobileOpen]);

    /* Close mobile menu on route change.
       Using a functional update avoids depending on the previous value. */
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={clsx(
                    "fixed top-0 inset-x-0 z-50 transition-all duration-500",
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
                            {/* ← REPLACE with your name/brand */}
                        </Link>

                        {/* Desktop nav */}
                        <ul
                            className="hidden lg:flex items-center gap-1"
                            onMouseLeave={() => setHoveredHref(null)}
                        >
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                const isHovered = hoveredHref === item.href;
                                const showPill = isActive || isHovered;

                                return (
                                    <li key={item.href} className="relative">
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
                                            {showPill && (
                                                <motion.span
                                                    layoutId={pillId}
                                                    className={clsx(
                                                        "absolute inset-0 rounded-full",
                                                        isActive
                                                            ? "bg-[var(--color-accent)]/8"
                                                            : "bg-[var(--color-bg-tertiary)]"
                                                    )}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 380,
                                                        damping: 34,
                                                    }}
                                                    style={{ zIndex: -1 }}
                                                />
                                            )}
                                            {item.label}
                                        </Link>

                                        {isActive && (
                                            <motion.span
                                                layoutId="active-dot"
                                                className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-accent)]"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
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
                            <AnimatePresence mode="wait" initial={false}>
                                {mobileOpen ? (
                                    <motion.div
                                        key="x"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.18 }}
                                    >
                                        <X size={22} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.18 }}
                                    >
                                        <Menu size={22} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="fixed inset-0 z-40 bg-[var(--color-bg-card)]/96 backdrop-blur-xl lg:hidden"
                    >
                        <nav className="flex flex-col items-center justify-center h-full gap-3">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 14 }}
                                    transition={{ delay: i * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                >
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
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
