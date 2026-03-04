import React from "react";
import clsx from "clsx";

export type ButtonVariant = "solid" | "outline" | "floating";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
    className?: string;
}

export default function Button({
    variant = "solid",
    children,
    className,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 active:scale-95";

    const variants = {
        solid: "bg-black text-white hover:bg-black/90",
        outline:
            "bg-transparent text-black border border-black hover:bg-black hover:text-white",
        floating:
            "bg-white text-black shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1",
    };

    return (
        <button
            className={clsx(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
