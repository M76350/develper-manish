import heroImg from "@/assets/hero-illustration.jpg";
import dairyImg from "@/assets/dairy-tech-diagram.jpg";

export type ProjectType = "Web" | "Mobile" | "Full-Stack" | "IoT";

export interface ProjectMeta {
  slug: string;
  title: string;
  type: ProjectType;
  role: string;
  tagline: string;
  tech: string[];
  outcomes: string[];
  date: string; // ISO
  thumbnail: string; // path to image
  repo?: string;
  live?: string;
}

export const projects: ProjectMeta[] = [
  {
    slug: "milksync",
    title: "MilkSync — Dairy Collection Mobile App",
    type: "IoT",
    role: "Lead dev, Full‑Stack",
    tagline:
      "Real-time dairy collection with offline-first sync and IoT integration.",
    tech: ["React Native (Expo)", "Node.js", "MongoDB", "WebSockets"],
    outcomes: [
      "Reduced collection errors by 42%",
      "Offline-first with conflict resolution",
      "Real-time sync across devices",
    ],
    date: "2024-07-01",
    thumbnail: dairyImg,
    repo: "https://github.com/",
  },
  {
    slug: "shopswift",
    title: "ShopSwift — E-commerce PWA",
    type: "Web",
    role: "Frontend + Performance",
    tagline: "High-conversion storefront with blazing performance.",
    tech: ["Next.js", "TailwindCSS", "Vercel", "Stripe"],
    outcomes: ["TTI down 60%", "Checkout conversion +18%"],
    date: "2024-05-10",
    thumbnail: "/placeholder.svg",
    live: "https://example.com",
  },
  {
    slug: "fleettrack",
    title: "FleetTrack — Delivery Dashboard",
    type: "Full-Stack",
    role: "Backend & Map Integration",
    tagline: "Operational visibility and route optimization.",
    tech: ["Node.js", "Postgres", "Redis", "Mapbox"],
    outcomes: ["30% route optimization savings"],
    date: "2023-12-20",
    thumbnail: "/placeholder.svg",
  },
  {
    slug: "portfolio-revamp",
    title: "Portfolio Revamp (This site)",
    type: "Web",
    role: "Designer & Developer",
    tagline: "Modern portfolio with performance & accessibility focus.",
    tech: ["React", "Framer Motion", "Three.js"],
    outcomes: ["Lighthouse 90+/90+/90+"],
    date: "2025-01-01",
    thumbnail: heroImg,
  },
  {
    slug: "chatassist",
    title: "ChatAssist — Real-time Chat Tool",
    type: "Full-Stack",
    role: "Full Stack",
    tagline: "Low-latency chat at scale.",
    tech: ["Socket.io", "Redis", "Docker", "Kubernetes"],
    outcomes: ["Sub-100ms latency under 500 concurrent users"],
    date: "2023-09-15",
    thumbnail: "/placeholder.svg",
  },
  {
    slug: "ui-animator",
    title: "OpenSource Lib — ui-animator",
    type: "Web",
    role: "Maintainer",
    tagline: "Tiny animation helpers for UI.",
    tech: ["TypeScript", "Rollup", "Jest"],
    outcomes: ["1k+ weekly downloads", "120 GitHub stars"],
    date: "2023-04-03",
    thumbnail: "/placeholder.svg",
    repo: "https://github.com/",
  },
];

export default projects;
