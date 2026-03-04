"use client";

import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { photos, videos } from "@/data/hobbies";
import Image from "next/image";
import { Camera, Film, Play, X } from "lucide-react";
import clsx from "clsx";

type Tab = "photography" | "filming";

export default function HobbiesPage() {
    const [activeTab, setActiveTab] = useState<Tab>("photography");
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <SectionReveal>
                        <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] mb-4">
                            Beyond Code
                        </p>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Hobbies
                        </h1>
                        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl">
                            When I&apos;m not coding, I express creativity through photography and filmmaking.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Tab switcher */}
            <section className="pb-24 lg:pb-32">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <SectionReveal>
                        <div className="flex gap-2 mb-12">
                            <TabButton
                                active={activeTab === "photography"}
                                onClick={() => setActiveTab("photography")}
                                icon={<Camera size={18} />}
                                label="Photography"
                            />
                            <TabButton
                                active={activeTab === "filming"}
                                onClick={() => setActiveTab("filming")}
                                icon={<Film size={18} />}
                                label="Filming"
                            />
                        </div>
                    </SectionReveal>

                    <div className="mt-8 transition-all duration-300">
                        {activeTab === "photography" ? (
                            <div key="photography" className="animate-fade-in">
                                {/* Photo Gallery Grid */}
                                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                                    {photos.map((photo) => (
                                        <div
                                            key={photo.id}
                                            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                                            onClick={() => setLightboxImage(photo.src)}
                                        >
                                            <div className="relative aspect-[4/3] bg-[var(--color-bg-tertiary)]">
                                                <Image
                                                    src={photo.src}
                                                    alt={photo.alt}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        {photo.alt}
                                                    </span>
                                                </div>
                                            </div>
                                            {photo.category && (
                                                <div className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-medium rounded-full bg-black/50 text-white/80 backdrop-blur-sm">
                                                    {photo.category}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div key="filming" className="animate-fade-in">
                                {/* Video Cards */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {videos.map((video, i) => (
                                        <SectionReveal key={video.id} delay={i * 0.1}>
                                            <div className="group glass-card overflow-hidden hover:border-[var(--color-border-hover)] hover:-translate-y-1 transition-all duration-500">
                                                {/* Poster with play overlay */}
                                                <div className="relative aspect-video bg-[var(--color-bg-tertiary)]">
                                                    <Image
                                                        src={video.poster}
                                                        alt={video.title}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                                                        <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-[var(--color-accent-glow)] transition-transform duration-300 group-hover:scale-110">
                                                            <Play
                                                                size={22}
                                                                className="text-white ml-1"
                                                                fill="white"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Info */}
                                                <div className="p-5">
                                                    <h3
                                                        className="text-lg font-bold text-[var(--color-text-primary)]"
                                                        style={{ fontFamily: "var(--font-display)" }}
                                                    >
                                                        {video.title}
                                                    </h3>
                                                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                                        {video.description}
                                                    </p>
                                                    {video.tags && (
                                                        <div className="mt-3 flex flex-wrap gap-2">
                                                            {video.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </SectionReveal>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
                        onClick={() => setLightboxImage(null)}
                    >
                        <X size={28} />
                    </button>
                    <div
                        className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={lightboxImage}
                            alt="Full view"
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </PageTransition>
    );
}

/* Tab Button subcomponent */
function TabButton({
    active,
    onClick,
    icon,
    label,
}: {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]",
                active
                    ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent-glow)]"
                    : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
            )}
        >
            {icon}
            {label}
        </button>
    );
}
