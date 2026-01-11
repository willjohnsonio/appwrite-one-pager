import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/portfolio/Header'
import { Hero } from '@/components/portfolio/Hero'
import { WorkGrid } from '@/components/portfolio/WorkGrid'
import { WhyAppwrite } from '@/components/portfolio/WhyAppwrite'
import { Footer } from '@/components/portfolio/Footer'

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-[#0D0D10]">
      <Header />
      <main>
        <Hero />
        <WorkGrid />
        <WhyAppwrite />
      </main>
      <Footer />
    </div>
  )
}
