"use client";

import Link from "next/link";
import { socials } from "@/data/socials";
import {
    Facebook,
    Instagram,
    Linkedin,
    MessageCircle,
    Github,
    ArrowUp,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    Facebook,
    Instagram,
    Linkedin,
    MessageCircle,
    Github,
};

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            <span className="gradient-text">Portfolio</span>
                            {/* ← REPLACE "Portfolio" with your name/brand */}
                        </Link>
                        <p className="mt-2 text-sm text-[var(--color-text-muted)] max-w-xs">
                            {/* ← REPLACE with your tagline */}
                            Creative developer crafting digital experiences with code and design.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socials.map((social) => {
                            const Icon = iconMap[social.icon] || Github;
                            return (
                                <a
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:-translate-y-0.5 hover:scale-110 active:scale-95 transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-8 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[var(--color-text-muted)]">
                        © {new Date().getFullYear()} All rights reserved.
                        {/* ← REPLACE with your name */}
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:-translate-y-0.5 active:scale-90 transition-all duration-200"
                    >
                        Back to top
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
