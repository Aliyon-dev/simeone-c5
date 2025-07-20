export interface Project {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  category: string
  year: string
  caseStudyUrl?: string
  gallery?: GalleryImage[]
  hasFullCaseStudy?: boolean
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
  category?: string
}

export interface Badge {
  text: string
  variant: "primary" | "secondary" | "success" | "warning"
  color: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}
