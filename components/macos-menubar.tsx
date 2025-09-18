"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun, Palette } from "lucide-react"

interface MenubarProps {
  currentTime: string
}

export function MacOSMenubar({ currentTime }: MenubarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  const menus = [
    {
      id: "apple",
      label: "🍎",
      items: [
        { label: "About This Portfolio", action: () => {} },
        { label: "System Preferences...", action: () => {} },
        { type: "separator" },
        { label: "Sleep", action: () => {} },
        { label: "Restart...", action: () => {} },
        { label: "Shut Down...", action: () => {} },
      ],
    },
    {
      id: "file",
      label: "File",
      items: [
        { label: "New Project", action: () => {} },
        { label: "Open...", action: () => {} },
        { type: "separator" },
        { label: "Save", action: () => {} },
        { label: "Export...", action: () => {} },
      ],
    },
    {
      id: "edit",
      label: "Edit",
      items: [
        { label: "Undo", action: () => {} },
        { label: "Redo", action: () => {} },
        { type: "separator" },
        { label: "Cut", action: () => {} },
        { label: "Copy", action: () => {} },
        { label: "Paste", action: () => {} },
      ],
    },
    {
      id: "view",
      label: "View",
      items: [
        { label: "Show All Projects", action: () => {} },
        { label: "Hide Sidebar", action: () => {} },
        { type: "separator" },
        {
          label: "Light Theme",
          action: () => setTheme("light"),
          icon: <Sun className="w-4 h-4" />,
        },
        {
          label: "Dark Theme",
          action: () => setTheme("dark"),
          icon: <Moon className="w-4 h-4" />,
        },
        {
          label: "Classic Theme",
          action: () => setTheme("classic"),
          icon: <Palette className="w-4 h-4" />,
        },
      ],
    },
  ]

  return (
    <div
      className="fixed top-0 left-0 right-0 h-6 z-50 flex items-center justify-between px-4 text-sm font-medium"
      style={{
        background: "var(--macos-menubar)",
        color: "var(--macos-menubar-text)",
        borderBottom: "1px solid var(--macos-dock-border)",
      }}
    >
      <div className="flex items-center space-x-4">
        {menus.map((menu) => (
          <div key={menu.id} className="relative">
            <button
              className={`px-2 py-1 rounded hover:bg-black/10 transition-colors ${
                activeMenu === menu.id ? "bg-black/10" : ""
              }`}
              onClick={() => setActiveMenu(activeMenu === menu.id ? null : menu.id)}
            >
              {menu.label}
            </button>

            {activeMenu === menu.id && (
              <div
                className="absolute top-full left-0 mt-1 min-w-48 bg-white/95 backdrop-blur-md rounded-md shadow-lg border border-black/10 py-1 menu-slide-down"
                style={{ background: "var(--popover)", color: "var(--popover-foreground)" }}
              >
                {menu.items.map((item, index) =>
                  item.type === "separator" ? (
                    <div key={index} className="h-px bg-border mx-2 my-1" />
                  ) : (
                    <button
                      key={index}
                      className="w-full px-4 py-1 text-left hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2"
                      onClick={() => {
                        item.action?.()
                        setActiveMenu(null)
                      }}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ),
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4" />
          <span className="text-xs">{currentTime}</span>
        </div>
      </div>
    </div>
  )
}
