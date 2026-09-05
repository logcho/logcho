"use client"

import { Dock, DockIcon } from "@/components/ui/dock"
import React from "react"
import { Github, Linkedin, FileText, Mail } from "lucide-react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Separator } from "@/components/ui/separator"
import { profile } from "@/lib/content"

export function Dashboard() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform">
      <Dock direction="middle">
        {/* GitHub */}
        <DockIcon className="hover:text-term-green">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
        </DockIcon>

        {/* LinkedIn */}
        <DockIcon className="hover:text-term-green">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </DockIcon>

        {/* Resume */}
        <DockIcon className="hover:text-term-green">
          <a href={profile.resumeHref} target="_blank" rel="noopener noreferrer">
            <FileText className="w-6 h-6" />
          </a>
        </DockIcon>

        {/* Email */}
        <DockIcon className="hover:text-term-green">
          <a href={`mailto:${profile.email}`}>
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
