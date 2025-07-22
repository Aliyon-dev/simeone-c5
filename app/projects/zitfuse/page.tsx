"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectHero } from "@/components/project-hero"
import { ProjectSection } from "@/components/project-section"
import { ImageShowcase } from "@/components/image-showcase"
import { ProcessStep } from "@/components/process-step"
import { ResultsMetrics } from "@/components/results-metrics"
import { NextProject } from "@/components/next-project"
import { Search, Lightbulb, Palette, TestTube } from "lucide-react"
import { motion } from "framer-motion"
import { UserPersonas } from "@/components/user-personas"
import { UserJourney } from "@/components/user-journey"
import { DesignSystem } from "@/components/design-system"
import { TestingInsights } from "@/components/testing-insights"
import { ProjectTimeline } from "@/components/project-timeline"
import { LessonsLearned } from "@/components/lessons-learned"
import { TeamCredits } from "@/components/team-credits"

export default function FinanceFlowProject() {
  const processSteps = [
    {
      number: "01",
      title: "Research",
      description: "Understanding user pain points and market opportunities in mobile banking.",
      icon: <Search className="w-8 h-8" />,
      details: [
        "Conducted 15 user interviews with Students at the CopperBelt University Students",
        "Analyzed competitor apps and identified key gaps",
        "Created user personas based on research findings",
        "Mapped current user journey and pain points",
      ],
    },
    {
      number: "02",
      title: "Ideation",
      description: "Brainstorming solutions and defining the product strategy.",
      icon: <Lightbulb className="w-8 h-8" />,
      details: [
        "Facilitated design thinking workshops with stakeholders",
        "Created 'How Might We' statements for key problems",
        "Sketched initial concepts and user flows",
        "Prioritized features based on user impact and business value",
      ],
    },
    {
      number: "03",
      title: "Design",
      description: "Creating high-fidelity designs and interactive prototypes.",
      icon: <Palette className="w-8 h-8" />,
      details: [
        "Developed comprehensive design system and component library",
        "Created wireframes and high-fidelity mockups",
        "Built interactive prototypes for key user flows",
        "Ensured accessibility compliance and inclusive design",
      ],
    },
    {
      number: "04",
      title: "Testing",
      description: "Validating designs through user testing and iteration.",
      icon: <TestTube className="w-8 h-8" />,
      details: [
        "Conducted moderated usability testing with 12 participants",
        "A/B tested key interface elements and interactions",
        "Gathered feedback from internal stakeholders",
        "Iterated designs based on testing insights",
      ],
    },
  ]

  const metrics = [
    {
      value: "400%",
      label: "User retentions & Growth",
      description: "Increased user base from a mere 100 to over 4000+ students",
    },
    {
      value: "4.8★",
      label: "App Store Rating",
      description: "Improved from 3.2 to 4.8 stars after redesign",
    },
    {
      value: "85%",
      label: "User Satisfaction",
      description: "Increase in overall user satisfaction scores",
    },
  ]

  const showcaseImages = [
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "FinanceFlow mobile app screens",
      caption: "Key screens showing the new transaction flow",
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Zitfuse design",
      caption: "Redesigned dashboard with improved information hierarchy",
    },
  ]

  const personas = [
  {
    name: "Mukula Chikonde",
    age: "19",
    occupation: "First-Year University Student",
    bio: "A tech-savvy student who values quick access to course materials and a smooth mobile learning experience.",
    goals: [
      "Access lecture videos and notes instantly",
      "Stay updated with class schedules and announcements",
      "Use a mobile-friendly platform for on-the-go studying",
    ],
    frustrations: [
      "Slow-loading content",
      "Disorganized course layout",
      "Limited offline access to resources",
    ],
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mike Tembo",
    age: "25",
    occupation: "Part-Time Student & Working Professional",
    bio: "A busy professional pursuing a degree while managing work commitments. Needs flexibility and clarity in learning.",
    goals: [
      "Learn at his own pace through pre-recorded sessions",
      "Track progress and upcoming deadlines",
      "Easily download and organize materials for offline use",
    ],
    frustrations: [
      "No progress tracking dashboard",
      "Unclear module structure",
      "Lack of reminders or notifications for deadlines",
    ],
    avatar: "/placeholder.svg?height=80&width=80",
  },
]



  const journeySteps = [
    {
      phase: "Discovery",
      actions: ["Opens banking app", "Looks for transfer option", "Searches through menu"],
      thoughts: ["Where is the transfer button?", "This should be easier to find"],
      emotions: "frustrated" as const,
      opportunities: ["Make transfer more prominent", "Improve navigation hierarchy"],
    },
    {
      phase: "Setup",
      actions: ["Finds transfer option", "Enters recipient details", "Selects amount"],
      thoughts: ["Finally found it", "Hope this works quickly"],
      emotions: "neutral" as const,
      opportunities: ["Streamline recipient selection", "Add quick amount presets"],
    },
    {
      phase: "Completion",
      actions: ["Reviews details", "Confirms transfer", "Waits for confirmation"],
      thoughts: ["Did it go through?", "Why is this taking so long?"],
      emotions: "frustrated" as const,
      opportunities: ["Provide real-time feedback", "Show clear success states"],
    },
  ]

  const designSystemData = {
    colors: [
      { name: "Primary Blue", hex: "#2563EB", usage: "Primary actions, links" },
      { name: "Success Green", hex: "#10B981", usage: "Success states, confirmations" },
      { name: "Warning Orange", hex: "#F59E0B", usage: "Warnings, pending states" },
      { name: "Error Red", hex: "#EF4444", usage: "Errors, destructive actions" },
      { name: "Neutral Gray", hex: "#6B7280", usage: "Secondary text, borders" },
      { name: "Background", hex: "#F9FAFB", usage: "Page backgrounds, cards" },
    ],
    typography: [
      { name: "Heading 1", size: "32px", weight: "800", usage: "Page titles, main headings" },
      { name: "Heading 2", size: "24px", weight: "700", usage: "Section headings" },
      { name: "Body Large", size: "18px", weight: "500", usage: "Important body text" },
      { name: "Body Regular", size: "16px", weight: "400", usage: "Regular body text" },
      { name: "Caption", size: "14px", weight: "500", usage: "Labels, captions" },
    ],
    components: [
      {
        name: "Primary Button",
        description: "Main call-to-action buttons",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Input Field",
        description: "Form inputs with validation",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Course Card",
        description: "Individual transaction display",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  const testingData = {
    methodology: [
      "Moderated usability testing with 12 participants",
      "A/B testing of key interface elements",
      "Heuristic evaluation by UX experts",
      "Accessibility testing with screen readers",
      "Performance testing on various devices",
    ],
    insights: [
      {
        type: "success" as const,
        title: "Improved Task Completion",
        description: "Users completed money transfers 60% faster with the new design",
        metric: "60% faster",
        action: "Implemented streamlined flow in final design",
      },
      {
        type: "issue" as const,
        title: "Confusion with Navigation",
        description: "25% of users had difficulty finding the settings menu",
        metric: "25% struggled",
        action: "Redesigned navigation with clearer labels and icons",
      },
      {
        type: "neutral" as const,
        title: "Mixed Feedback on Colors",
        description: "Some users preferred the original blue color scheme",
        action: "Conducted additional color preference testing",
      },
    ],
  }

  const timelineData = [
    {
      phase: "Research & Discovery",
      duration: "3 weeks",
      activities: ["User interviews", "Competitive analysis", "Stakeholder workshops"],
      deliverables: ["Research report", "User personas", "Journey maps"],
    },
    {
      phase: "Ideation & Strategy",
      duration: "2 weeks",
      activities: ["Design thinking workshops", "Feature prioritization", "Information architecture"],
      deliverables: ["Feature roadmap", "Site map", "User flows"],
    },
    {
      phase: "Design & Prototyping",
      duration: "6 weeks",
      activities: ["Wireframing", "Visual design", "Interactive prototyping"],
      deliverables: ["Design system", "High-fidelity mockups", "Interactive prototype"],
    },
    {
      phase: "Testing & Iteration",
      duration: "3 weeks",
      activities: ["Usability testing", "A/B testing", "Design refinements"],
      deliverables: ["Testing report", "Final designs", "Handoff documentation"],
    },
  ]

  const lessonsData = [
    {
      type: "success" as const,
      title: "User-Centered Approach",
      description: "Starting with extensive user research led to more targeted solutions and better outcomes.",
    },
    {
      type: "success" as const,
      title: "Iterative Design Process",
      description: "Regular testing and iteration helped us catch and fix usability issues early.",
    },
    {
      type: "challenge" as const,
      title: "Technical Constraints",
      description: "Some design ideas had to be simplified due to development timeline constraints.",
    },
    {
      type: "challenge" as const,
      title: "Stakeholder Alignment",
      description: "Getting all stakeholders aligned on priorities took longer than expected.",
    },
    {
      type: "insight" as const,
      title: "Accessibility First",
      description: "Designing for accessibility from the start improved the experience for all users.",
    },
    {
      type: "insight" as const,
      title: "Performance Matters",
      description: "Even small improvements in app speed had significant impact on user satisfaction.",
    },
  ]

  const teamData = [
    {
      name: "Aliyon Tembo",
      role: "Lead UX Designer",
      avatar: "/placeholder.svg?height=64&width=64",
      contribution: "Led user research, created design system, and designed key user flows",
    },
    {
      name: "Amos Kanyanta",
      role: "Backend Engineer",
      avatar: "/placeholder.svg?height=64&width=64",
      contribution: "Created visual designs, illustrations, and maintained design consistency",
    },
    {
      name: "Chiyesu Mashimbwa",
      role: "Frontend Engineer",
      avatar: "/placeholder.svg?height=64&width=64",
      contribution: "Conducted user interviews, usability testing, and data analysis",
    },
    {
      name: "Joshua Sibanda",
      role: "Web Designer",
      avatar: "/placeholder.svg?height=64&width=64",
      contribution: "Defined requirements, managed timeline, and coordinated with development team",
    },
  ]

  return (
    <motion.div
      className="min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header designerName="Aliyon Tembo" title="Designer" />

      <ProjectHero
        title="ZitFuse Mobile App Redesign"
        subtitle="Redesigning Zitfuse Ed-tech Application to make Learning faster, simpler, and more accessible for everyday University Students."
        category="Mobile App"
        year="2024"
        duration="4 months"
        role="Lead UX Designer"
        tools={["Figma", "Principle", "Maze", "Miro"]}
        heroImage="/zitfuse-hero.png?height=600&width=1200"
      />

      <ProjectSection title="The Challenge" backgroundColor="white" index={0}>
        <div className="max-w-4xl">
          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-8">
           University students were struggling to keep up with their coursework due to missed lectures, poor access to quality resources, and a lack of syllabus-specific tutorials. Over 70% relied on scattered notes from WhatsApp groups, while YouTube content rarely aligned with what was taught in class. This led to low confidence, poor exam performance, and high academic stress—especially during finals week.
          </p>
          <motion.div
            className="bg-red-100 border-4 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-black text-xl uppercase tracking-wide mb-4">Key Problems Identified</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 border border-black mt-3 flex-shrink-0"></div>
                <span className="text-black font-medium">
                  Limited access to consistent, quality learning materials.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 border border-black mt-3 flex-shrink-0"></div>
                <span className="text-black font-medium">
                  Inadequate revision tools and fragmented course resources.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 border border-black mt-3 flex-shrink-0"></div>
                <span className="text-black font-medium">Missed lectures due to scheduling conflicts or illness.</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 border border-black mt-3 flex-shrink-0"></div>
                <span className="text-black font-medium">Over-reliance on in-person learning with little digital backup.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </ProjectSection>

      <ProjectSection title="Design Process" backgroundColor="gray" index={1}>
        <div className="space-y-0">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Visual Design" backgroundColor="white" index={2}>
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-8 max-w-4xl">
            The new design focuses on clarity, speed, and accessibility. We implemented a clean visual hierarchy with
            bold typography and strategic use of color to guide users through their financial tasks.
          </p>
        </div>
        <ImageShowcase images={showcaseImages} layout="side-by-side" />
      </ProjectSection>

      <ProjectSection title="Results & Impact" backgroundColor="yellow" index={3}>
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-8 max-w-4xl">
            The redesigned FinanceFlow app launched to immediate positive feedback from users and significant
            improvements in key metrics across the board.
          </p>
        </div>
        <ResultsMetrics metrics={metrics} />
      </ProjectSection>

      <ProjectSection title="User Research" backgroundColor="blue" index={4}>
        <div className="space-y-16">
          <div>
            <p className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-12 max-w-4xl">
              We conducted extensive user research to understand the pain points and needs of mobile banking users. This
              research formed the foundation of our design decisions.
            </p>
            <UserPersonas personas={personas} />
          </div>

          <UserJourney steps={journeySteps} />
        </div>
      </ProjectSection>

      <ProjectSection title="Design System" backgroundColor="white" index={5}>
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-8 max-w-4xl">
            We created a comprehensive design system to ensure consistency across all touchpoints and enable faster
            design and development iterations.
          </p>
        </div>
        <DesignSystem {...designSystemData} />
      </ProjectSection>

      <ProjectSection title="Testing & Validation" backgroundColor="gray" index={6}>
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-8 max-w-4xl">
            We conducted multiple rounds of testing to validate our design decisions and identify areas for improvement.
          </p>
        </div>
        <TestingInsights {...testingData} />
      </ProjectSection>

      <ProjectSection title="Project Timeline" backgroundColor="yellow" index={7}>
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-8 max-w-4xl">
            The project was completed over 14 weeks with clear phases and deliverables at each stage.
          </p>
        </div>
        <ProjectTimeline events={timelineData} />
      </ProjectSection>

      <ProjectSection title="Lessons Learned" backgroundColor="white" index={8}>
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-8 max-w-4xl">
            Every project teaches us something new. Here are the key takeaways from the FinanceFlow redesign.
          </p>
        </div>
        <LessonsLearned lessons={lessonsData} />
      </ProjectSection>

      <ProjectSection title="Team & Credits" backgroundColor="blue" index={9}>
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-8 max-w-4xl">
            This project was a collaborative effort. Special thanks to the amazing team that made it possible.
          </p>
        </div>
        <TeamCredits members={teamData} />
      </ProjectSection>

      <NextProject
        title="EcoMarket Platform"
        category="Web Platform"
        href="/projects/ecomarket"
        image="/placeholder.svg?height=400&width=600"
      />

      <Footer designerName="Aliyon Tembo" />
    </motion.div>
  )
}
