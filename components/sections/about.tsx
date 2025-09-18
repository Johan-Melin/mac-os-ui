"use client"

import { MacOSWindow } from "../macos-window"
import { Mail, MapPin, Calendar } from "lucide-react"

export function AboutSection() {
  return (
    <MacOSWindow
      title="About Me"
      className="max-w-3xl"
    >
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="heading-h2">
              Background
            </h2>
            <p className="text-pretty mb-4">
              {"With over 5 years of experience in web development, I specialize in creating scalable, user-friendly applications using React, Next.js, and Node.js."}
            </p>
            <p className="text-pretty">
              {"I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies and best practices."}
            </p>
          </div>
          <div>
            <h2 className="heading-h2">
              Details
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>john@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MacOSWindow>
  )
}


