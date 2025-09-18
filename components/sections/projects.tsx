"use client"

import { MacOSWindow } from "../macos-window"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ExternalLink, Github } from "lucide-react"

interface WindowSectionProps {
  onClose: () => void
}

export function ProjectsSection({ onClose }: WindowSectionProps) {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      tech: ["React", "Tailwind CSS", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <MacOSWindow
      title="Projects"
      className="max-w-4xl"
      onClose={onClose}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                    <Github className="w-3 h-3" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </MacOSWindow>
  )
}


