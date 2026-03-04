"use client";

import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { photos, videos } from "@/data/hobbies";
import Image from "next/image";
import { Camera, Film, X } from "lucide-react";
import Card from "@/components/Card";
import Button from "@/components/Button";
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
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-massive-header text-[var(--color-text-primary)]">
                            Hobbies
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
                            When I&apos;m not coding, I express creativity through photography and filmmaking.
                        </p>
                    </SectionReveal>
                </div>
            </section>

            {/* Tab switcher */}
            <section className="pb-24 lg:pb-32">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <SectionReveal>
                        <div className="flex gap-4 mb-16">
                            <Button
                                variant={activeTab === "photography" ? "solid" : "outline"}
                                onClick={() => setActiveTab("photography")}
                                className="!px-6 !py-2.5 !text-sm gap-2"
                            >
                                <Camera size={16} />
                                Photography
                            </Button>
                            <Button
                                variant={activeTab === "filming" ? "solid" : "outline"}
                                onClick={() => setActiveTab("filming")}
                                className="!px-6 !py-2.5 !text-sm gap-2"
                            >
                                <Film size={16} />
                                Filming
                            </Button>
                        </div>
                    </SectionReveal>

                    <div className="transition-all duration-300">
                        {activeTab === "photography" ? (
                            <div key="photography" className="animate-fade-in">
                                {/* Masonry Layout for Photography (Using CSS Columns for simple masonry) */}
                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                                    {photos.map((photo) => (
                                        <div key={photo.id} className="break-inside-avoid">
                                            <Card variant="gray" className="!p-3 sm:!p-4 !rounded-[2rem] hover:-translate-y-1 group">
                                                <div
                                                    className="relative bg-white rounded-3xl overflow-hidden cursor-pointer"
                                                    onClick={() => setLightboxImage(photo.src)}
                                                >
                                                    <Image
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        width={600}
                                                        height={800} // Using a generic height to allow next/image to naturally scale in layout="responsive" although we use auto/object-cover below. 
                                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                                        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                                            View Full
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="px-3 pt-4 pb-1">
                                                    <p className="text-sm font-semibold text-[var(--color-text-primary)] leading-tight mb-1">
                                                        {photo.alt}
                                                    </p>
                                                    {photo.category && (
                                                        <p className="text-xs text-[var(--color-accent)] font-medium uppercase tracking-wider">
                                                            {photo.category}
                                                        </p>
                                                    )}
                                                </div>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div key="filming" className="animate-fade-in">
                                {/* Grid Layout for Videos */}
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {videos.map((video, i) => (
                                        <SectionReveal key={video.id} delay={i * 0.1}>
                                            <Card variant="white" className="h-full flex flex-col !p-4 !rounded-[2.5rem] group hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-border-hover)]">
                                                <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-5 bg-[var(--color-bg-secondary)]">
                                                    {/* Using a placeholder <video> tag as requested. It's set to muted/loop/playsInline to run quietly. */}
                                                    <video
                                                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                                                        poster={video.poster}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        muted
                                                        loop
                                                        playsInline
                                                        controls
                                                    />
                                                </div>
                                                <div className="px-3 pb-3 flex-1 flex flex-col">
                                                    <h3 className="text-xl font-bold font-display text-[var(--color-text-primary)] mb-2">
                                                        {video.title}
                                                    </h3>
                                                    <p className="text-sm text-[var(--color-text-secondary)] mb-4 flex-1">
                                                        {video.description}
                                                    </p>
                                                    {video.tags && (
                                                        <div className="flex flex-wrap gap-2">
                                                            {video.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </Card>
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
                        className="relative max-w-5xl max-h-[90vh] w-full aspect-[4/3]"
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
