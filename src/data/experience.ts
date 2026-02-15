import airi1 from '../assets/airi/airi1.jpeg';
import airi2 from '../assets/airi/airi2.jpeg';
import airi3 from '../assets/airi/airi3.jpeg';
import lapi1 from '../assets/lapi/lapi1.jpeg';
import lapi2 from '../assets/lapi/lapi2.jpeg';
import lapi3 from '../assets/lapi/lapi3.jpeg';

export interface Experience {
    slug: string;
    company: string;
    role: string;
    period: string;
    startDate: string; // ISO format or valid date string for calculation
    endDate?: string;  // Optional, if not Present
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
        period: "Aug 2024 - Present",
        startDate: "2024-08-01",
        description: "Developing scalable web applications and digital solutions.",
        longDescription: "At PT LAPI Divusi, I focus on building high-performance, enterprise-grade web applications. My work involves designing robust backends with Laravel and PostgreSQL, while creating dynamic, responsive frontends using React and Inertia.js. I am also responsible for maintaining CI/CD pipelines and ensuring smooth deployments using Docker.",
        stack: ["Laravel", "Vue JS", "MySQL", "GRC System"],
        gallery: [lapi1, lapi2, lapi3]
    },
    {
        slug: "airi-indonesia",
        company: "PT Airi Indonesia Ragam Inovasi",
        role: "Co-founder & BizDev",
        period: "May 2025 - Present",
        startDate: "2025-05-01",
        description: "Leading business development and strategic partnerships for tech innovations.",
        longDescription: "As a Co-founder and BizDev Lead at AIRI, I bridge the gap between technology and business. I lead strategic initiatives to form partnerships with key stakeholders, manage product roadmaps, and ensure that our technical innovations align with market needs. My role is pivotal in driving growth and operational excellence for our startup ventures.",
        stack: ["Business Strategy", "Product Management", "Tech Leadership", "Market Analysis"],
        gallery: [airi1, airi2, airi3]
    }
];
