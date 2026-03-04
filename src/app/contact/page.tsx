"use client";

import { useState } from "react";
import clsx from "clsx";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import LinkButton from "@/components/LinkButton";
import { socials, contactEmail } from "@/data/socials";
import { Copy, Check, Mail } from "lucide-react";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(contactEmail);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
            const textarea = document.createElement("textarea");
            textarea.value = contactEmail;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <PageTransition>
            <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen">
                <div className="mx-auto max-w-lg px-6 lg:px-8">
                    <SectionReveal>
                        <div className="text-center mb-12">
                            <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] mb-4">
                                Say Hello
                            </p>
                            <h1
                                className="text-4xl sm:text-5xl font-bold tracking-tight"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Get in Touch
                            </h1>
                            <p className="mt-4 text-[var(--color-text-secondary)]">
                                {/* ← REPLACE intro */}
                                Feel free to reach out through any of the platforms below. I&apos;m always open to new conversations and opportunities.
                            </p>
                        </div>
                    </SectionReveal>

                    {/* Social link buttons */}
                    <div className="space-y-3 mb-8">
                        {socials.map((social, i) => (
                            <LinkButton
                                key={social.id}
                                label={social.label}
                                url={social.url}
                                icon={social.icon}
                                index={i}
                            />
                        ))}
                    </div>

                    {/* Copy email button */}
                    <SectionReveal delay={0.4}>
                        <button
                            onClick={handleCopyEmail}
                            className="flex items-center gap-4 w-full max-w-md mx-auto p-4 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-accent-secondary)]/10 border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/40 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/20">
                                <Mail
                                    size={20}
                                    className="text-[var(--color-accent)]"
                                />
                            </div>
                            <div className="flex-1 text-left">
                                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                                    {contactEmail}
                                </p>
                                <p className="text-xs text-[var(--color-text-muted)]">
                                    Click to copy
                                </p>
                            </div>
                            <div className="text-[var(--color-accent)]">
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                            </div>
                        </button>
                    </SectionReveal>

                    {/* Status message */}
                    <p
                        className={clsx(
                            "text-center text-sm text-[var(--color-accent)] mt-4 transition-opacity duration-300",
                            copied ? "opacity-100" : "opacity-0"
                        )}
                    >
                        Email copied to clipboard!
                    </p>
                </div>
            </section>
        </PageTransition>
    );
}
