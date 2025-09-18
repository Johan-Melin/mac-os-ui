"use client"

import { MacOSWindow } from "../macos-window"

export function SkillsSection() {
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
      className="max-w-3xl"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="heading-h3">
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


