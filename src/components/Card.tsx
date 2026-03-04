import React from "react";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "gray" | "white";
}

export default function Card({
    children,
    className,
    variant = "gray",
    ...props
}: CardProps) {
    const baseStyles = "rounded-[2rem] p-8 overflow-hidden transition-all duration-500";

    const variants = {
        gray: "bg-[#F5F5F7]",
        white: "bg-white border border-gray-200",
    };

    return (
        <div className={clsx(baseStyles, variants[variant], className)} {...props}>
            {children}
        </div>
    );
}
