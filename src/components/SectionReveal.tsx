"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    stagger?: boolean;
}

const getVariants = (direction: string): Variants => {
    const directionMap: Record<string, { x: number; y: number }> = {
        up: { x: 0, y: 40 },
        down: { x: 0, y: -40 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };
    const offset = directionMap[direction] || directionMap.up;

    return {
        hidden: {
            opacity: 0,
            x: offset.x,
            y: offset.y,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };
};

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

export default function SectionReveal({
    children,
    className,
    delay = 0,
    direction = "up",
    stagger = false,
}: SectionRevealProps) {
    const ref = useRef(null);

    if (stagger) {
        return (
            <motion.div
                ref={ref}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={getVariants(direction)}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* Stagger child — use inside a SectionReveal with stagger=true */
export function RevealItem({
    children,
    className,
    direction = "up",
}: {
    children: React.ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}) {
    return (
        <motion.div variants={getVariants(direction)} className={clsx(className)}>
            {children}
        </motion.div>
    );
}
