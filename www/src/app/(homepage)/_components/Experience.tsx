import { PromptLine } from "./PromptLine"
import { experience } from "@/lib/content"

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-12 sm:py-20">
        <PromptLine command="cat experience.log" />

        <div className="space-y-8 font-mono text-sm">
          {experience.map((entry) => (
            <div key={entry.org}>
              <p>
                <span className="text-muted-foreground">[{entry.dates}]</span>{" "}
                <span className="text-term-blue">{entry.org}</span> — {entry.role}
              </p>
              <ul className="mt-2 space-y-1.5 pl-4">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="leading-relaxed text-muted-foreground">
                    <span className="text-term-green">{">"}</span> {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
