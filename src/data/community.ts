// ═══════════════════════════════════════════
// COMMUNITY SERVICE DATA — Edit your entries here
// ═══════════════════════════════════════════

export interface CommunityEntry {
    id: string;
    role: string;
    organization: string;
    dates: string;
    description: string[];
    image?: string;
    tags?: string[];
}

export interface ImpactMetric {
    label: string;
    value: string;
    icon: string; // lucide-react icon name
}

// ── REPLACE with your real community service entries ──
export const communityEntries: CommunityEntry[] = [
    {
        id: "jci-director",
        role: "Director of Individual Development Committee",
        organization: "JCI Phnom Penh",
        dates: "Jan 2022 – Dec 2024",
        description: [
            "Led strategic planning and execution of individual development programs.",
            "Coordinated workshops and mentorship sessions for young professionals.",
            "Managed a team of volunteers to deliver impactful community initiatives.",
        ],
        image: "/images/community-1.jpg",
        tags: ["Leadership", "Development", "JCI"],
    },
    {
        id: "jci-chairperson",
        role: "Organising Chairperson — Young Leaders Program 2024",
        organization: "JCI Phnom Penh",
        dates: "Dec 2023 – Nov 2024",
        description: [
            "Designed and organized the annual Young Leaders Program with 100+ attendees.",
            "Secured partnerships and sponsorships to fund program activities.",
            "Mentored emerging leaders through structured development tracks.",
        ],
        image: "/images/community-2.jpg",
        tags: ["Event Management", "Youth Development", "JCI"],
    },
    {
        id: "jci-creative-lead",
        role: "Creative Team Lead — Marketing & Communication Commission",
        organization: "JCI Phnom Penh",
        dates: "Feb 2024 – Jul 2024",
        description: [
            "Directed all creative output for marketing campaigns and social media.",
            "Built a cohesive visual brand for the commission's digital presence.",
            "Trained team members in design tools and content strategy.",
        ],
        image: "/images/community-3.jpg",
        tags: ["Creative Direction", "Marketing", "JCI"],
    },
    {
        id: "community-volunteer",
        role: "Community Outreach Volunteer",
        organization: "Placeholder Initiative",
        dates: "2023 – Present",
        description: [
            "Participated in community clean-up and awareness campaigns.",
            "Supported educational programs for underprivileged youth.",
        ],
        image: "/images/community-4.jpg",
        tags: ["Volunteering", "Community"],
    },
];

// ── REPLACE with your real impact metrics ──
export const impactMetrics: ImpactMetric[] = [
    { label: "Events Hosted", value: "15+", icon: "Calendar" },
    { label: "People Reached", value: "500+", icon: "Users" },
    { label: "Years of Service", value: "3+", icon: "Clock" },
    { label: "Organizations", value: "4", icon: "Building" },
];
