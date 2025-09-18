"use client"

import { MacOSWindow } from "../macos-window"
import { Button } from "../ui/button"
import { Github, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <MacOSWindow
      title="Get In Touch"
      className="max-w-2xl"
    >
      <div className="text-center space-y-6">
        <div>
          <h2 className="heading-h2">
            {"Let's Work Together"}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {"Interested in collaborating? I'd love to hear about your project and discuss how we can bring your ideas to life."}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button className="gap-2">
            <Mail className="w-4 h-4" />
            john@example.com
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">Available for freelance projects and full-time opportunities</p>
        </div>
      </div>
    </MacOSWindow>
  )
}


