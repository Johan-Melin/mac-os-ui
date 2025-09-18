"use client"

import { type ReactNode, useState } from "react"
import { X, Minus, Square } from "lucide-react"

interface MacOSWindowProps {
  title: string
  children: ReactNode
  className?: string
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
}

export function MacOSWindow({ title, children, className = "", onClose, onMinimize, onMaximize }: MacOSWindowProps) {
  const [isHovered, setIsHovered] = useState(false)

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
            onClick={onClose}
          >
            {isHovered && <X className="w-2 h-2 text-red-800 mx-auto" />}
          </button>
          <button
            className={`w-3 h-3 rounded-full transition-all duration-200 ${isHovered ? "hover:brightness-90" : ""}`}
            style={{ backgroundColor: "var(--macos-traffic-yellow)" }}
            onClick={onMinimize}
          >
            {isHovered && <Minus className="w-2 h-2 text-yellow-800 mx-auto" />}
          </button>
          <button
            className={`w-3 h-3 rounded-full transition-all duration-200 ${isHovered ? "hover:brightness-90" : ""}`}
            style={{ backgroundColor: "var(--macos-traffic-green)" }}
            onClick={onMaximize}
          >
            {isHovered && <Square className="w-2 h-2 text-green-800 mx-auto" />}
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
