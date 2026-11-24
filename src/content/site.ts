// Everything on the site lives here. Change the text, add projects, update your
// experience, and the pages follow. Case study write-ups are MDX files in
// src/content/projects, named after each project's slug.

export const site = {
  name: "Ines Calder",
  initials: "IC",
  role: "Product engineer",
  location: "Portland, Oregon",
  // Used for the sitemap, robots.txt and social previews. NEXT_PUBLIC_SITE_URL overrides it.
  url: "https://example.com",
  title: "Ines Calder, product engineer",
  description:
    "Ines Calder is a product engineer who designs and builds calm, fast interfaces for tools people use all day.",
  availability: "Booking projects for spring 2027",
  email: "hello@inescalder.example",
  headline: "I build calm, fast software for people who use it all day.",
  intro:
    "Product engineer with nine years across design systems, data-heavy dashboards and the small details that make software feel considered. I work best at the seam between design and code.",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Resume", href: "/#resume" },
    { label: "Contact", href: "/#contact" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Read.cv", href: "https://read.cv/" },
  ],
  // Optional: put your CV PDF in /public and point to it here, or leave empty to hide the button.
  cvFile: "",
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  // Colors for the generated cover art, and which pattern to draw.
  cover: { from: string; to: string; ink: string; pattern: "orbits" | "grid" | "waves" | "bars" };
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "harborline-dispatch",
    title: "Harborline Dispatch",
    client: "Harborline Freight",
    year: "2026",
    role: "Lead engineer",
    summary:
      "A live dispatch board that cut the time to reassign a delayed truck from six minutes to under one.",
    stack: ["React", "TypeScript", "WebSockets", "Postgres"],
    cover: { from: "#1f3a5f", to: "#0f1d30", ink: "#f2b880", pattern: "orbits" },
    link: { label: "Product tour", href: "https://example.com" },
  },
  {
    slug: "fernway-design-system",
    title: "Fernway Design System",
    client: "Fernway Health",
    year: "2025",
    role: "Design engineer",
    summary:
      "Sixty accessible components and a token pipeline shared by four product teams and two brands.",
    stack: ["React", "CSS custom properties", "Storybook", "Figma tokens"],
    cover: { from: "#e9dcc3", to: "#cdb892", ink: "#2c4a3e", pattern: "grid" },
  },
  {
    slug: "tidepool-notes",
    title: "Tidepool Notes",
    client: "Side project",
    year: "2024",
    role: "Designer and developer",
    summary:
      "An offline-first notes app for field researchers that syncs when signal returns, without losing a word.",
    stack: ["SvelteKit", "IndexedDB", "CRDTs", "Service workers"],
    cover: { from: "#2e5d58", to: "#173431", ink: "#d7f0e4", pattern: "waves" },
    link: { label: "Source code", href: "https://github.com/" },
  },
  {
    slug: "ledgerly-insights",
    title: "Ledgerly Insights",
    client: "Ledgerly",
    year: "2023",
    role: "Senior frontend engineer",
    summary:
      "Reporting for small business owners, rebuilt so a year of transactions charts in under 200 milliseconds.",
    stack: ["Next.js", "D3", "Web Workers", "Rust (WASM)"],
    cover: { from: "#d9480f", to: "#8f2d07", ink: "#fbe8d8", pattern: "bars" },
  },
];

export const about = {
  paragraphs: [
    "I started out designing posters and ended up writing the code that ships them. That path left me with a habit of caring about the last five percent: the loading state nobody designed, the keyboard shortcut a power user will thank you for, the error message that tells people what to do next.",
    "These days I lead small product teams from first sketch to production. I like problems where the data is messy, the users are busy, and the interface has to stay out of the way.",
  ],
  facts: [
    { label: "Based in", value: "Portland, Oregon" },
    { label: "Currently", value: "Independent, working with two teams" },
    { label: "Previously", value: "Ledgerly, Fernway Health" },
    { label: "Off screen", value: "Letterpress, trail running, bad sourdough" },
  ],
};

export const experience = [
  {
    period: "2025 to now",
    role: "Independent product engineer",
    company: "Calder Studio",
    detail:
      "Embedded with early-stage teams to design and ship their first serious product surface. Clients include logistics, health and climate startups.",
  },
  {
    period: "2022 to 2025",
    role: "Staff design engineer",
    company: "Fernway Health",
    detail:
      "Led the design system used by four teams. Cut UI bugs reported by support by 41 percent and brought the patient app to WCAG 2.2 AA.",
  },
  {
    period: "2019 to 2022",
    role: "Senior frontend engineer",
    company: "Ledgerly",
    detail:
      "Rebuilt reporting and the invoicing editor. Introduced performance budgets and a weekly accessibility review.",
  },
  {
    period: "2017 to 2019",
    role: "Frontend developer",
    company: "Northgate Digital",
    detail:
      "Built marketing sites and internal tools for regional nonprofits and universities.",
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "CSS", "SQL", "Rust"] },
  { group: "Frameworks", items: ["React", "Next.js", "Svelte", "Node.js", "Astro"] },
  { group: "Craft", items: ["Design systems", "Accessibility", "Data visualization", "Performance"] },
  { group: "Tools", items: ["Figma", "Postgres", "Playwright", "Storybook", "GitHub Actions"] },
];

export const education = [
  { period: "2013 to 2017", title: "BFA, Graphic Design", place: "Willamette School of Art" },
];
