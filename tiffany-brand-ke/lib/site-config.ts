export const siteConfig = {
  brand: "TyffDevs",
  tagline: "Web, mobile & custom software for Kenyan businesses",
  whatsappNumber: "254742649048", 
  email: "tiffaanywangari@gmail.com", 
  githubUsername: "devbytiffany",
  currency: "KES",
};

export const services = [
  {
    title: "Business Websites",
    description:
      "Clean, mobile-first websites that make a small business look as credible as a big one.",
  },
  {
    title: "E-Commerce & M-Pesa Payments",
    description:
      "Online stores with real STK Push checkout, not just a 'contact us to pay' form.",
  },
  {
    title: "Custom Web & Mobile Apps",
    description:
      "Tailored booking systems, dashboards, and internal tools built around how your business actually works.",
  },
  {
    title: "Hardware & IoT Prototypes",
    description:
      "Arduino-based sensors, displays, and connected devices for businesses that need software to meet the physical world.",
  },
];

export const projects = [
  {
    name: "Nexus Commerce",
    status: "In progress",
    stack: "FastAPI · Flutter · M-Pesa Daraja · Stripe · Supabase",
    description:
      "Full-stack e-commerce app with real-time order confirmations over WebSockets and a working M-Pesa STK Push payment flow.",
    link: "https://github.com/devbytiffany/nexus-commerce",
  },
  {
    name: "StockFlow",
    status: "Shipped",
    stack: "FastAPI · async SQLAlchemy 2.0 · JWT · Jinja2 · Chart.js",
    description:
      "Inventory and order management system with role-based admin access and a server-rendered analytics dashboard.",
    link: "https://github.com/devbytiffany/stockflow",
  },
  {
    name: "Focus Sphere",
    status: "Live",
    stack: "React · Node.js/Express · PostgreSQL · Supabase",
    description:
      "Productivity app with task/category management, focus session tracking, and a custom countdown timer with SVG progress ring.",
    link: "https://focus-sphere.onrender.com",
  },
  {
    name: "HireHub",
    status: "In progress",
    stack: "Next.js · TypeScript · Prisma · Neon · Socket.io · M-Pesa Daraja",
    description:
      "Freelance marketplace platform with client/freelancer/admin roles and real-time messaging.",
    link: "https://github.com/devbytiffany/hirehub",
  },
];

export const process = [
  {
    title: "Discovery call",
    description: "A short conversation about what your business actually needs, free of charge.",
  },
  {
    title: "Proposal & build",
    description: "A clear scope and timeline, then focused work with progress updates as it develops.",
  },
  {
    title: "Delivery & support",
    description: "Handover, a walkthrough of how everything works, and support after launch.",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Flutter",
  "Python",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Next.js",
  "JavaScipt",
  "Flask",
  "MongoDB",
];

// Placeholder tiers - adjust to whatever you're comfortable charging.
export const pricing = [
  {
    tier: "Starter",
    price: "25,000",
    description: "A single-page site to get a small business online.",
    features: ["1-page responsive site", "WhatsApp contact button", "Basic SEO setup"],
  },
  {
    tier: "Business",
    price: "55,000",
    description: "A multi-page site for a business ready to look established.",
    features: ["Up to 5 pages", "Content management", "Contact form + email routing"],
    featured: true,
  },
  {
    tier: "Scale",
    price: "75,000+",
    description: "E-commerce or a custom app with real payment processing.",
    features: ["M-Pesa & card payments", "Admin dashboard", "Ongoing support available"],
  },
];
