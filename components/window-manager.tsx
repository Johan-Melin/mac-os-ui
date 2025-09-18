"use client"

import { createContext, useContext } from "react"

interface WindowManagerValue {
  close: () => void
}

const WindowManagerContext = createContext<WindowManagerValue | null>(null)

export function WindowManagerProvider({ close, children }: { close: () => void; children: React.ReactNode }) {
  return <WindowManagerContext.Provider value={{ close }}>{children}</WindowManagerContext.Provider>
}

export function useWindowManager() {
  return useContext(WindowManagerContext)
}


