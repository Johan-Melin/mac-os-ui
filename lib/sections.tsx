import { HomeSection } from "@/components/sections/home"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { ContactSection } from "@/components/sections/contact"
import { Home, User, FolderOpen, Code, Mail } from "lucide-react"

export const sections = [
  { id: "home", title: "Welcome", icon: <Home className="w-6 h-6" />, Component: HomeSection },
  { id: "about", title: "About Me", icon: <User className="w-6 h-6" />, Component: AboutSection },
  { id: "projects", title: "Projects", icon: <FolderOpen className="w-6 h-6" />, Component: ProjectsSection },
  { id: "skills", title: "Skills", icon: <Code className="w-6 h-6" />, Component: SkillsSection },
  { id: "contact", title: "Get In Touch", icon: <Mail className="w-6 h-6" />, Component: ContactSection },
] as const

export type SectionId = (typeof sections)[number]["id"]


