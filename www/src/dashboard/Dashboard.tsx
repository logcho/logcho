"use client"

import { Dock, DockIcon } from "@/components/ui/dock"
import React from "react"
import { Github, Linkedin, Home, Mail } from "lucide-react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Separator } from "@/components/ui/separator"

export function Dashboard() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Dock direction="middle">
        {/* GitHub */}
        <DockIcon>
          <a href="https://github.com/logcho" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
        </DockIcon>

        {/* LinkedIn */}
        <DockIcon>
          <a href="https://www.linkedin.com/in/logcho04/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </DockIcon>

        {/* Homepage */}
        <DockIcon>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Home className="w-6 h-6" />
          </a>
        </DockIcon>

        {/* Email */}
        <DockIcon>
          <a href="mailto:lschoi@smu.edu">
            <Mail className="w-6 h-6" />
          </a>
        </DockIcon>

        {/* Separator  */}
        <Separator orientation="vertical" />

        {/* Theme Toggle */}
        <DockIcon>
          <AnimatedThemeToggler className="w-6 h-6" />
        </DockIcon>
      </Dock>
    </div>
  )
}
