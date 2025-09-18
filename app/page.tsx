"use client"

import { useState, useEffect } from "react"
import { MacOSMenubar } from "@/components/macos-menubar"
import { MacOSDock } from "@/components/macos-dock"
import { sections, type SectionId } from "@/lib/sections"
import { WindowManagerProvider } from "@/components/window-manager"

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(sections[0]?.id ?? null)

  const onClose = () => setCurrentSection(null)
  const active = sections.find((s) => s.id === currentSection)

  return (
    <div className="min-h-screen bg-background">
      {/* macOS Menu Bar */}
      <MacOSMenubar />

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
        <div className="h-full flex items-center justify-center p-8">
          <WindowManagerProvider close={onClose}>
            {active ? <active.Component /> : null}
          </WindowManagerProvider>
        </div>
      </div>

      {/* macOS Dock */}
      <MacOSDock onNavigate={(section) => setCurrentSection(section)} />
    </div>
  )
}