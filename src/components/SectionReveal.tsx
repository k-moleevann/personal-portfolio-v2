"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    stagger?: boolean;
}

export default function SectionReveal({
    children,
    className,
    delay = 0,
    direction = "up",
    stagger = false,
}: SectionRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const getOffset = () => {
            switch (direction) {
                case "up": return { y: 40 };
                case "down": return { y: -40 };
                case "left": return { x: 40 };
                case "right": return { x: -40 };
                default: return { y: 40 };
            }
        };

        if (stagger) {
            const items = gsap.utils.toArray(".reveal-item", containerRef.current);
            if (items.length > 0) {
                gsap.from(items, {
                    ...getOffset(),
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: delay,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            } else {
                // Fallback to direct children if no .reveal-item classes
                gsap.from(containerRef.current.children, {
                    ...getOffset(),
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: delay,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            }
        } else {
            gsap.from(containerRef.current, {
                ...getOffset(),
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                delay: delay,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        }
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}

export function RevealItem({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={clsx("reveal-item", className)}>
            {children}
        </div>
    );
}
