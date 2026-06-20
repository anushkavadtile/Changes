import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { ServicesSnapshot } from "@/components/sections/services-snapshot"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"
import { FinalCTA } from "@/components/sections/final-cta"
import { Vision } from "@/components/sections/vision"
import { Stats } from "@/components/sections/stats"
import { TrustIndicators } from "@/components/sections/trust-indicators"
import { FAQ } from "@/components/sections/faq"
import { AppDownload } from "@/components/sections/app-download"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustIndicators />
        <Vision />
        <Stats />
        <ServicesSnapshot />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <AppDownload />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
