"use client"

import React from "react"
import { BoxReveal } from "@/components/ui/box-reveal"
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-center px-4 space-y-6">
      
      {/* Name Reveal */}
      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Logan Choi</h1>
      </BoxReveal>

      {/* Summary Reveal */}
      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <p className="text-xl max-w-xl mb-4">
          I'm a software developer who enjoys coding—frontend, backend, full-stack, and exploring new technologies like blockchain or AI.
        </p>
      </BoxReveal>

      {/* Optional Button Reveal */}
      <BoxReveal boxColor="#5046e6" duration={0.5}>
        <RainbowButton>
            Explore my work
        </RainbowButton>

      </BoxReveal>

    </div>
  )
}
