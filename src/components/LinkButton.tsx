"use client";

import { motion } from "framer-motion";
import {
    Facebook,
    Instagram,
    Linkedin,
    MessageCircle,
    Github,
    ExternalLink,
} from "lucide-react";
import clsx from "clsx";

const iconMap: Record<string, React.ElementType> = {
    Facebook,
    Instagram,
    Linkedin,
    MessageCircle,
    Github,
};

interface LinkButtonProps {
    label: string;
    url: string;
    icon: string;
    index?: number;
}

export default function LinkButton({ label, url, icon, index = 0 }: LinkButtonProps) {
    const Icon = iconMap[icon] || ExternalLink;

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={clsx(
                "group flex items-center gap-4 w-full max-w-md mx-auto p-4 rounded-2xl",
                "bg-[var(--color-bg-card)] border border-[var(--color-border)]",
                "hover:border-[var(--color-accent)]/40 hover:shadow-lg hover:shadow-[var(--color-accent-glow)]",
                "transition-all duration-500"
            )}
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-bg-tertiary)] group-hover:bg-[var(--color-accent)]/10 transition-colors duration-300">
                <Icon
                    size={20}
                    className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
                />
            </div>
            <span className="flex-1 text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {label}
            </span>
            <ExternalLink
                size={16}
                className="text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </motion.a>
    );
}
