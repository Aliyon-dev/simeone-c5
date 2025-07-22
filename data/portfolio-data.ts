import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
  id: "zitfuse",
  title: "ZitFuse",
  description:
    "An e-learning platform designed to support university students by providing easy access to tutorials, course lectures, and subject-specific resources.",
  category: "EdTech",
  year: "2025",
  image: "/zitfuse-hero.png?height=600&width=800&text=ZitFuse",
  tags: ["UX Research", "UI Design", "Prototyping", "Case Study"],
  hasFullCaseStudy: true,
  slug: '/zitfuse',
  gallery: [
    {
      id: "zf1",
      url: "/placeholder.svg?height=800&width=1200&text=ZitFuse+Dashboard",
      caption: "Student dashboard showcasing enrolled courses",
      category: "Web Design",
    },
    {
      id: "zf2",
      url: "/placeholder.svg?height=800&width=1200&text=ZitFuse+Mobile",
      caption: "Mobile-friendly learning interface",
      category: "Mobile Design",
    },
    {
      id: "zf3",
      url: "/placeholder.svg?height=800&width=1200&text=ZitFuse+Research",
      caption: "User research and persona insights",
      category: "Research",
    },
  ],
},
{
  id: "fynt",
  title: "Fynt",
  description:
    "A personal finance assistant that simplifies savings, tracks expenses, and helps users achieve financial wellness through automation.",
  category: "Fintech",
  year: "2024",
  image: "/fynt.jpg?height=600&width=800&text=Fynt",
  tags: ["UI Design", "User Flow", "Budgeting", "Prototyping"],
  hasFullCaseStudy: false,
  gallery: [
    {
      id: "fy1",
      url: "/placeholder.svg?height=800&width=1200&text=Fynt+Dashboard",
      caption: "Overview dashboard showing savings and expenses",
      category: "Web Design",
    },
    {
      id: "fy2",
      url: "/placeholder.svg?height=800&width=1200&text=Fynt+Mobile",
      caption: "Mobile-first design with quick actions",
      category: "Mobile Design",
    },
    {
      id: "fy3",
      url: "/placeholder.svg?height=800&width=1200&text=Fynt+Flow",
      caption: "User journey flow and wireframes",
      category: "UX",
    },
  ],
},
{
  id: "smartcast",
  title: "SmartCast",
  description:
    "A secure smart voting system designed to enable transparent, tamper-proof digital elections using modern web technologies and authentication protocols.",
  category: "GovTech",
  year: "2024",
  image: "/smart-cast.jpg?height=600&width=800&text=SmartCast",
  tags: ["UI Design", "E-voting", "Secure Login", "Digital Democracy"],
  hasFullCaseStudy: false,
  gallery: [
    {
      id: "sc1",
      url: "/placeholder.svg?height=800&width=1200&text=SmartCast+Dashboard",
      caption: "Admin dashboard for managing elections and viewing results",
      category: "Web Design",
    },
    {
      id: "sc2",
      url: "/placeholder.svg?height=800&width=1200&text=SmartCast+Voting+Interface",
      caption: "User interface for casting votes securely",
      category: "Web Design",
    },
    {
      id: "sc3",
      url: "/placeholder.svg?height=800&width=1200&text=SmartCast+Mobile",
      caption: "Mobile version of the voting platform",
      category: "Mobile Design",
    },
  ],
}


]

// Export both for compatibility
export const portfolioData = projects
