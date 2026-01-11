import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0D0D10] py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-[#ADADB0]">
            Built with
            <Heart className="h-3.5 w-3.5 text-[#F02E65]" />
            React. Deployed on
            <span className="font-medium text-white">Appwrite Sites</span>.
          </p>
          <p className="text-sm text-[#ADADB0]">
            © {new Date().getFullYear()} William Johnson
          </p>
        </div>
      </div>
    </footer>
  )
}
