import { motion } from 'motion/react'
import { Shield, GraduationCap, Zap, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'AI Agents and API Keys',
    description:
      'Explain the risks of giving API keys to AI Agents and how Auth0 can help.',
    icon: Shield,
    tags: ['Security', 'AI', 'Documentation'],
    link: 'https://auth0.com/blog/api-key-security-for-ai-agents',
  },
  {
    title: 'Auth0 Actions',
    description: 'Blog post covering Auth0 Actions use case.',
    icon: GraduationCap,
    tags: ['Auth0', 'Identity', 'Course'],
    link: 'https://auth0.com/blog/send-slack-message-after-sign-up-with-auth0-actions/',
  },
  {
    title: 'Google Native Sign In',
    description: 'Overview of using Google Native Sign In with Auth0.',
    icon: Zap,
    tags: ['Next.js', 'React', 'Tutorial'],
    link: 'https://auth0.com/blog/native-google-sign-in-android-apps',
  },
]

export function WorkGrid() {
  return (
    <section id="work" className="relative bg-[#0D0D10] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F02E65]">
            Featured
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technical Content (2025)
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block rounded-xl border border-white/5 bg-[#19191D] p-6 transition-all duration-300 hover:border-[#F02E65]/30 hover:shadow-[0_0_40px_-12px_rgba(240,46,101,0.3)] cursor-pointer"
            >
              {/* Icon & Arrow */}
              <div className="mb-4 flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#F02E65]/10 text-[#F02E65] transition-colors group-hover:bg-[#F02E65]/20">
                  <project.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#ADADB0] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#F02E65] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-[#F02E65]">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-[#ADADB0]">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[#ADADB0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#F02E65]/5 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
