"use client";

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
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
                "reveal-item group flex items-center gap-4 w-full max-w-md mx-auto p-4 rounded-2xl",
                "hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]",
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
        </a>
    );
}
