import { PromptLine } from "./PromptLine"
import { projects } from "@/lib/content"

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-12 sm:py-20">
        <PromptLine command="ls -la ./projects" />

        <div className="space-y-8 font-mono text-sm">
          {projects.map((project) => (
            <div key={project.slug}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-term-blue hover:underline"
              >
                {project.slug}/
              </a>
              <span className="text-muted-foreground"> — {project.name}</span>

              <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-xs text-term-magenta">
                {project.stack.map((tech, i) => (
                  <li key={tech}>
                    {tech}
                    {i < project.stack.length - 1 && (
                      <span className="text-muted-foreground">,</span>
                    )}
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-xs text-muted-foreground">
                <span className="text-term-green">└─</span> {project.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
