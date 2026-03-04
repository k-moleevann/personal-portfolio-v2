"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   Interactive canvas particle field
   – Dots spring toward the mouse cursor, then
     return to their grid origin.
   – Pure rAF loop with manual physics — no libs.
   – Degrades gracefully on touch/mobile devices.
───────────────────────────────────────────── */

const ATTRACT_R = 130;
const ATTRACT_F = 0.018;
const SPRING = 0.06;
const FRICTION = 0.82;
const GAP_DESK = 44;
const GAP_MOB = 62;

const PALETTE = [
    "rgba(59, 91, 219,",
    "rgba(14, 165, 233,",
    "rgba(100, 116, 139,",
];

function randColor() {
    return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

interface Dot {
    ox: number;
    oy: number;
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

        const isMobile = window.matchMedia("(hover: none)").matches;
        const gap = isMobile ? GAP_MOB : GAP_DESK;

        /* ── State held in plain objects (not refs) ── */
        let animId = 0;
        const mouse = { x: -9999, y: -9999 };
        let dots: Dot[] = [];

        /* ── Canvas resize + rebuild dots ── */
        const resize = () => {
            const W = canvas.offsetWidth;
            const H = canvas.offsetHeight;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
            ctx.scale(dpr, dpr);

            const cols = Math.floor(W / gap);
            const rows = Math.floor(H / gap);
            const ox0 = (W - cols * gap) / 2;
            const oy0 = (H - rows * gap) / 2;
            const next: Dot[] = [];

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = ox0 + c * gap + gap / 2;
                    const y = oy0 + r * gap + gap / 2;
                    next.push({
                        ox: x, oy: y, x, y,
                        vx: 0, vy: 0,
                        r: 1.2 + Math.random() * 1.4,
                        alpha: 0.18 + Math.random() * 0.30,
                        color: randColor(),
                    });
                }
            }
            dots = next;
        };

        /* ── rAF loop ── */
        const tick = () => {
            const W = canvas.offsetWidth;
            const H = canvas.offsetHeight;
            ctx.clearRect(0, 0, W, H);

            for (let i = 0; i < dots.length; i++) {
                const d = dots[i];

                if (!isMobile) {
                    const dx = mouse.x - d.x;
                    const dy = mouse.y - d.y;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < ATTRACT_R * ATTRACT_R && distSq > 0) {
                        const dist = Math.sqrt(distSq);
                        const force = ((ATTRACT_R - dist) / ATTRACT_R) * ATTRACT_F;
                        d.vx += dx * force;
                        d.vy += dy * force;
                    }
                }

                d.vx += (d.ox - d.x) * SPRING;
                d.vy += (d.oy - d.y) * SPRING;
                d.vx *= FRICTION;
                d.vy *= FRICTION;
                d.x += d.vx;
                d.y += d.vy;

                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fillStyle = `${d.color} ${d.alpha})`;
                ctx.fill();
            }

            animId = requestAnimationFrame(tick);
        };

        /* ── Events ── */
        const onMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        resize();
        animId = requestAnimationFrame(tick);

        canvas.addEventListener("mousemove", onMove, { passive: true });
        canvas.addEventListener("mouseleave", onLeave);

        return () => {
            cancelAnimationFrame(animId);
            ro.disconnect();
            canvas.removeEventListener("mousemove", onMove);
            canvas.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto"
            aria-hidden="true"
        />
    );
}
