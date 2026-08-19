export function Footer() {
  return (
    <footer className="section-gap border-t border-border py-6">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-3 px-4 font-mono text-xs text-muted-foreground sm:px-6 md:flex-row lg:px-10">
        <div>
          © {new Date().getFullYear()} Yuvaraj M · Built with React, Tailwind &amp; ☕
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            All systems operational
          </span>
          <a href="#home" className="hover:text-primary">back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
