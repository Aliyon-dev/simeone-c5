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
    caseStudyUrl: "/case-studies/financeflow",
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
    caseStudyUrl: "/case-studies/ecomarket",
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
    caseStudyUrl: "/case-studies/teamsync",
  },
]
