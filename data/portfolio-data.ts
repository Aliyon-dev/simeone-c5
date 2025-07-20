import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: "Zitfuse",
    title: "ZitFuse E-learning Mobile App",
    description:
      "Redesigned the mobile E-learning experience for University Students to reduce transaction time by 60% and increase user satisfaction scores. Led user research, prototyping, and usability testing with a focus on accessibility and speed.",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "ZitFuse mobile app interface",
    category: "Mobile App",
    year: "2024",

    caseStudyUrl: "/projects/zitfuse",
    hasFullCaseStudy: true,
  },
  {
    id: "smartcast",
    title: "SmartCast Voting System",
    description:

      "Developed a secure, decentralized voting system that leverages blockchain to ensure transparency, auditability, and voter anonymity in school and organizational elections.",
    image: "/smart-cast.jpg?height=400&width=600",
    imageAlt: "SmartCast voting interface",
    category: "Blockchain Application",
    year: "2025",
    hasFullCaseStudy: false,
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "EcoMarket homepage design",
        caption: "Homepage featuring sustainable product recommendations",
        category: "Web Design",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Product listing page",
        caption: "Product grid with sustainability ratings",
        category: "Web Design",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Shopping cart interface",
        caption: "Cart showing environmental impact metrics",
        category: "Web Design",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Mobile app screens",
        caption: "Mobile companion app for on-the-go shopping",
        category: "Mobile Design",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "User research findings",
        caption: "Key insights from user interviews",
        category: "Research",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Design system components",
        caption: "Component library and style guide",
        category: "Design System",
      },
    ],
    
  },
  
  {
    id: "fynt",
    title: "Fynt Personal Finance Tracker",
    description:

      "Built a lightweight personal finance tool that helps users track income, expenses, and savings goals with visual insights and budgeting recommendations powered by AI.",
    image: "/Fynt.jpg?height=400&width=600",
    imageAlt: "Fynt finance tracking dashboard",
    category: "Fintech App",
    year: "2025",
    caseStudyUrl: "/case-studies/fynt",
  }
    hasFullCaseStudy: false,
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "TeamSync dashboard",
        caption: "Main dashboard with project overview",
        category: "Dashboard",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Task management interface",
        caption: "Kanban board for task organization",
        category: "Task Management",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Team collaboration features",
        caption: "Real-time chat and file sharing",
        category: "Collaboration",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Mobile app interface",
        caption: "Mobile app for remote team management",
        category: "Mobile Design",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Analytics dashboard",
        caption: "Team productivity metrics and insights",
        category: "Analytics",
      },
    ],
  },
]
