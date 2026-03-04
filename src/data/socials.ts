// ═══════════════════════════════════════════
// SOCIAL LINKS — Edit your links and email here
// ═══════════════════════════════════════════

export interface SocialLink {
    id: string;
    label: string;
    url: string;
    icon: string; // lucide-react icon name
    color?: string;
}

// ── REPLACE URLs with your real social links ──
export const socials: SocialLink[] = [
    {
        id: "facebook",
        label: "Facebook",
        url: "https://facebook.com/yourprofile", // ← Replace
        icon: "Facebook",
    },
    {
        id: "instagram",
        label: "Instagram",
        url: "https://instagram.com/yourprofile", // ← Replace
        icon: "Instagram",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile", // ← Replace
        icon: "Linkedin",
    },
    {
        id: "discord",
        label: "Discord",
        url: "https://discord.gg/yourserver", // ← Replace
        icon: "MessageCircle",
    },
    {
        id: "github",
        label: "GitHub",
        url: "https://github.com/yourprofile", // ← Replace
        icon: "Github",
    },
];

// ── REPLACE with your real email ──
export const contactEmail = "hello@youremail.com";
