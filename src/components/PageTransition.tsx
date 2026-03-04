"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.from(containerRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return <div ref={containerRef}>{children}</div>;
}
