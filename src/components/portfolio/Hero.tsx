import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D10]">
      {/* Subtle gradient orb in background */}
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-[#F02E65]/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#F02E65]/3 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#ADADB0]"
          >
            <span className="h-2 w-2 rounded-full bg-[#F02E65] animate-pulse" />
            <span>Identity & Security Specialist</span>
          </motion.div>

          {/* Headline with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-[#F02E65] to-white bg-clip-text text-transparent">
              Developer
            </span>
            <br />
            <span className="text-white">Advocate & Builder</span>
            <span className="inline-block w-[3px] h-[0.9em] bg-[#F02E65] ml-1 animate-pulse" />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[#ADADB0] sm:text-xl"
          >
            Technical educator focused on backend platforms, identity security,
            and modern web frameworks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#F02E65] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#F02E65]/90 hover:shadow-lg hover:shadow-[#F02E65]/25"
            >
              View Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#why-appwrite"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10"
            >
              Why Appwrite
              <span className="text-[#ADADB0]">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D10] to-transparent" />
    </section>
  )
}
