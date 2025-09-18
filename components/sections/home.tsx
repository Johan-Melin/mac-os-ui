"use client"

import { MacOSWindow } from "../macos-window"
import { Button } from "../ui/button"
import { Github, Mail } from "lucide-react"

interface WindowSectionProps {
  onClose: () => void
}

export function HomeSection({ onClose }: WindowSectionProps) {
  return (
    <MacOSWindow
      title="Welcome"
      className="max-w-2xl"
      onClose={onClose}
    >
      <div className="text-center space-y-6">
        <div className="w-32 h-32 mx-auto rounded-full bg-slate-700 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
          AC
        </div>
        <div>
          <h1 className="text-4xl font-bold text-balance mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            John Doe
          </h1>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: "var(--font-source-sans)" }}>
            Full-Stack Web Developer
          </p>
        </div>
        <p className="text-lg text-pretty max-w-lg mx-auto">
          {"Crafting beautiful, performant web experiences with modern technologies. Passionate about clean code, user experience, and innovative solutions."}
        </p>
        <div className="flex justify-center gap-4">
          <Button className="gap-2">
            <Mail className="w-4 h-4" />
            Get In Touch
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Github className="w-4 h-4" />
            View Work
          </Button>
        </div>
      </div>
    </MacOSWindow>
  )
}


