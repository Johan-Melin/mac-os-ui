"use client"

import { type ReactNode, useState } from "react"
import { X } from "lucide-react"
import { useWindowManager } from "./window-manager"

interface MacOSWindowProps {
  title: string
  children: ReactNode
  className?: string
  onClose?: () => void
}

export function MacOSWindow({ title, children, className = "", onClose }: MacOSWindowProps) {
  const [isHovered, setIsHovered] = useState(false)
  const wm = useWindowManager()

  return (
    <div
      className={`bg-card border border-border rounded-lg shadow-lg overflow-hidden window-appear ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Window Chrome */}
      <div
        className="h-8 flex items-center justify-between px-4 border-b border-border"
        style={{ background: "var(--macos-window-chrome)" }}
      >
        <div className="flex items-center space-x-2">
          <button
            className={`w-3 h-3 rounded-full transition-all duration-200 ${isHovered ? "hover:brightness-90" : ""}`}
            style={{ backgroundColor: "var(--macos-traffic-red)" }}
            onClick={onClose ?? wm?.close}
          >
            {isHovered && <X className="w-2 h-2 text-red-800 mx-auto" />}
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-sm font-medium text-card-foreground">{title}</span>
        </div>
        <div className="w-12" /> {/* Spacer for centering */}
      </div>

      {/* Window Content */}
      <div className="p-6">{children}</div>
    </div>
  )
}
