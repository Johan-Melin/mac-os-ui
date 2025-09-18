"use client"

import { useState, useEffect } from "react"
import { MacOSMenubar } from "@/components/macos-menubar"
import { MacOSDock } from "@/components/macos-dock"
import {
  HomeSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "@/components/portfolio-sections"

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState("home")
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <HomeSection />
      case "about":
        return <AboutSection />
      case "projects":
        return <ProjectsSection />
      case "skills":
        return <SkillsSection />
      case "contact":
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* macOS Menu Bar */}
      <MacOSMenubar currentTime={currentTime} />

      {/* Desktop Background */}
      <div
        className="fixed inset-0 pt-6 pb-20"
        style={{
          backgroundImage: `url('/macos-desktop-wallpaper-abstract-gradient.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Area */}
        <div className="h-full flex items-center justify-center p-8">{renderSection()}</div>
      </div>

      {/* macOS Dock */}
      <MacOSDock onNavigate={setCurrentSection} />
    </div>
  )
}
