// ═══════════════════════════════════════════
// HOBBIES DATA — Edit your gallery & video entries here
// ═══════════════════════════════════════════

export interface PhotoEntry {
    id: string;
    src: string;
    alt: string;
    category?: string;
}

export interface VideoEntry {
    id: string;
    title: string;
    description: string;
    poster: string;
    videoUrl: string;
    tags?: string[];
}

// ── REPLACE with your real photography entries ──
export const photos: PhotoEntry[] = [
    { id: "photo-1", src: "/images/photo-1.jpg", alt: "Street photography in the city", category: "Street" },
    { id: "photo-2", src: "/images/photo-2.jpg", alt: "Golden hour landscape", category: "Landscape" },
    { id: "photo-3", src: "/images/photo-3.jpg", alt: "Portrait with natural light", category: "Portrait" },
    { id: "photo-4", src: "/images/photo-4.jpg", alt: "Architectural details", category: "Architecture" },
    { id: "photo-5", src: "/images/photo-5.jpg", alt: "Night city lights", category: "Street" },
    { id: "photo-6", src: "/images/photo-6.jpg", alt: "Sunset over the river", category: "Landscape" },
    { id: "photo-7", src: "/images/photo-7.jpg", alt: "Candid moment at event", category: "Portrait" },
    { id: "photo-8", src: "/images/photo-8.jpg", alt: "Minimalist composition", category: "Architecture" },
    { id: "photo-9", src: "/images/photo-9.jpg", alt: "Morning fog on the trail", category: "Landscape" },
];

// ── REPLACE with your real video entries ──
export const videos: VideoEntry[] = [
    {
        id: "video-1",
        title: "City Timelapse",
        description: "A cinematic timelapse of the city skyline at dusk.",
        poster: "/images/video-poster-1.jpg",
        videoUrl: "/videos/sample.mp4",
        tags: ["Timelapse", "City"],
    },
    {
        id: "video-2",
        title: "Travel Vlog — Cambodia",
        description: "Exploring the streets and culture of Phnom Penh.",
        poster: "/images/video-poster-2.jpg",
        videoUrl: "/videos/sample.mp4",
        tags: ["Travel", "Vlog"],
    },
    {
        id: "video-3",
        title: "Event Highlight Reel",
        description: "Highlights from the Young Leaders Program 2024.",
        poster: "/images/video-poster-3.jpg",
        videoUrl: "/videos/sample.mp4",
        tags: ["Event", "JCI"],
    },
    {
        id: "video-4",
        title: "Motion Design Showreel",
        description: "A collection of motion graphics and animation work.",
        poster: "/images/video-poster-4.jpg",
        videoUrl: "/videos/sample.mp4",
        tags: ["Motion", "Design"],
    },
];
