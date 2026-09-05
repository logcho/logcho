export function PromptLine({ command }: { command: string }) {
  return (
    <p className="mb-8 font-mono text-sm sm:text-base">
      <span className="text-term-green">$</span> <span>{command}</span>
    </p>
  )
}
