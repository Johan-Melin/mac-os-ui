"use client"

import type React from "react"

import { useState } from "react"
import { Home, User, Mail, Github, Linkedin, Code, FolderOpen } from "lucide-react"
import { useTheme } from "next-themes"

interface DockItem {
  id: string
  icon: React.ReactNode
  label: string
  action: () => void
}

interface MacOSDockProps {
  onNavigate: (section: string) => void
}

export function MacOSDock({ onNavigate }: MacOSDockProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  const dockItems: DockItem[] = [
    {
      id: "home",
      icon: <Home className="w-6 h-6" />,
      label: "Home",
      action: () => onNavigate("home"),
    },
    {
      id: "about",
      icon: <User className="w-6 h-6" />,
      label: "About",
      action: () => onNavigate("about"),
    },
    {
      id: "projects",
      icon: <FolderOpen className="w-6 h-6" />,
      label: "Projects",
      action: () => onNavigate("projects"),
    },
    {
      id: "skills",
      icon: <Code className="w-6 h-6" />,
      label: "Skills",
      action: () => onNavigate("skills"),
    },
    {
      id: "contact",
      icon: <Mail className="w-6 h-6" />,
      label: "Contact",
      action: () => onNavigate("contact"),
    },
    {
      id: "github",
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      action: () => window.open("https://github.com", "_blank"),
    },
    {
      id: "linkedin",
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      action: () => window.open("https://linkedin.com", "_blank"),
    },
    {
      id: "theme",
      icon: theme === "light" ? "☀️" : theme === "dark" ? "🌙" : "🎨",
      label: "Theme",
      action: () => {
        const themes = ["light", "dark", "classic"]
        const currentIndex = themes.indexOf(theme || "light")
        const nextTheme = themes[(currentIndex + 1) % themes.length]
        setTheme(nextTheme)
      },
    },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <div
        className="flex items-end space-x-2 px-4 py-3 rounded-2xl backdrop-blur-md border shadow-lg"
        style={{
          background: "var(--macos-dock)",
          borderColor: "var(--macos-dock-border)",
        }}
      >
        {dockItems.map((item) => (
          <div
            key={item.id}
            className="relative group"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button
              className={`p-3 rounded-xl transition-all duration-200 hover:bg-white/20 ${
                hoveredItem === item.id ? "dock-bounce transform scale-110" : ""
              }`}
              onClick={item.action}
            >
              <div className="text-foreground">
                {typeof item.icon === "string" ? <span className="text-2xl">{item.icon}</span> : item.icon}
              </div>
            </button>

            {/* Tooltip */}
            {hoveredItem === item.id && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">{item.label}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
