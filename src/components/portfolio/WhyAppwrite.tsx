import { motion } from 'motion/react'
import { Heart, Server, Shield, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Server,
    title: 'Backend as a Service',
    description: 'Complete backend infrastructure without the complexity.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Built-in authentication and authorization that just works.',
  },
  {
    icon: Zap,
    title: 'Developer Experience',
    description: 'APIs and SDKs designed for developer productivity.',
  },
  {
    icon: Heart,
    title: 'Open Source',
    description: 'Transparent, community-driven development.',
  },
]

export function WhyAppwrite() {
  return (
    <section
      id="why-appwrite"
      className="relative overflow-hidden py-24"
      style={{
        background:
          'linear-gradient(180deg, #0D0D10 0%, #141418 50%, #0D0D10 100%)',
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F02E65]">
            Assignment
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Appwrite
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/5 bg-[#19191D]/50 p-8 backdrop-blur-sm sm:p-12"
        >
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-lg leading-relaxed text-[#E4E4E7]">
              Appwrite is a platform that understands developers don't want to
              reinvent authentication, databases, and storage for every project.
              As a Developer Advocate, I'm drawn to tools that genuinely improve
              developer experience by removing repetitive tasks and freeing up
              time. I built this page using <b>Appwrite Imagine</b> to
              personally test that workflow. Imagine eliminated the frontend
              boilerplate, saving me from the 'setup fatigue.' I didn't have to
              configure Tailwind or configure layout code. I went from a text
              prompt to a deployed site in minutes. This project proved that
              Appwrite effectively removes the friction between having an idea
              and shipping it.
            </p>

            {/* Reasons Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 rounded-lg bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F02E65]/10 text-[#F02E65]">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{reason.title}</h3>
                    <p className="text-sm text-[#ADADB0]">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
