// ═══════════════════════════════════════════
// PROJECTS DATA — Edit your project entries here
// ═══════════════════════════════════════════

export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    category: "web" | "ui" | "experiments" | "learning";
    image: string;
    featured: boolean;
    link?: string;
    github?: string;
}

// ── REPLACE with your real projects ──
export const projects: Project[] = [
    {
        id: "proj-1",
        slug: "portfolio-website",
        title: "Personal Portfolio v2",
        description: "A premium personal portfolio with smooth animations and dark-mode aesthetics.",
        longDescription: "Built with Next.js, Tailwind CSS, and Framer Motion to create a futuristic developer portfolio.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        category: "web",
        image: "/images/project-1.jpg",
        featured: true,
        link: "#",
        github: "https://github.com/placeholder",
    },
    {
        id: "proj-2",
        slug: "ecommerce-dashboard",
        title: "E-Commerce Dashboard",
        description: "Analytics dashboard for tracking sales, inventory, and customer insights.",
        tags: ["React", "Chart.js", "Node.js", "MongoDB"],
        category: "web",
        image: "/images/project-2.jpg",
        featured: true,
        link: "#",
    },
    {
        id: "proj-3",
        slug: "brand-identity-system",
        title: "Brand Identity System",
        description: "Complete visual identity for a tech startup — logo, colors, typography, guidelines.",
        tags: ["Figma", "Illustrator", "Branding"],
        category: "ui",
        image: "/images/project-3.jpg",
        featured: true,
    },
    {
        id: "proj-4",
        slug: "weather-app",
        title: "Weather Forecast App",
        description: "Beautiful weather app with animated backgrounds and 7-day forecasts.",
        tags: ["React Native", "API", "Animations"],
        category: "experiments",
        image: "/images/project-4.jpg",
        featured: false,
    },
    {
        id: "proj-5",
        slug: "task-manager",
        title: "Task Manager Pro",
        description: "Drag-and-drop task management app with team collaboration features.",
        tags: ["Next.js", "Prisma", "PostgreSQL"],
        category: "web",
        image: "/images/project-5.jpg",
        featured: false,
        github: "https://github.com/placeholder",
    },
    {
        id: "proj-6",
        slug: "motion-library",
        title: "Motion Component Library",
        description: "Reusable animated UI components built with Framer Motion.",
        tags: ["React", "Framer Motion", "Storybook"],
        category: "experiments",
        image: "/images/project-6.jpg",
        featured: false,
        github: "https://github.com/placeholder",
    },
    {
        id: "proj-7",
        slug: "data-viz-platform",
        title: "Data Visualization Platform",
        description: "Interactive data exploration tool with charts, maps, and real-time updates.",
        tags: ["D3.js", "Python", "Flask", "WebSocket"],
        category: "learning",
        image: "/images/project-7.jpg",
        featured: false,
    },
    {
        id: "proj-8",
        slug: "social-media-ui",
        title: "Social Media UI Redesign",
        description: "Concept redesign of a social media app with focus on accessibility and delight.",
        tags: ["Figma", "Prototyping", "UI/UX"],
        category: "ui",
        image: "/images/project-8.jpg",
        featured: false,
    },
];

export const projectCategories = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "ui", label: "UI" },
    { key: "experiments", label: "Experiments" },
    { key: "learning", label: "Learning" },
] as const;
