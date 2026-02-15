export interface Experience {
    slug: string;
    company: string;
    role: string;
    period: string;
    description: string;
    longDescription: string;
    stack: string[];
    gallery: string[];
}

export const experiences: Experience[] = [
    {
        slug: "lapi-divusi",
        company: "PT LAPI Divusi",
        role: "Full Stack Developer",
        period: "Sep 2024 - Present",
        description: "Developing scalable web applications and digital solutions.",
        longDescription: "At PT LAPI Divusi, I focus on building high-performance, enterprise-grade web applications. My work involves designing robust backends with Laravel and PostgreSQL, while creating dynamic, responsive frontends using React and Inertia.js. I am also responsible for maintaining CI/CD pipelines and ensuring smooth deployments using Docker.",
        stack: ["React", "Laravel", "PostgreSQL", "Docker", "Inertia.js"],
        gallery: [
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        slug: "airi-indonesia",
        company: "PT Airi Indonesia Ragam Inovasi",
        role: "Co-founder & BizDev",
        period: "Present",
        description: "Leading business development and strategic partnerships for tech innovations.",
        longDescription: "As a Co-founder and BizDev Lead at AIRI, I bridge the gap between technology and business. I lead strategic initiatives to form partnerships with key stakeholders, manage product roadmaps, and ensure that our technical innovations align with market needs. My role is pivotal in driving growth and operational excellence for our startup ventures.",
        stack: ["Business Strategy", "Product Management", "Tech Leadership", "Market Analysis"],
        gallery: [
            "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    }
];
