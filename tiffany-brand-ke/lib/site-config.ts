export const siteConfig = {
  brand: "TyffDevs",
  currency: "KES",
  whatsappNumber: "254742649048", 
  email: "wahitotiffaany@gmail.com",
};

export const services=[
    {
        title: "Business Websites",
        description: "Clean, mobile-first websites that make small businesses look as credible as a big one.",
    },
    {
        title: "E-Commerce Stores",
        description:"Online stores with integrated payment systems, not just 'contact us to pay' forms.",
    },
    {
        title:"Custom Web & Mobile Apps",
        description:"Tailored booking systems, dashboards and internal tools built around how your business actually works.",
    },
    {
        title:"Hardware & IoT prototypes",
        description:"Arduino-based sensors, displays and connected devices for businesses that need software to meet the physical world.",
    },
];

export const process=[
    {
        title:"Discovery call",
        description:"A short conversation about what your business actually need, free of charge.",
    },
    {
        title:"Proposal & build",
        description:"A clear scope and timeline, then focused work with progress updates as it develops.",
    },
    {
        title:"Delivery & support",
        description:"Handover a walkthrough of how everything works, and support after launch"
    },
];

export const techStack = [
  { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Flutter", slug: "flutter", color: "02569B" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "FastAPI", slug: "fastapi", color: "009688" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Supabase", slug: "supabase", color: "3ECF8E" },
  { name: "HTML", slug: "html5", color: "E34F26" },
  { name: "CSS", slug: "css", color: "1572B6" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  { name: "Swift", slug: "swift", color: "F05138" },
  { name: "Django", slug: "django", color: "092E20" },
  { name: "Go", slug: "go", color: "00ADD8" },
  { name: "C", slug: "c", color: "A8B9CC" },
  { name: "C++", slug: "cplusplus", color: "00599C" },
  { name: "Angular", slug: "angular", color: "DD0031" },
  { name: "Flask", slug: "flask", color: "ffffff" },
];

export const pricing = [
  {
    tier: "Starter",
    price: "30,000",
    description: "Ideal for small businesses or personal websites.",
    features: ["5 Page Custom Website (Home, About, Services, Blog, Contact)", "Mobile Responsive Design", "Contact Form & Basic SEO Setup", "Social Media Integration", "Basic Security Setup", "1 Month Maintenance & Support", "2 Free Revisions"],
  },
  {
    tier: "Business",
    price: "60,000",
    description: "Optimized for growing SMEs and service businesses.",
    features: ["Everything in starter", "Upto 10 pages with Blog", "CMS Integration", "Advanced SEO & Analytics Setup", "Social Media & Marketing Tools", "Enhanced Security Features", "3 Months Maintenance & Support", "10 Free Revisions"],
    featured: true,
  },
  {
    tier: "Scale",
    price: "80,000+",
    description: "Comprehensive solution for businesses needing e-commerce & payments.",
    features: ["Everything in Business", "Full E-commerce Store(Unlimited Products)", "M-Pesa & Card Payments Integration", "Advanced Marketing & Automation Tools", "CRM Integration & Customer Management", "Premium Security & Backup System", "1 Year Priority Support", "Unlimited Revisions"],
    featured: false,
  },
];
