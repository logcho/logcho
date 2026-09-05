"use client"

import React from "react"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { asciiBanner, computerIcon, profile } from "@/lib/content"

export default function Main() {
  return (
    <section
      id="top"
      className="mx-auto max-w-3xl px-6 pt-14 pb-20 sm:px-12 sm:pt-20 sm:pb-28"
    >
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
        <pre
          aria-label="Logan Choi"
          className="overflow-x-auto text-[10px] leading-[1.15] font-medium text-term-green sm:text-lg md:text-xl"
        >
          {asciiBanner}
        </pre>

        <pre
          aria-hidden
          className="hidden shrink-0 pt-1 text-[11px] leading-[1.15] text-muted-foreground sm:block"
        >
          {computerIcon}
        </pre>
      </div>

      <div className="mt-10 space-y-8 font-mono text-sm sm:text-base">
        <div>
          <p>
            <span className="text-term-green">$</span> whoami
          </p>
          <TypingAnimation
            as="p"
            duration={30}
            className="mt-2 text-sm leading-relaxed font-normal text-foreground sm:text-base"
          >
            {profile.role}
          </TypingAnimation>
        </div>

        <div>
          <p>
            <span className="text-term-green">$</span> cat mission.txt
          </p>
          <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 font-mono text-sm">
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 transition-colors hover:border-term-green hover:text-term-green"
        >
          <span className="text-term-green">$</span> cat resume.pdf
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 transition-colors hover:border-term-blue hover:text-term-blue"
        >
          <span className="text-term-green">$</span> cd ./projects
        </a>
      </div>

      <div className="mt-10 max-w-md rounded-md border border-border bg-card px-4 py-3 font-mono text-xs sm:text-sm">
        <p className="mb-2 text-muted-foreground">
          <span className="text-term-green">$</span> cat profile.json
        </p>
        <p>
          <span className="text-term-blue">&#123;</span>
        </p>
        <p className="pl-4">
          <span className="text-term-magenta">&quot;name&quot;</span>: &quot;{profile.name}&quot;,
        </p>
        <p className="pl-4">
          <span className="text-term-magenta">&quot;location&quot;</span>: &quot;{profile.location}&quot;,
        </p>
        <p className="pl-4">
          <span className="text-term-magenta">&quot;school&quot;</span>: &quot;{profile.school}&quot;,
        </p>
        <p className="pl-4">
          <span className="text-term-magenta">&quot;status&quot;</span>:{" "}
          <span className="text-term-green">&quot;{profile.status}&quot;</span>
        </p>
        <p>
          <span className="text-term-blue">&#125;</span>
        </p>
      </div>
    </section>
  )
}
