import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: "financeflow",
    title: "FinanceFlow",
    description:
      "A comprehensive financial management platform that helps users track expenses, set budgets, and achieve their financial goals.",
    category: "Fintech",
    year: "2024",
    image: "/placeholder.svg?height=600&width=800&text=FinanceFlow",
    tags: ["UX Research", "UI Design", "Prototyping", "User Testing"],
    hasFullCaseStudy: true,
    gallery: [
      {
        id: "ff1",
        url: "/placeholder.svg?height=800&width=1200&text=FinanceFlow+Dashboard",
        caption: "Main dashboard showing financial overview",
        category: "Web Design",
      },
      {
        id: "ff2",
        url: "/placeholder.svg?height=800&width=1200&text=FinanceFlow+Mobile",
        caption: "Mobile app interface",
        category: "Mobile Design",
      },
    ],
  },
  {
    id: "ecomarket",
    title: "EcoMarket",
    description:
      "An e-commerce platform focused on sustainable and eco-friendly products, connecting conscious consumers with green brands.",
    category: "E-commerce",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800&text=EcoMarket",
    tags: ["E-commerce", "Sustainability", "Mobile Design", "Brand Identity"],
    hasFullCaseStudy: false,
    gallery: [
      {
        id: "em1",
        url: "/placeholder.svg?height=800&width=1200&text=EcoMarket+Homepage",
        caption: "Homepage design with sustainable product showcase",
        category: "Web Design",
      },
      {
        id: "em2",
        url: "/placeholder.svg?height=800&width=1200&text=EcoMarket+Product+Page",
        caption: "Product detail page with sustainability metrics",
        category: "Web Design",
      },
      {
        id: "em3",
        url: "/placeholder.svg?height=800&width=1200&text=EcoMarket+Mobile+App",
        caption: "Mobile shopping experience",
        category: "Mobile Design",
      },
      {
        id: "em4",
        url: "/placeholder.svg?height=800&width=1200&text=EcoMarket+Research",
        caption: "User research and persona development",
        category: "Research",
      },
    ],
  },
  {
    id: "teamsync",
    title: "TeamSync",
    description:
      "A collaborative workspace platform that streamlines team communication and project management for remote teams.",
    category: "Productivity",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800&text=TeamSync",
    tags: ["Collaboration", "Remote Work", "Dashboard Design", "User Experience"],
    hasFullCaseStudy: false,
    gallery: [
      {
        id: "ts1",
        url: "/placeholder.svg?height=800&width=1200&text=TeamSync+Dashboard",
        caption: "Main collaboration dashboard",
        category: "Web Design",
      },
      {
        id: "ts2",
        url: "/placeholder.svg?height=800&width=1200&text=TeamSync+Chat",
        caption: "Integrated chat and messaging system",
        category: "Web Design",
      },
      {
        id: "ts3",
        url: "/placeholder.svg?height=800&width=1200&text=TeamSync+Mobile",
        caption: "Mobile app for on-the-go collaboration",
        category: "Mobile Design",
      },
      {
        id: "ts4",
        url: "/placeholder.svg?height=800&width=1200&text=TeamSync+Wireframes",
        caption: "Initial wireframes and user flow",
        category: "Research",
      },
      {
        id: "ts5",
        url: "/placeholder.svg?height=800&width=1200&text=TeamSync+Prototypes",
        caption: "Interactive prototypes and testing",
        category: "Prototyping",
      },
    ],
  },
]

// Export both for compatibility
export const portfolioData = projects
