export interface Project {
    slug: string;
    title: string;
    desc: string;
    longDesc: string;
    tags: string[];
    img: string;
    link: string;
    gallery: string[];
}

export const projects: Project[] = [
    {
        slug: "cobit-2019",
        title: "COBIT 2019",
        desc: "Enterprise IT Governance Audit Tool.",
        longDesc: "A comprehensive tool designed for auditing and managing enterprise IT governance based on the COBIT 2019 framework. It helps organizations align their IT strategy with business goals, ensuring compliance and operational excellence.",
        tags: ["React", "Laravel", "Enterprise"],
        img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fcobit2019.divusi.co.id%2Flogin?w=1200",
        link: "https://cobit2019.divusi.co.id/login",
        gallery: [
            "https://s0.wp.com/mshots/v1/https%3A%2F%2Fcobit2019.divusi.co.id%2Flogin?w=1200",
            "https://images.unsplash.com/photo-1504868584819-f8e90526354a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1454165833767-027508496b4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        slug: "divusi-sso",
        title: "Divusi SSO",
        desc: "Single Sign On for Consulting Tools.",
        longDesc: "A centralized authentication system for various Divusi consulting tools. It provides a secure and unified login experience, reducing the need for multiple credentials across different platforms.",
        tags: ["Laravel", "Inertia.js", "Internal Tool"],
        img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fdivtools.divusi.co.id%2F?w=1200",
        link: "https://divtools.divusi.co.id/",
        gallery: [
            "https://s0.wp.com/mshots/v1/https%3A%2F%2Fdivtools.divusi.co.id%2F?w=1200",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        slug: "pmo-project-charter",
        title: "PMO Project Charter",
        desc: "Streamlined project management and chartering platform.",
        longDesc: "A platform dedicated to formalizing project initiations through digital project charters. It simplifies the PMO process by providing templates, approval workflows, and centralized project documentation.",
        tags: ["Laravel", "Inertia.js", "PMO"],
        img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fpmo-project-charter-main-iheynx.laravel.cloud%2F?w=1200",
        link: "https://pmo-project-charter-main-iheynx.laravel.cloud/",
        gallery: [
            "https://s0.wp.com/mshots/v1/https%3A%2F%2Fpmo-project-charter-main-iheynx.laravel.cloud%2F?w=1200",
            "https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        slug: "ldr-photobooth",
        title: "LDR Photobooth",
        desc: "Remote photobooth system using Cloudflare Workers and WebSockets for multi-user access.",
        longDesc: "An innovative IoT photobooth system that allows remote control and real-time interaction using WebSockets. Built on Cloudflare Workers for global scalability and low latency.",
        tags: ["Cloudflare Workers", "WebSockets"],
        img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fldr-photobooth.vercel.app%2F?w=1200",
        link: "https://ldr-photobooth.vercel.app/",
        gallery: [
            "https://s0.wp.com/mshots/v1/https%3A%2F%2Fldr-photobooth.vercel.app%2F?w=1200",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        slug: "pratama-global-export",
        title: "Pratama Global Export",
        desc: "International trade & export company profile website.",
        longDesc: "A professional company profile website for an international export business. It showcases products, company values, and facilitates global trade inquiries with a modern and responsive design.",
        tags: ["Bootstrap", "Global Trade"],
        img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fpratamaglobalekspor.netlify.app%2F?w=1200",
        link: "https://pratamaglobalekspor.netlify.app/",
        gallery: [
            "https://s0.wp.com/mshots/v1/https%3A%2F%2Fpratamaglobalekspor.netlify.app%2F?w=1200",
            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        slug: "panen-ku",
        title: "Panen-Ku",
        desc: "Agriculture marketplace connecting farmers to buyers.",
        longDesc: "A mobile-first agriculture marketplace that bridge the gap between farmers and consumers. It features real-time inventory management, secure payments, and route optimization for deliveries.",
        tags: ["React Native", "Firebase", "AgriTech"],
        img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fpanen-ku.vercel.app%2F?w=1200",
        link: "https://panen-ku.vercel.app/",
        gallery: [
            "https://s0.wp.com/mshots/v1/https%3A%2F%2Fpanen-ku.vercel.app%2F?w=1200",
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1488459718231-338aae38b79d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        slug: "chat-bot-semantic-ai",
        title: "Chat Bot Semantic AI",
        desc: "NLP-powered conversational AI assistant.",
        longDesc: "An intelligent chatbot that uses semantic analysis and NLP to provide human-like responses. It can be integrated into various platforms to automate customer support and information retrieval.",
        tags: ["Python", "NLP", "AI"],
        img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fchatbotsmartphone.vercel.app%2F?w=1200",
        link: "https://chatbotsmartphone.vercel.app/",
        gallery: [
            "https://s0.wp.com/mshots/v1/https%3A%2F%2Fchatbotsmartphone.vercel.app%2F?w=1200",
            "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1527433270417-66d3b304a872?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        slug: "space-runner-game",
        title: "Space Runner Game",
        desc: "3D browser-based infinite runner.",
        longDesc: "A fast-paced 3D infinite runner game built for the browser. It demonstrates advanced Three.js implementations, including physics, procedural environment generation, and custom shaders.",
        tags: ["Three.js", "WebGL", "Game Dev"],
        img: "https://s0.wp.com/mshots/v1/https%3A%2F%2Ftubes-uas-grafkom.vercel.app%2F?w=1200",
        link: "https://tubes-uas-grafkom.vercel.app/",
        gallery: [
            "https://s0.wp.com/mshots/v1/https%3A%2F%2Ftubes-uas-grafkom.vercel.app%2F?w=1200",
            "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    }
];
