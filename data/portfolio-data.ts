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
    caseStudyUrl: "/case-studies/smartcast",
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
]
