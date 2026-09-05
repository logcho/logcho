export function TerminalChrome() {
  return (
    <div className="sticky top-0 z-30 flex h-10 shrink-0 items-center gap-2 rounded-t-xl border-b border-border bg-background/95 px-4 backdrop-blur">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      <span className="flex-1 text-center font-mono text-xs text-muted-foreground">
        lchoi@smu:~ — zsh
      </span>
      <span className="w-[3.75rem]" aria-hidden />
    </div>
  )
}
