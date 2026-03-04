"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   Organic Floating Canvas Particle Field
   – Particles spawn randomly and drift slowly upwards.
   – Soft palette (Purples, Blues, Oranges).
   – Pure rAF loop.
───────────────────────────────────────────── */

const PALETTE = [
    "rgba(147, 51, 234,", // Purple
    "rgba(59, 130, 246,", // Blue
    "rgba(249, 115, 22,",  // Orange
    "rgba(139, 92, 246,", // Violet
];

function randColor() {
    return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    alpha: number;
    color: string;
}

export default function HeroInteractive() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        /* ── State ── */
        let animId = 0;
        let particles: Particle[] = [];

        /* ── Initialize / Resize ── */
        const resize = () => {
            const W = canvas.offsetWidth;
            const H = canvas.offsetHeight;
            const dpr = window.devicePixelRatio || 1;

            canvas.width = W * dpr;
            canvas.height = H * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
            ctx.scale(dpr, dpr);

            // Determine particle count based on screen size (~1 per 9000px^2)
            const count = Math.max(30, Math.floor((W * H) / 9000));
            const next: Particle[] = [];

            for (let i = 0; i < count; i++) {
                next.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.4, // subtle horizontal drift
                    vy: -0.2 - Math.random() * 0.5, // drift upwards
                    r: 1.5 + Math.random() * 3.5, // varing sizes
                    alpha: 0.1 + Math.random() * 0.4, // faint
                    color: randColor(),
                });
            }
            particles = next;
        };

        /* ── rAF loop ── */
        const tick = () => {
            const W = canvas.offsetWidth;
            const H = canvas.offsetHeight;
            ctx.clearRect(0, 0, W, H);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < -p.r) p.x = W + p.r;
                if (p.x > W + p.r) p.x = -p.r;

                // If particle floats off top, reset to bottom
                if (p.y < -p.r) {
                    p.y = H + p.r;
                    p.x = Math.random() * W;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color} ${p.alpha})`;
                ctx.fill();
            }

            animId = requestAnimationFrame(tick);
        };

        /* ── Setup ── */
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        resize(); // Initial setup
        animId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(animId);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    );
}
