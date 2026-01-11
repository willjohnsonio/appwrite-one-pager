import { Github } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0D0D10]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-lg font-semibold text-white transition-colors hover:text-[#F02E65]"
          >
            William Johnson
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a
              href="#work"
              className="text-sm font-medium text-[#ADADB0] transition-colors hover:text-white"
            >
              Work
            </a>
            <a
              href="#why-appwrite"
              className="text-sm font-medium text-[#ADADB0] transition-colors hover:text-white"
            >
              Why Appwrite
            </a>
            <a
              href="https://github.com/willjohnsonio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#ADADB0] transition-colors hover:text-white"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
