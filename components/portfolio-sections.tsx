"use client"

import { useState } from "react"
import { MacOSWindow } from "./macos-window"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ExternalLink, Github, Mail, MapPin, Calendar } from "lucide-react"

export function HomeSection() {
  const [windowState, setWindowState] = useState<"normal" | "minimized" | "fullscreen" | "closed">("normal")

  const handleClose = () => setWindowState("closed")
  const handleMinimize = () => setWindowState("minimized")
  const handleMaximize = () => setWindowState(windowState === "fullscreen" ? "normal" : "fullscreen")

  if (windowState === "closed") {
    return null
  }

  if (windowState === "minimized") {
    return (
      <div
        className="fixed bottom-20 left-4 w-16 h-12 bg-card/80 backdrop-blur-sm border border-border rounded cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setWindowState("normal")}
      >
        <div className="p-2 text-xs text-center text-card-foreground">Welcome</div>
      </div>
    )
  }

  return (
    <MacOSWindow
      title="Welcome"
      className={windowState === "fullscreen" ? "fixed inset-4 max-w-none z-50" : "max-w-2xl"}
      onClose={handleClose}
      onMinimize={handleMinimize}
      onMaximize={handleMaximize}
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
          {
            "Crafting beautiful, performant web experiences with modern technologies. Passionate about clean code, user experience, and innovative solutions."
          }
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

export function AboutSection() {
  const [windowState, setWindowState] = useState<"normal" | "minimized" | "fullscreen" | "closed">("normal")

  const handleClose = () => setWindowState("closed")
  const handleMinimize = () => setWindowState("minimized")
  const handleMaximize = () => setWindowState(windowState === "fullscreen" ? "normal" : "fullscreen")

  if (windowState === "closed") {
    return null
  }

  if (windowState === "minimized") {
    return (
      <div
        className="fixed bottom-20 left-20 w-16 h-12 bg-card/80 backdrop-blur-sm border border-border rounded cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setWindowState("normal")}
      >
        <div className="p-2 text-xs text-center text-card-foreground">About Me</div>
      </div>
    )
  }

  return (
    <MacOSWindow
      title="About Me"
      className={windowState === "fullscreen" ? "fixed inset-4 max-w-none z-50" : "max-w-3xl"}
      onClose={handleClose}
      onMinimize={handleMinimize}
      onMaximize={handleMaximize}
    >
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Background
            </h2>
            <p className="text-pretty mb-4">
              {
                "With over 5 years of experience in web development, I specialize in creating scalable, user-friendly applications using React, Next.js, and Node.js."
              }
            </p>
            <p className="text-pretty">
              {
                "I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies and best practices."
              }
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
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

export function ProjectsSection() {
  const [windowState, setWindowState] = useState<"normal" | "minimized" | "fullscreen" | "closed">("normal")

  const handleClose = () => setWindowState("closed")
  const handleMinimize = () => setWindowState("minimized")
  const handleMaximize = () => setWindowState(windowState === "fullscreen" ? "normal" : "fullscreen")

  if (windowState === "closed") {
    return null
  }

  if (windowState === "minimized") {
    return (
      <div
        className="fixed bottom-20 left-36 w-16 h-12 bg-card/80 backdrop-blur-sm border border-border rounded cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setWindowState("normal")}
      >
        <div className="p-2 text-xs text-center text-card-foreground">Projects</div>
      </div>
    )
  }

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
      className={windowState === "fullscreen" ? "fixed inset-4 max-w-none z-50" : "max-w-4xl"}
      onClose={handleClose}
      onMinimize={handleMinimize}
      onMaximize={handleMaximize}
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

export function SkillsSection() {
  const [windowState, setWindowState] = useState<"normal" | "minimized" | "fullscreen" | "closed">("normal")

  const handleClose = () => setWindowState("closed")
  const handleMinimize = () => setWindowState("minimized")
  const handleMaximize = () => setWindowState(windowState === "fullscreen" ? "normal" : "fullscreen")

  if (windowState === "closed") {
    return null
  }

  if (windowState === "minimized") {
    return (
      <div
        className="fixed bottom-20 left-52 w-16 h-12 bg-card/80 backdrop-blur-sm border border-border rounded cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setWindowState("normal")}
      >
        <div className="p-2 text-xs text-center text-card-foreground">Skills</div>
      </div>
    )
  }

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    },
  ]

  return (
    <MacOSWindow
      title="Skills & Technologies"
      className={windowState === "fullscreen" ? "fixed inset-4 max-w-none z-50" : "max-w-3xl"}
      onClose={handleClose}
      onMinimize={handleMinimize}
      onMaximize={handleMaximize}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MacOSWindow>
  )
}

export function ContactSection() {
  const [windowState, setWindowState] = useState<"normal" | "minimized" | "fullscreen" | "closed">("normal")

  const handleClose = () => setWindowState("closed")
  const handleMinimize = () => setWindowState("minimized")
  const handleMaximize = () => setWindowState(windowState === "fullscreen" ? "normal" : "fullscreen")

  if (windowState === "closed") {
    return null
  }

  if (windowState === "minimized") {
    return (
      <div
        className="fixed bottom-20 left-68 w-16 h-12 bg-card/80 backdrop-blur-sm border border-border rounded cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setWindowState("normal")}
      >
        <div className="p-2 text-xs text-center text-card-foreground">Contact</div>
      </div>
    )
  }

  return (
    <MacOSWindow
      title="Get In Touch"
      className={windowState === "fullscreen" ? "fixed inset-4 max-w-none z-50" : "max-w-2xl"}
      onClose={handleClose}
      onMinimize={handleMinimize}
      onMaximize={handleMaximize}
    >
      <div className="text-center space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            {"Let's Work Together"}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {
              "Interested in collaborating? I'd love to hear about your project and discuss how we can bring your ideas to life."
            }
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
