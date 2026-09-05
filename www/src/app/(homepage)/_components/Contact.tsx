import { PromptLine } from "./PromptLine"
import { profile } from "@/lib/content"

export default function Contact() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-20 sm:px-12 sm:pt-20 sm:pb-24">
        <PromptLine command="./contact.sh" />

        <div className="space-y-1.5 font-mono text-sm">
          <p className="text-muted-foreground">
            {"> "}
            {profile.status}, starting May 2027.
          </p>

          <p className="pt-4">
            <span className="text-term-green">$</span>{" "}
            <a href={`mailto:${profile.email}`} className="hover:text-term-blue hover:underline">
              mail {profile.email}
            </a>
          </p>
          <p>
            <span className="text-term-green">$</span>{" "}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-term-blue hover:underline"
            >
              open linkedin.com/in/logcho04
            </a>
          </p>
          <p>
            <span className="text-term-green">$</span>{" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-term-blue hover:underline"
            >
              open github.com/logcho
            </a>
          </p>

          <p className="caret pt-6 text-xs text-muted-foreground">process exited, code 0</p>
        </div>
      </div>
    </section>
  )
}
