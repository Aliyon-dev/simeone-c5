import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: "financeflow",
    title: "FinanceFlow Banking App",
    description:
      "Redesigned the mobile banking experience to reduce transaction time by 60% and increase user satisfaction scores. Led user research, prototyping, and usability testing with a focus on accessibility and speed.",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "FinanceFlow mobile app interface",
    category: "Mobile App",
    year: "2024",
    caseStudyUrl: "/projects/financeflow",
    hasFullCaseStudy: true,
  },
  {
    id: "ecomarket",
    title: "EcoMarket Shopping Platform",
    description:
      "Created an end-to-end shopping experience focused on sustainability. Implemented features that help users make eco-conscious purchasing decisions while maintaining high conversion rates and user engagement.",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "EcoMarket dashboard interface",
    category: "Web Platform",
    year: "2023",
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
    id: "teamsync",
    title: "TeamSync Collaboration Tool",
    description:
      "Designed a comprehensive project management tool that increased team productivity by 40%. Focused on intuitive workflows and seamless cross-platform experience with real-time collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "TeamSync dashboard interface",
    category: "SaaS Platform",
    year: "2023",
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
