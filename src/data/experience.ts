// ═══════════════════════════════════════════
// EXPERIENCE DATA — Edit your entries here
// ═══════════════════════════════════════════

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  dates: string;
  location?: string;
  type?: string; // e.g. "On-site", "Remote", "Hybrid"
  description: string[];
  tags?: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  dates: string;
  description?: string;
}

// ── REPLACE with your real experience entries ──
export const experiences: ExperienceEntry[] = [
  {
    id: "peer-mentor-uts",
    role: "Peer Mentor",
    organization: "UTS College",
    dates: "Aug 2025 – Present",
    location: "Sydney, NSW, Australia",
    type: "On-site",
    description: [
      "Provide academic and social guidance to new students transitioning into university life.",
      "Facilitate orientation sessions and workshops to improve student engagement.",
      "Assist in developing mentoring resources and feedback systems.",
    ],
    tags: ["Mentoring", "Education", "Leadership"],
  },
  {
    id: "web-dev-snp",
    role: "Web Developer",
    organization: "SNP-PT International Co.,Ltd",
    dates: "Dec 2025 – Mar 2026",
    location: "Phnom Penh, Cambodia",
    description: [
      "Designed, built, and optimized responsive websites for international clients.",
      "Developed React-based front-end interfaces with modern UI/UX patterns.",
      "Implemented SEO strategies and performance optimizations.",
    ],
    tags: ["React", "UI/UX", "SEO", "Web Development"],
  },
  {
    id: "creative-lead-woohu",
    role: "Creative Lead",
    organization: "WooHu Cambodia",
    dates: "Nov 2024 – Feb 2026",
    location: "Phnom Penh, Cambodia",
    description: [
      "Built full brand identities including logos, key visuals, and marketing assets.",
      "Led creative direction for campaigns across digital and print media.",
      "Collaborated with cross-functional teams on brand strategy and content creation.",
    ],
    tags: ["Branding", "Design", "Creative Direction"],
  },
  {
    id: "research-analyst-seabridge",
    role: "Market Research Analyst (Internship)",
    organization: "SEA Bridge",
    dates: "Jun 2025 – Sep 2025",
    description: [
      "Conducted targeted business research for ASEAN market expansion in Vietnam and Philippines.",
      "Analyzed market data and competitive landscapes to support strategic decisions.",
      "Prepared comprehensive reports and presentations for stakeholders.",
    ],
    tags: ["Research", "ASEAN", "Market Analysis"],
  },
];

// ── REPLACE with your real education entries ──
export const education: EducationEntry[] = [
  {
    id: "uts-diploma",
    institution: "University of Technology Sydney",
    degree: "Diploma of Information Technology",
    dates: "2025 – 2028",
    description:
      "Studying core IT fundamentals with a focus on software development and web technologies.",
  },
  {
    id: "itc-bachelor",
    institution: "Institute of Technology of Cambodia",
    degree: "Bachelor of Data Science (Applied Mathematics & Statistics)",
    dates: "2023 – 2025",
    description:
      "Focused on data analytics, statistical modeling, and applied mathematics.",
  },
];
