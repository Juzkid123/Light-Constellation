"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import President from "@/components/president"
import Constellation from "@/components/constellation"
import Initiatives from "@/components/initiatives"
import Impact from "@/components/impact"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <President />
      <Constellation />
      <Initiatives />
      <Impact />
      <Contact />
      <Footer />
    </main>
  )
}
