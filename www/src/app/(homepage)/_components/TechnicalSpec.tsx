import React from "react"
import { PromptLine } from "./PromptLine"
import { skills } from "@/lib/content"

export default function TechnicalSpec() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-12 sm:py-20">
        <PromptLine command="cat skills.json" />

        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 font-mono text-xs leading-relaxed sm:text-sm">
          <span className="text-term-blue">{"{"}</span>
          {"\n"}
          {skills.map((row, i) => (
            <React.Fragment key={row.key}>
              {"  "}
              <span className="text-term-magenta">&quot;{row.key}&quot;</span>
              <span className="text-muted-foreground">: [</span>
              {row.values.map((value, vi) => (
                <React.Fragment key={value}>
                  <span className="text-term-green">&quot;{value}&quot;</span>
                  {vi < row.values.length - 1 && (
                    <span className="text-muted-foreground">, </span>
                  )}
                </React.Fragment>
              ))}
              <span className="text-muted-foreground">]</span>
              {i < skills.length - 1 && <span className="text-muted-foreground">,</span>}
              {"\n"}
            </React.Fragment>
          ))}
          <span className="text-term-blue">{"}"}</span>
        </pre>
      </div>
    </section>
  )
}
